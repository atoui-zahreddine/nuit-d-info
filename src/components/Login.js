import React from "react";
import "./login.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <div className="signup-container">
      <h1 className="title">Inscription</h1>
      <div className="content-sign-up">
        <form className="form-sign-up">
          <label htmlFor="username">Nom de l'utilisateur</label>
          <input
            type="email"
            id="username"
            name="username"
            placeholder="Utilisateur"
          />
          <label htmlFor="password">Mot de passe </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Mot de passe"
          />
        </form>
        <form className="form-sign-up">
          <label htmlFor="username">Nom de l'utilisateur</label>
          <input
            required
            type="email"
            id="username"
            name="username"
            placeholder="Utilisateur"
          />
          <label htmlFor="password">Mot de passe </label>
          <input
            required
            type="password"
            id="password"
            name="password"
            placeholder="Mot de passe"
          />
        </form>
      </div>
      <div className="cta-container">
        <Link to="/login">Je crée mon compte</Link>
        <button className="sign-up-btn" type="submit">
          Se connecter
        </button>
      </div>
    </div>
  );
}

export default Login;
