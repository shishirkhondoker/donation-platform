const {
  BlogListServices,
  BlogDetailsServices,
  SaveBlogService,
  DeleteBlogService,
} = require("../services/BlogServices.js");

exports.BlogList = async (req, res) => {
  let result = await BlogListServices();
  return res.status(200).json(result);
};

exports.BlogDetails = async (req, res) => {
  let result = await BlogDetailsServices(req);
  return res.status(200).json(result);
};

exports.CreateBlog = async (req, res) => {
  let result = await SaveBlogService(req);
  return res.status(200).json(result);
};

exports.UpdateBlog = async (req, res) => {
  let result = await SaveBlogService(req);
  return res.status(200).json(result);
};

exports.DeleteBlog = async (req, res) => {
  let result = await DeleteBlogService(req);
  return res.status(200).json(result);
};
