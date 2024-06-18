import React from 'react';
import './App.scss';
import {Route, NavLink, Routes} from "react-router-dom";
import PokemonList from "./components/PokemonList";
import Pokemon from "./components/Pokemon";
import RegistrationPage from "./pages/auth/registrationPage";
import LoginPage from "./pages/auth/loginPage";
import HomePage from "./pages/main/products";
import NavBar from "./components/navbar/Navbar";
import ProductPage from "./pages/product/productPage";

function App() {
  return (
    <div className="App">
        <NavBar />
      <Routes>
          <Route path={"/auth/register"} element={<RegistrationPage />} />
          <Route path={"/auth/login"} element={<LoginPage />} />
          <Route exact path={"/"} element={<HomePage />} />
        <Route path={"/pokemon/:pokemon"} element={Pokemon} />
          <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
