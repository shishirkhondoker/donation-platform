const {
  UserOTPServices,
  VerifyOTPService,
} = require("../services/UserServices.js");

exports.UserOTP = async (req, res) => {
  let result = await UserOTPServices(req);
  return res.status(200).json(result);
};

exports.VerifyLogin = async (req, res) => {
  let result = await VerifyOTPService(req);
  return res.status(200).json(result);
};
