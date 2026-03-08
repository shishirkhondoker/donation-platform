const express = require("express");

const BlogController = require("../controllers/BlogController.js");

const router = express.Router();

// Blog

router.get("/BlogList", BlogController.BlogList);
router.get("/BlogDetails/:BlogID", BlogController.BlogDetails);

module.exports = router;
