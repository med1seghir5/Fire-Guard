const User = require("../models/User");
const Token = require("../models/Token");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const crypto = require("crypto");
const {
  attachCookiesToResponse,
  createTokenUser,
  sendVerificationEmail,
  sendResetPasswordEmail,
  hashString,
} = require("../utils");

const register = async (req, res) => {
  const { email, name , password } = req.body;
  if (!email || !password || !name) {
    throw new CustomError.BadRequestError(
      "Please provide all your information."
    );
  }
  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError("Email already exists");
  }


  // first registered user is an admin
  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? "admin" : "user";
  const verificationToken = crypto.randomBytes(40).toString("hex");
  const user = await User.create({
    email,
    name,
    password,
    role,
    verificationToken,
  });
  const origin = "http://localhost:3000";
  const tokenUser = createTokenUser(user);
  // create refresh token
  let refreshToken = crypto.randomBytes(40).toString("hex");
  const ip = req.ip;
  const userToken = {
    refreshToken,
    ip,
    user: user._id,
  };
  await Token.create(userToken);
  attachCookiesToResponse({ res, user: tokenUser, refreshToken });
  res.status(StatusCodes.OK).json({ user: tokenUser });
};

const verifyEmail = async (req, res) => {
  const { token, email } = req.query;
  if (!token || !email) {
    throw new CustomError.BadRequestError("Invalid token");
  }
  const user = await User.findOne({ email });
  if (user.verificationToken === token) {
    user.isVerifiedEmail = true;
    user.verificationToken = "";
    await user.save();
    res.status(StatusCodes.OK).send("Email verified");
    return
  }
  throw new CustomError.BadRequestError("Invalid token");
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new CustomError.BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials");
  }
  const tokenUser = createTokenUser(user);
  // create refresh token
  let refreshToken = "";
  // check for existing token
  const existingToken = await Token.findOne({ user: user._id });
  if (existingToken) {
    const { isValid } = existingToken;
    if (!isValid) {
      throw new CustomError.UnauthenticatedError("Invalid Credentials");
    }
    refreshToken = existingToken.refreshToken;
    attachCookiesToResponse({ res, user: tokenUser, refreshToken });
    res.status(StatusCodes.OK).json({ user: tokenUser });
    return;
  }
  refreshToken = crypto.randomBytes(40).toString("hex");
  const ip = req.ip;
  const userToken = {
    refreshToken,
    ip,
    user: user._id,
  };
  await Token.create(userToken);
  attachCookiesToResponse({ res, user: tokenUser, refreshToken });
  res.status(StatusCodes.OK).json({ user: tokenUser });
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw new CustomError.BadRequestError("Please provide an email");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new CustomError.NotFoundError("No user with that email");
  }
  const passwordToken = crypto.randomBytes(70).toString("hex");
  // send email
  const origin = "http://localhost:3000";
  await sendResetPasswordEmail({
    name: user.name,
    email,
    token: passwordToken,
    origin,
  });
  const oneMinute = 1000 * 60;
  const oneHour = oneMinute * 60;
  user.passwordToken = hashString(passwordToken);
  user.passwordTokenExpirationDate = new Date(Date.now() + oneHour);
  await user.save();
  res.status(StatusCodes.OK).send("check your email for the reset link");
};

const resetPassword = async (req, res) => {
  const { token, email, password } = req.body;
  if (!token || !email || !password) {
    throw new CustomError.BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ email });

  if (user) {
    const currentDate = new Date();
    if (
      user.passwordToken === hashString(token) &&
      user.passwordTokenExpirationDate > currentDate
    ) {
      user.password = password;
      user.passwordToken = null;
      user.passwordTokenExpirationDate = null;
      await user.save();
    }
  }
  res.status(StatusCodes.OK).send("reset password");
};

const logout = async (req, res) => {
  await Token.findOneAndDelete({ user: req.user.userId });
  res.cookie("accessToken", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.cookie("refreshToken", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out" });
};

module.exports = {
  register,
  verifyEmail,
  login,
  forgotPassword,
  resetPassword,
  logout,
};
