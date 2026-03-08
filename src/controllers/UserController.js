const {
  UserOTPServices,
  VerifyOTPService,
  SaveProfileService,
  ReadProfileService,
} = require("../services/UserServices.js");

exports.UserOTP = async (req, res) => {
  let result = await UserOTPServices(req);
  return res.status(200).json(result);
};

exports.VerifyLogin = async (req, res) => {
  let result = await VerifyOTPService(req);

  if (result.status === "success") {
    let cookieOption = {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      httpOnly: false,
      sameSite: "lax",
    };
    res.cookie("token", result.token, cookieOption);
    return res.status(200).json(result);
  }
  return res.status(401).json(result);
};

exports.CreateProfile = async (req, res) => {
  let result = await SaveProfileService(req);

  return res.status(200).json(result);
};

exports.UpdateProfile = async (req, res) => {
  let result = await SaveProfileService(req);

  return res.status(200).json(result);
};

exports.ReadProfile = async (req, res) => {
  let result = await ReadProfileService(req);
  return res.status(200).json(result);
};
exports.UserLogout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false, // production e true
      sameSite: "strict",
    });

    return res.status(200).json({
      status: "success",
      message: "Logout successful",
    });
  } catch (e) {
    return res.status(500).json({
      status: "fail",
      message: "Logout failed",
    });
  }
};
