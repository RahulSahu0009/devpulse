const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    githubId: {
      type: String,
      required: true, 
    },
    username: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    avatarUrl: {
      type: String,
    },
    profileUrl: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;