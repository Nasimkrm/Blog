import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="max-w-8xl p-20 my-0 mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<RecipeDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
