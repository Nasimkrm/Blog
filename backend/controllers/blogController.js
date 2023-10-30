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

    {
      title: "Persian Saffron Chicken",

      body: {
        prepTime: "30 minutes",
        serves: "4-6 people",
        ingredients: [
          "olive oil: 4 tbsp",
          "onion: 2 large or 3 small sized, roughly diced",
          "chicken thighs: 8",
          "saffron: 1 generous pinch",
          "cumin: 2 heaped tsp",
          "cinnamon: 1/2 tsp ground",
          "orange juice: juice of 2 oranges",
          "sea salt flakes and freshly ground black pepper",
          "fennel bulbs: 2 large fennel bulbs, topped and tailed and cut into quarters",
          "honey: 3 tbsp clear honey",
          "barberries: 2 large handul of dried barberries",
        ],

        steps: [
          "1. Set a large saucepan over a medium heat if using gas, or a medium-high heat if cooking on electric, and the olive oil to the pan. Fry the onions until they are soft and translucent and just begin to take on a golden-brow colour around the edges.",
          "2. Add the chicken thighs and coat them in the onion mixture to seal the flavour into the meat. Cook until you get just a little colour onto the thighs. ",
          "3. Grind the saffron and add it to the chicken, stirring well to ensure the chicken thighs are evenly coated in onion and saffron.",
          "4. Add the cumin, cinnamon, orange juice and a generous amount of sea salt flakes and black pepper and give everything a final stir.",
          "5. Pour over just enough boiling water to cover the chicken, then add the fennel quarters and honey. Cover the pan with a lid, reduce the temperature to low and simmer for 1 hour, stirring after 30 minutes to prevent sticking.",
          "6. After the hour has passed, add the barberries and stir gently, then cover and cook for another hour. The slower and longer you cook this dish, the richer and better it will taste.",
          "7. After the full 2 hours of cooking, check the chickenand fennel to ensure they are still intact and give it a final stir. Re-cover and cook for a further 20 minutes, serve with basmati rice.",
        ],
      },
    },
  ]);
};

//insertPost();

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
