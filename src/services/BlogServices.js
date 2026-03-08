const { mongoose } = require("mongoose");
const BlogModel = require("../models/BlogModel.js");

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

module.exports = {
  BlogListServices,
  BlogDetailsServices,
};
