const BlogDetails = ({ blog }) => {
  return (
    <div className="blog-details">
      <h4>{blog.title}</h4>

      {blog.body.ingredients.map((ingredient) => {
        return (
          <ul>
            <li>{ingredient}</li>
          </ul>
        );
      })}
      <p>{blog.body.steps}</p>
    </div>
  );
};

export default BlogDetails;
