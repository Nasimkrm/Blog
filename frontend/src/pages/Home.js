import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
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

      <div className="grid grid-cols-3 gap-15 object-cover bg-neutral-50 rounded-sm my-8  p-12 relative shadow-md">
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
      {blogs &&
        blogs.map((blog) => (
          <div className="flex flex-wrap flex-col mt-8" key={blog._id}>
            <div className="flex flex-col gap-10">
              <div className="w-auto flex items-center justify-center pr-16 bg-neutral-50 rounded-sm mr-auto shadow-md">
                <div className="float-left">
                  <img
                    src="./images/persianTea.jpg"
                    alt="yazd"
                    className="w-24 h-24 object-cover"
                  />
                </div>

                <Link
                  to={`/blog/${blog._id}`}
                  className="font-semibold text-primary-color ml-2"
                >
                  {blog.title}
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
