import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Notes On Iran</h1>
        </Link>
        <Link to="/">
          <h3> درباره ایران</h3>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
