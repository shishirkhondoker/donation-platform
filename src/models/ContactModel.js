const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestaps: true,
    versionKey: false,
  },
);

const ContactModel = mongoose.model("contacts", DataSchema);
