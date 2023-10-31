import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="w-auto flex items-center justify-center pr-16 bg-neutral-50 rounded-sm mr-auto shadow-md">
      <div className="float-left">
        <img
          src="./images/persianTea.jpg"
          alt="yazd"
          className="w-24 h-24 object-cover"
        />
      </div>

      <Link
        to={`/blog/${recipe._id}`}
        className="font-semibold text-primary-color ml-2"
      >
        {recipe.title}
      </Link>
    </div>
  );
};

export default RecipeCard;
