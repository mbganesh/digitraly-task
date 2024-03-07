const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProfileSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profiles", ProfileSchema, "Profiles");

module.exports = Profile;
