import express from "express";
import {
  createBlog,
  getBlogs,
  getBlog,
  deleteBlog,
} from "../controllers/blogController.js";

const router = express.Router();

//Get all blogs
router.get("/", getBlogs);

//Get a single blog
router.get("/:id", getBlog);

// POST one workout
router.post("/", createBlog);

// DELETE one workout
router.delete("/:id", deleteBlog);

//Update a workout
router.patch("/:id", (req, res) => {
  res.send("Hello World");
});

export default router;
