exports.getUser = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      user: {
        ...req.user._doc,
        fullname: `${req.user.firstName}${req.user.lastName}`,
      },
      message: "User Validated",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Invalid Credentials!",
    });
  }
};

exports.getUserDetails = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
};

exports.getUserDetailsByUsername = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
};

exports.getUserListBySearch = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
};

exports.getFriendList = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
};

exports.getAboutDetails = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
};

exports.getUserNotifications = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
};

exports.sendFriendRequest = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
};

exports.cancelFriendRequest = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
};

exports.confirmFriendRequest = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
};

exports.updateUserDetails = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
};

exports.readOneNotification = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
};

exports.readAllNotification = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
};
