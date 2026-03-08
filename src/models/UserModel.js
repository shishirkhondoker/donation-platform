const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    otp: { type: String, required: true },
    role: { type: String, required: true },
  },
  {
    Timestamps: true,
    versionKey: false,
  },
);

const UserModel = mongoose.model("users", DataSchema);

module.exports = UserModel;
