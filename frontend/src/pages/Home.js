import { useEffect, useState } from "react";
import BlogDetails from "../components/BlogDetails";

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
    <div className="home">
      <div className="intro">
        <p>
          Hi and welcome to my blog! Here is a space I'd like to share anything
          related to Iran, from photos I've taken to some Persian recipes I've
          tried over the years.
        </p>
      </div>
      <h2>Yazd</h2>
      <div className="iran-photos">
        <img className="image" src="./images/yazd.jpg" alt="yazd" />
        <img className="image" src="./images/yazd1.jpg" alt="yazd" />
        <img className="image" src="./images/yazd2.jpg" alt="yazd" />
      </div>

      <h1>Some Persian Recipes</h1>
      <div className="blogs">
        {blogs &&
          blogs.map((blog) => <BlogDetails key={blog._id} blog={blog} />)}
      </div>
    </div>
  );
};

export default Home;
