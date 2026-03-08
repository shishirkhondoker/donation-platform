const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
  title: { type: String, required: true },
  desciption: { type: String, required: true },
  target_amount: { type: String, required: true },
  collected_amount: { type: String, required: true },
  status: { type: String, required: true },
});

const ProjectModel = mongoose.model("projects", DataSchema);

module.exports = ProjectModel;
