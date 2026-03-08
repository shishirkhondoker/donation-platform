const EmailSend = require("../utility/EmailHelper.js");
const UserModel = require("../models/UserModel.js");

const { EncodeToken } = require("../utility/TokenHelper.js");
const { verify } = require("crypto");

const UserOTPServices = async (req) => {
  try {
    let email = req.params.email;
    let code = "55555";
    let EmailText = `Your verification code is = ${code}`;
    let EmailSubject = "Email verification";

    await EmailSend(email, EmailText, EmailSubject);
    await UserModel.updateOne(
      { email: email },
      { $set: { otp: code } },
      { upsert: true },
    );

    return { status: "success", message: "5 digit OTP has been send" };
  } catch (e) {
    return { status: "fail", message: "Something went wrong" };
  }
};

const VerifyOTPService = async (req) => {
  try {
    let email = req.params.email;
    let otp = req.params.otp;

    let user = await UserModel.findOne({
      email: email,
      otp: otp,
    }).select("_id");

    if (user) {
      let token = EncodeToken(email, user._id.toString());

      await UserModel.updateOne({ email: email }, { $set: { otp: "0" } });

      return {
        status: "success",
        message: "valid otp",
        token: token,
      };
    } else {
      return {
        status: "fail",
        message: "Invalid OTP",
      };
    }
  } catch (e) {
    return {
      status: "fail",
      message: "Invalid OTP",
    };
  }
};

const SaveProfileService = async (req) => {
  try {
    let _id = req.headers._id;
    let reqBody = req.body;
    reqBody._id = _id;

    await UserModel.updateOne(
      {
        _id: _id,
      },
      { $set: reqBody },
      { upsert: true },
    );
    return { status: "success", message: "Profile Save Success" };
  } catch (e) {
    return { status: "fail", message: "Profile save fail" };
  }
};

const ReadProfileService = async (req) => {
  try {
    let _id = req.headers._id;
    let result = await UserModel.find({ _id: _id });
    return { status: "success", data: result };
  } catch (e) {
    return { status: "fail", data: e };
  }
};

module.exports = {
  UserOTPServices,
  VerifyOTPService,
  SaveProfileService,
  ReadProfileService,
};
