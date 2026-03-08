const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const GalleryModel = mongoose.model("gallery", DataSchema);

module.exports = GalleryModel;
