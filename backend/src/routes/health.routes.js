const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "DevPulse API is running",
  });
});

module.exports = router;