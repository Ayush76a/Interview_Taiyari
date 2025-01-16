const express = require("express");
const jwt = require("jsonwebtoken");
const Submission = require("../models/Submission");

const router = express.Router();

// Middleware for Authentication
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(403).json({ error: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Token invalid" });
    req.userId = decoded.id;
    next();
  });
};

// Create a Submission
router.post("/", authenticate, async (req, res) => {
  const { name, country, company, questions } = req.body;

  try {
    const submission = await Submission.create({
      name,
      country,
      company,
      questions,
      userId: req.userId,
    });
    res.status(201).json(submission);
  } catch (error) {
    res.status(400).json({ error: "Failed to create submission" });
  }
});

// Get All Submissions (for Dashboard)
router.get("/", authenticate, async (req, res) => {
  try {
    const submissions = await Submission.find().populate("userId", "email");
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch all submissions" });
  }
});

// Get User Submissions
router.get("/user", authenticate, async (req, res) => {
  try {
    const submissions = await Submission.find({ userId: req.userId });
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch submissions" });
  }
});

// Update a Submission
router.put("/:id", authenticate, async (req, res) => {
  const { id } = req.params;
  const { name, country, company, questions } = req.body;

  try {
    const submission = await Submission.findOne({ _id: id, userId: req.userId });
    if (!submission) {
      return res.status(404).json({ error: "Submission not found or not authorized" });
    }

    submission.name = name || submission.name;
    submission.country = country || submission.country;
    submission.company = company || submission.company;
    submission.questions = questions || submission.questions;

    await submission.save();
    res.json(submission);
  } catch (error) {
    res.status(400).json({ error: "Failed to update submission" });
  }
});

// Delete a Submission
router.delete("/:id", authenticate, async (req, res) => {
  const { id } = req.params;

  try {
    const submission = await Submission.findOneAndDelete({
      _id: id,
      userId: req.userId,
    });
    if (!submission) {
      return res.status(404).json({ error: "Submission not found or not authorized" });
    }

    res.json({ message: "Submission deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete submission" });
  }
});

module.exports = router;
