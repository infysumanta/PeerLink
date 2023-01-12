const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("./../config");

const { User } = require("./../models");

const register = asyncHandler(async (req, res) => {
  try {
    const { firstName, lastName, username, email, password, gender, dob } =
      req.body;
    if (
      !firstName ||
      !lastName ||
      !username ||
      !email ||
      !password ||
      !gender ||
      !dob
    ) {
      res.status(403);
      throw new Error(`Please Enter all required Details`);
    }

    const isUsernameExist = await User.exists({ username: username });
    if (isUsernameExist) {
      res.status(403);
      throw new Error("Username already registered with us!");
    }
    const isEmailExist = await User.exists({ email: email });
    if (isEmailExist) {
      res.status(403);
      throw new Error("Email already registered with us!");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: hashedPassword,
      gender: gender,
      dob: dob,
    });
    await user.save();
    return res.status(200).json({
      success: true,
      message: "Account created Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
});

const login = asyncHandler(async (req, res) => {
  try {
    const { username, email } = req.body;
    if (!username || !password) {
      return res.status(403).json({
        success: false,
        message: "Please enter all required field",
      });
    }

    const user = await User.findOne({ username: username });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
        expiresIn: "30d",
      });

      user.password = undefined;

      return res.status(200).json({
        success: true,
        user: { ...user._doc, token },
        message: "Logged in Successfully!",
      });
    }
    return res.status(401).json({
      success: false,
      message: "Invalid Credentials!",
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
});
module.exports = {
  login,
  register,
};
