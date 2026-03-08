const {
  BlogListServices,
  BlogDetailsServices,
} = require("../services/BlogServices.js");

exports.BlogList = async (req, res) => {
  let result = await BlogListServices();
  return res.status(200).json(result);
};

exports.BlogDetails = async (req, res) => {
  let result = await BlogDetailsServices(req);
  return res.status(200).json(result);
};

exports.CreateBlog = async (req, res) => {};

exports.UpdateBlog = async (req, res) => {};

exports.DeleteBlog = async (req, res) => {};
