import "dotenv/config";
import express from "express";
import blogRoutes from "./routes/blog.js";
import mongoose from "mongoose";

// Create Express app
const app = express();

// Middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json());

// Routes
app.use("/blog", blogRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to db and server is running on port " + process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
