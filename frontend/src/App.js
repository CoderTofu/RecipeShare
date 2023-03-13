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
        <nav className="navbar navbar-light p-4 mx-5 navbar-expand-lg">
          <Link className="navbar-brand navbar-brand-lg">RecipeShare</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to='/' className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/recipes' className="nav-link">Recipes</Link>
              </li>
              <li className="nav-item">
                <Link to='/create' className="nav-link">Create</Link>
              </li>
            </ul>
          </div>
        </nav>
    
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/recipes' element={<Recipe />} />
        <Route exact path='/create' element={<Create />} />
        <Route exact path='/product/:id' element={<Product />} />
      </Routes>

    </Router>
  );
}

