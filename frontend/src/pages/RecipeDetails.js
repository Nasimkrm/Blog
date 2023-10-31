import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch(`http://localhost:4000/blog/${id}`);
      const json = await response.json();

      if (response.ok) {
        console.log(json);
        setRecipe(json);
      }
    };

    fetchBlogs();
  }, [id]);

  return (
    recipe && (
      <>
        <div className="grid grid-cols-2 bg-neutral-50 rounded-sm my-20 mx-auto p-20 relative shadow-md ">
          <div>
            <h4 className="text-primary-color">{recipe.title}</h4>
            <div className="flex items-center justify-around p-2 w-fit mt-4 ">
              {/* <img
                className="w-6 h-6 mr-2"
                src="./images/clock.png"
                alt="clock"
              /> */}
              <p>
                <strong>Prep:</strong> {recipe.body.prepTime}
              </p>
            </div>

            <div className="flex items-center justify-around p-2 w-fit">
              {/* <img
                className="w-6 h-6 mr-2"
                src="./images/fork.png"
                alt="fork"
              /> */}
              <p>
                <strong>Serves:</strong> {recipe.body.serves}
              </p>
            </div>

            <div className="mt-8 flex flex-col space-y-6">
              <h5>Ingredients</h5>
              <div className="">
                {recipe.body.ingredients.map((ingredient) => {
                  return (
                    <ul key={ingredient.id}>
                      <li className="leading-7">{ingredient}</li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col space-y-6">
            <h5>Method</h5>

            {recipe.body.steps.map((step) => {
              return (
                <p key={step.id} className="leading-7">
                  {step}
                </p>
              );
            })}
          </div>
        </div>
      </>
    )
  );
};

export default RecipeDetails;
