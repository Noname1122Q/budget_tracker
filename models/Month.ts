import mongoose, { Schema, models, model } from "mongoose";

const MonthSchema = new Schema(
  {
    month: {
      type: Number,
      required: true,
      min: 1,
      max: 12,
    },
    year: {
      type: Number,
      required: true,
    },
    allowance: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  { timestamps: true },
);

// Prevent duplicate months
MonthSchema.index({ month: 1, year: 1 }, { unique: true });

const Month = models.Month || model("Month", MonthSchema);

export default Month;
