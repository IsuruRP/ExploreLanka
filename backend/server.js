// backend/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import destinationRoutes from "./routes/destinationRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// test route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend" });
});

// API routes
app.use("/api/destinations", destinationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
