// backend/models/Destination.js
import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: String,
  description: String,
  category: String,
  image: String,
  bestTime: String,
  attractions: [String],
}, { timestamps: true });

const Destination = mongoose.model("Destination", destinationSchema);
export default Destination;
