import React from 'react';
import './App.scss';
import {Route, NavLink, Routes} from "react-router-dom";
import PokemonList from "./components/PokemonList";
import Pokemon from "./components/Pokemon";
import RegistrationPage from "./pages/auth/registrationPage";
import LoginPage from "./pages/auth/loginPage";
import HomePage from "./pages/main/home";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Search</NavLink>
      </nav>
      <Routes>
          <Route path={"/auth/register"} element={<RegistrationPage />} />
          <Route path={"/auth/login"} element={<LoginPage />} />
          <Route path={"/"} element={<HomePage />} />
        <Route path={"/pokemon/:pokemon"} element={Pokemon} />
      </Routes>
    </div>
  );
}

export default App;
