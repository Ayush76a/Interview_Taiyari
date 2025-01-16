const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  name: String,
  country: String,
  company: String,
  questions: [String],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Submission", submissionSchema);
