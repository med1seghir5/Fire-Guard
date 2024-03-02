const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide a name"],
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "please provide an email"],
    validate: {
      validator: isEmail,
      message: "please provide  valid email",
    },
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
    minlength: 6,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  isVerifiedEmail: {
    type: Boolean,
    default: false,
  },
  verificationToken: { type: String },
  passwordToken: { type: String },
  passwordTokenExpirationDate: { type: Date },
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});


UserSchema.methods.comparePassword = async function (candidatePassword){
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", UserSchema);
