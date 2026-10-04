require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");



const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.get("/api/v1/health", (req, res) => {
  res.json({
    success: true,
    message: "DevPulse API is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
