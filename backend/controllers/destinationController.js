// backend/controllers/destinationController.js
import Destination from "../models/destination.js";

export const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find().sort({ createdAt: -1 });
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const createDestination = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "Name is required" });
    const dest = new Destination(req.body);
    await dest.save();
    res.status(201).json(dest);
  } catch (err) {
    res.status(400).json({ message: "Error creating destination", error: err.message });
  }
};
