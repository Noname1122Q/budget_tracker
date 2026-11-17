import mongoose, { Schema, models, model } from "mongoose";

const TransactionSchema = new Schema(
  {
    monthId: {
      type: Schema.Types.ObjectId,
      ref: "Month",
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0.01,
    },
    date: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      default: "Other",
    },
    notes: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

const Transaction =
  models.Transaction || model("Transaction", TransactionSchema);

export default Transaction;
