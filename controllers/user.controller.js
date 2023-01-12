exports.getUser = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      user: req.user,
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
