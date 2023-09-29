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

// "Minced beef or lamb: 1Kg, onion: 1 medium sized, garlic: 1 clove, Carrots: 1, Potatoes: 1, Tomato puree: 2 tablespoons, Lemon juice: 1 tablespoon":
("");

// const insertPost = () => {
//   Blog.insertMany([
//     {
//       title: "Kabab Tabe'ei",
//       body: {
//         ingredients: [
//           "Minced beef or lamb: 1Kg",
//           "Onion: 1 medium sized",
//           "Garlic: 1 clove",
//           "Carrots: 1",
//           "Potatoes: 1",
//           "Tomato puree: 2 tablespoons",
//           "Lemon juice: 1 tablespoon",
//           "Salt: 1 tablespoon",
//           "Pepper: 1 tablespoon",
//           "Turmeric: 1 tablespoon",
//           "Cumin: 1 tablespoon",
//           "Cinammon: 1 tablespoon",
//           "Vegetable oil: 1 tablespoon",
//         ],

//         steps:
//           "Grate the onion and garlic then mix in with the meat. Add salt, pepper, turmeric, cumin and a pinch of cinammon alongside any desired amount of vegetable oil. After mixing the ingredients, mould them in disks and flatten them on the palm of your hands. Then place them in a large enough frying pan. Fry both sides of each disk until a caramel colour. Add the tomato puree and fry a little until the colour the changes a bit. Then add about 100ml of water, you can add the carrots and potatoes here. If you add potatoes then you will probably need a little bit more water. Bring the mixture to a boil and then simmer until sauce is thickened. Through the end, add the lemon juice and serve with rice. ",
//       },
//     },
//   ]);
// };

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
