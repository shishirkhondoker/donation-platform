const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    userID: { type: mongoose.Types.ObjectId },
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const BlogModel = mongoose.model("blogs", DataSchema);

module.exports = BlogModel;
