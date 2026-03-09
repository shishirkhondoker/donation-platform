const express = require("express");

const BlogController = require("../controllers/BlogController.js");
const UserController = require("../controllers/UserController.js");
const AuthVerification = require("../middlewares/AuthVerification.js");
const router = express.Router();

// Blog

router.get("/BlogList", BlogController.BlogList);
router.get("/BlogDetails/:BlogID", BlogController.BlogDetails);
router.post("/CreateBlog", AuthVerification, BlogController.CreateBlog);
router.post("/UpdateBlog", AuthVerification, BlogController.UpdateBlog);
router.get("/DeleteBlog/:BlogID", AuthVerification, BlogController.DeleteBlog);

// User

router.get("/UserOTP/:email", UserController.UserOTP);
router.get("/VerifyLogin/:email/:otp", UserController.VerifyLogin);
router.post("/CreateProfile", AuthVerification, UserController.CreateProfile);
router.post("/UpdateProfile", AuthVerification, UserController.UpdateProfile);
router.get("/ReadProfile", AuthVerification, UserController.ReadProfile);
router.get("/UserLogout", AuthVerification, UserController.UserLogout);

module.exports = router;
