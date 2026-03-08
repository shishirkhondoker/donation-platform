const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    project_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    amount: { type: String, required: true },
    method: { type: String, required: true },
    transaction_id: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const DonationModel = mongoose.model("donations", DataSchema);

module.exports = DonationModel;
