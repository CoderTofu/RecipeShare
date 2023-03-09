import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

// import pages
import Create from "./pages/create";
import Home from "./pages/home";
import Product from "./pages/product";
import Recipe from "./pages/recipe";

export default function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand navbar-brand-lg">RecipeShare</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Recipes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Create</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* <header className="navbar">

        <h1 className="">
          <Link className="navbar-brand site-name" to="/">RecipeShare</Link>
        </h1>

        <nav className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/recipes'>Recipes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/create'>Create</Link>
            </li>
          </ul>
        </nav>

      </header> */}

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/recipes' element={<Recipe />} />
        <Route exact path='/create' element={<Create />} />
        <Route exact path='/product/:id' element={<Product />} />
      </Routes>

    </Router>
  );
}

