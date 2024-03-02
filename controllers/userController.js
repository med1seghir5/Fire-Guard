const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const {
  createTokenUser,
  attachCookiesToResponse,
  checkPermission,
} = require("../utils");

const getAllUsers = async (req, res) => {
  const users = await User.find({ role: "user" }).select(
    "email name _id userName isVerifiedEmail"
  );
  res.status(StatusCodes.OK).json({ count: users.length, users });
};

const getSingleUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findOne({ _id: id }).select(
    "email name _id userName isVerifiedEmail"
  );
  if (!user) {
    throw new CustomError.NotFoundError(`No user with id ${id}`);
  }
  checkPermission(req.user, user._id);
  res.status(StatusCodes.OK).json({ user });
};

const showMe = async (req, res) => {
  res.status(StatusCodes.OK).json({ user: req.user });
};

const updateUser = async (req, res) => {
  const {  name } = req.body;
  if (!name) {
    throw new CustomError.BadRequestError("please provide name or email");
  }
  const user = await User.findOneAndUpdate(
    { _id: req.user.userId },
    { name: name },
    { new: true, runValidators: true }
  ).select("email name _id userName isVerifiedEmail");
  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });
  res.status(StatusCodes.CREATED).json({ user });
};

const updateUserPassword = async (req, res) => {
  const { newPassword, oldPassword } = req.body;
  if (!newPassword || !oldPassword) {
    throw new CustomError.BadRequestError("please provide both value");
  }
  const user = await User.findOne({ _id: req.user.userId });
  const isMatch = await user.comparePassword(oldPassword);
  if (!isMatch) {
    throw new CustomError.UnauthenticatedError("Invalid information");
  }
  user.password = newPassword;
  await user.save();
  res.status(StatusCodes.OK).json({ msg: "Succes !! password updated" });
};


module.exports = {
  getAllUsers,
  getSingleUser,
  showMe,
  updateUser,
  updateUserPassword,
};
