const express = require("express");

const BlogController = require("../controllers/BlogController.js");
const UserController = require("../controllers/UserController.js");
const router = express.Router();

// Blog

router.get("/BlogList", BlogController.BlogList);
router.get("/BlogDetails/:BlogID", BlogController.BlogDetails);

// User

router.get("/UserOTP/:email", UserController.UserOTP);
router.get("/VerifyLogin/:email/:otp", UserController.VerifyLogin);

module.exports = router;
