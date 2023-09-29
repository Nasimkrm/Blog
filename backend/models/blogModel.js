import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  title: { type: String, required: true },
  body: {
    ingredients: [
      {
        type: String,
        required: true,
      },
    ],
    steps: { type: String, required: true },
  },
  createdAt: { type: Date, default: Date.now },
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
