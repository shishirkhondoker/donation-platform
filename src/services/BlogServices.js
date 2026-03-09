const { mongoose } = require("mongoose");
const BlogModel = require("../models/BlogModel.js");
const UserModel = require("../models/UserModel.js");

let ObjectID = mongoose.Types.ObjectId;

const BlogListServices = async () => {
  try {
    let data = await BlogModel.find();
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

const BlogDetailsServices = async (req) => {
  try {
    // let BlogID = new ObjectID(req.params.BlogID);
    let BlogID = req.params.BlogID;

    let MatchStage = { $match: { _id: BlogID } };

    let data = await BlogModel.aggregate([MatchStage]);

    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e.message };
  }
};

const SaveBlogService = async (req) => {
  try {
    let userID = req.headers._id; // from JWT middleware
    let reqBody = req.body;

    // Check if user exists
    let userExist = await UserModel.findById(userID);
    if (!userExist) return { status: "fail", message: "User not found" };

    reqBody.userID = userID;
    reqBody.author = userExist.name;

    // Update if _id provided
    if (reqBody._id) {
      await BlogModel.updateOne(
        { _id: reqBody._id, userID: userID },
        { $set: reqBody },
      );
      return { status: "success", message: "Blog updated successfully" };
    } else {
      // Create new blog (use create(), not updateOne)
      let newBlog = await BlogModel.create(reqBody);
      return {
        status: "success",
        message: "Blog created successfully",
        data: newBlog,
      };
    }
  } catch (e) {
    return { status: "fail", message: e.message };
  }
};

const DeleteBlogService = async (req) => {
  try {
    let userID = req.headers._id; // from JWT middleware
    let BlogID = req.params.BlogID;

    // Check if user exists
    let userExist = await UserModel.findById(userID);
    if (!userExist) {
      return { status: "fail", message: "User not found" };
    } else {
      await BlogModel.deleteOne({ _id: BlogID });
      return { status: "success", message: "delete" };
    }
  } catch (e) {
    return { status: "fail", message: e };
  }
};

module.exports = {
  BlogListServices,
  BlogDetailsServices,
  SaveBlogService,
  DeleteBlogService,
};
