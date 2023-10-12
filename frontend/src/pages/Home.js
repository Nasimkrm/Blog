import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
          Hi, welcome to Notes On Iran! Here is a space I'd like to share
          anything related to Iran, from photos I've taken to some Persian
          recipes I've tried over the years.
        </p>
      </div>
      <h2>Some Photos of Iran</h2>
      <h3>Yazd</h3>
      <div className="iran-photos">
        <img className="image" src="./images/yazd.jpg" alt="yazd" />
        <img className="image" src="./images/yazd1.jpg" alt="yazd" />
        <img className="image" src="./images/yazd2.jpg" alt="yazd" />
        <img className="image" src="./images/yazd3.jpg" alt="yazd" />
        <img className="image" src="./images/yazd4.jpg" alt="yazd" />
        <img className="image" src="./images/yazd5.jpg" alt="yazd" />

        {/* <Link to="/">See More</Link> */}
      </div>

      <h2>Some Persian Recipes</h2>
      <div className="blogs">
        {blogs &&
          blogs.map((blog) => <BlogDetails key={blog._id} blog={blog} />)}
      </div>
    </div>
  );
};

export default Home;
