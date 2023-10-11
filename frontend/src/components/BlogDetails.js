const BlogDetails = ({ blog }) => {
  return (
    <div className="blog-details">
      <div className="ingredients">
        <h4>{blog.title}</h4>
        <div className="prep">
          <img className="clock" src="./images/clock.png" alt="clock" />
          <p>
            <strong>Prep:</strong> {blog.body.prepTime}
          </p>
        </div>

        <div className="serves">
          <img className="fork" src="./images/fork.png" alt="fork" />
          <p>
            <strong>Serves:</strong> {blog.body.serves}
          </p>
        </div>

        <h5>Ingredients</h5>
        {blog.body.ingredients.map((ingredient) => {
          return (
            <ul>
              <li className="ingredient">{ingredient}</li>
            </ul>
          );
        })}
      </div>

      <div className="method">
        <h5>Method</h5>
        <p>
          {blog.body.steps.map((step) => {
            return <p className="step">{step}</p>;
          })}
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
