const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const EventModel = mongoose.model("events", DataSchema);

module.exports = EventModel;
