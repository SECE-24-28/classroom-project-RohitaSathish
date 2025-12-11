const User = require("../models/user");
exports.createUser = async (req, res) => {
  try {
    const { firstName,lastName,email } = req.body;
    const createUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
    });
    return res.status(200).json({
      success: true,
      message: "User is created successfully",
      data:createUser
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e.message,
    });
  }
};

exports.createManyUsers = async (req, res) => {
  try {
    const { details } = req.body;
    const createUsers = await User.insertMany(details);
    return res.status(200).json({
      success: true,
      message: "User is created successfully",
      data:createUsers
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e.message,
    });
  }
};