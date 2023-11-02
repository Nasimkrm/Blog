import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const [recipes, setRecipes] = useState(null);
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch("http://localhost:4000/blog");
      const json = await response.json();

      if (response.ok) {
        console.log(json);
        setRecipes(json);
      }
    };

    fetchRecipes();
  }, []);
  return (
    <div className="flex flex-wrap flex-col">
      <div>
        <p>
          Hi, welcome to Notes On Iran. Here is a space I'd like to share
          anything related to Iran, from photos I've taken to some Persian
          recipes I've tried.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-center">Photos</h2>
      </div>

      <div className="grid grid-cols-3 gap-15 object-cover bg-neutral-50 rounded-sm my-8  p-4 shadow-md">
        <img
          className="w-11/12 h-4/5 border-1 border-solid border-current object-cover"
          src="./images/yazd.jpg"
          alt="yazd"
        />
        <img
          className="w-11/12 h-4/5 border-1 border-solid border-current object-cover"
          src="./images/yazd1.jpg"
          alt="yazd"
        />
        <img
          className="w-11/12 h-4/5 border-1 border-solid border-current object-cover"
          src="./images/yazd2.jpg"
          alt="yazd"
        />
        <img
          className="w-11/12 h-4/5 border-1 border-solid border-current object-cover"
          src="./images/yazd3.jpg"
          alt="yazd"
        />
        <img
          className="w-11/12 h-4/5 border-1 border-solid border-current"
          src="./images/yazd4.jpg"
          alt="yazd"
        />
        <img
          className="w-11/12 h-4/5 border-1 border-solid border-current"
          src="./images/yazd5.jpg"
          alt="yazd"
        />
      </div>

      <h2 className="text-center">Recipes</h2>
      <div className="flex flex-wrap flex-col mt-8 gap-10">
        {recipes &&
          recipes.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe._id} />
          ))}
      </div>
    </div>
  );
};

export default Home;
