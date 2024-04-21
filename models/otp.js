const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      // required: true,
    },
    
    otp: {
      type: String,
      required: true,
    },
    expiredAt: {
      type: Date,
      default: new Date(),
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 600, // OTP expires after 10 minutes (600 seconds)
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

const OTP = mongoose.model("otp", otpSchema);

module.exports = OTP;
