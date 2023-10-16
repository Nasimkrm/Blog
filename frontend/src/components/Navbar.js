import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-neutral-50">
      <div className="max-w-8xl my-0 mx-auto py-10 px-20 flex items-center justify-between">
        <Link to="/">
          <h1>Notes On Iran</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
