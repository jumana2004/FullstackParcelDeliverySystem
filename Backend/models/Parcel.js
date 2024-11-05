const mongoose = require("mongoose");

const ParcelSchema = mongoose.Schema(
  {
    from: { type: string, required: true },
    to: { type: string, required: true },
    sendername: { type: string, required: true },
    recipientname: { type: string, required: true },
    senderemail: { type: string, required: true },
    recipientemail: { type: string, required: true },
    weight: { type: Number, required: true },
    cost: { type: Number, required: true },
    date: { type: String, required: true },
    note: { type: String },
    feedback: { type: String },
    status: { type: Number, default: 0 },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Parcel", ParcelSchema);
