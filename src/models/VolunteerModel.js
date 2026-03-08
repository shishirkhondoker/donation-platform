const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    address: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const VolunteerModel = mongoose.model("volunteers", DataSchema);

module.exports = VolunteerModel;
