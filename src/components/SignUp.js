import React from "react";
import "./signup.css";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

function SignUp(props) {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/levels");
  };
  return (
    <>
      <h1 className="title">Connexion</h1>
      <div className="content-sign-up">
        <form onSubmit={submitHandler} className="form-sign-up">
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
          <a href="#">Mot de passe oublié ?</a>
          <button
            style={{ cursor: "pointer" }}
            className="sign-up-btn"
            type="submit"
          >
            Se connecter
          </button>
          <Link to="/signup">Je crée mon compte</Link>
        </form>
        <div className="divider"></div>
        <div className="right-col">
          <div className="logo-container">
            <img src={Logo} alt="logo image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
