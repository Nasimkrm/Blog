import { Link } from "react-router-dom";

const Home = () => {
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
      <div className="flex flex-wrap flex-col mt-8">
        <div className="w-auto  flex bg-neutral-50 rounded-sm mr-auto shadow-md mb-20">
          <div className="float-left">
            <img src="./images/yazd1.jpg" alt="yazd" className="w-24 h-24" />
          </div>

          <div className="flex flex-col items-center justify-center px-16 ">
            <Link
              to="/kabab-tabei"
              className="font-semibold text-primary-color"
            >
              Kabab Tabei
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
