import { useState, useEffect } from "react";

const KababTabei = () => {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("http://localhost:4000/blog");
      const json = await response.json();

      if (response.ok) {
        console.log(json);
        setBlogs(json);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <>
      {blogs &&
        blogs.map((blog) => (
          <div className="grid grid-cols-2 bg-neutral-50 rounded-sm my-20 mx-auto p-20 relative shadow-md ">
            <div>
              <h4 className="text-primary-color">{blog.title}</h4>
              <div className="flex items-center justify-around p-2 w-fit mt-4 ">
                <img
                  className="w-6 h-6 mr-2"
                  src="./images/clock.png"
                  alt="clock"
                />
                <p>
                  <strong>Prep:</strong> {blog.body.prepTime}
                </p>
              </div>

              <div className="flex items-center justify-around p-2 w-fit">
                <img
                  className="w-6 h-6 mr-2"
                  src="./images/fork.png"
                  alt="fork"
                />
                <p>
                  <strong>Serves:</strong> {blog.body.serves}
                </p>
              </div>

              <div className="mt-8 flex flex-col space-y-6">
                <h5>Ingredients</h5>
                <div className="">
                  {blog.body.ingredients.map((ingredient) => {
                    return (
                      <ul>
                        <li className="leading-7">{ingredient}</li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col space-y-6">
              <h5>Method</h5>
              <p>
                {blog.body.steps.map((step) => {
                  return <p className="leading-7">{step}</p>;
                })}
              </p>
            </div>
          </div>
        ))}
    </>
  );
};

export default KababTabei;
