import Blog from "../models/blogModel.js";
import mongoose from "mongoose";

//Get all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const insertPost = () => {
  Blog.insertMany([
    {
      title: "Kabab Tabe'ei",

      body: {
        prepTime: "30 minutes",
        serves: "4 people",
        ingredients: [
          "Minced beef or lamb: 1Kg",
          "Onion: 1 medium sized",
          "Garlic: 1 clove",
          "Carrots: 1 thinly sliced",
          "Potatoes: 1 thinly sliced",
          "Tomato puree: 2 tablespoons",
          "Lemon juice: 1 tablespoon",
          "Salt: 1 tablespoon",
          "Pepper: 1 tablespoon",
          "Turmeric: 1 tablespoon",
          "Cumin: 1 tablespoon",
          "Cinammon: 1 tablespoon",
          "Vegetable oil: 1 tablespoon",
        ],

        steps: [
          "1. In a large bowl, grate the onion and add the meat and spices. Mix well.",
          "2. Mould the meat in small disks and flatten them on the palm of your hand.",
          "3. Heat the oil in a pan and fry the meat disks on both sides until brown.",
          "4. Add the tomato puree and fry for a minute",
          "5. Add about 100ml of water and the carrots and/or potatoes. Bring to boil and simmer for 30 minutes until the sauce has thickened.",
          "6. Through the end add the lemon juice and serve with rice.",
        ],
      },
    },
  ]);
};

// insertPost();

//Get a single blog
const getBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send({ error: "No blog with that id" });

  const blog = await Blog.findById(req.params.id);

  if (!blog) return res.status(404).send({ error: "No blog with that id" });

  res.status(200).json(blog);
};

//Create a blog
const createBlog = async (req, res) => {
  const { title, body } = req.body;

  //Add doc to db
  try {
    const blog = await Blog.create({ title, body });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete a blog
const deleteBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send({ error: "No such blog" });

  const blog = Blog.findOneAndDelete({ _id: id });

  if (!blog) {
    return res.status(404).send({ error: "No blog with that id" });
  }

  res.status(200).json(blog);
};

export { createBlog, getBlogs, getBlog, deleteBlog };
