import React, { useState } from "react";
import Berber from "../assets/berber.png";
import "./question.css";
import { useNavigate } from "react-router-dom";

function Question(props) {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const navigate = useNavigate();

  return (
    <div className="question">
      <div className="navbar">
        <svg
          onClick={() => {
            navigate("/levels");
          }}
          width="78"
          height="85"
          viewBox="0 0 78 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M72.5833 85H53.0833C50.0912 85 47.6667 82.5612 47.6667 79.5513V59.9359C47.6667 57.5276 45.7275 55.5769 43.3333 55.5769H34.6667C32.2725 55.5769 30.3333 57.5276 30.3333 59.9359V79.5513C30.3333 82.5612 27.9088 85 24.9167 85H5.41667C2.4245 85 0 82.5612 0 79.5513V37.9514C0 32.9408 2.28367 28.2069 6.1945 25.1077L36.9872 0.699615C38.168 -0.233205 39.832 -0.233205 41.0107 0.699615L71.8077 25.1077C75.7185 28.2069 78 32.9386 78 37.9471V79.5513C78 82.5612 75.5755 85 72.5833 85Z"
            fill="#DA1212"
          />
        </svg>
      </div>
      <div className="question__container">
        <div className="col">
          <img src={Berber} />
        </div>
        <div className="col">
          <h1>Situation</h1>
          <p>
            Vous êtes venu au salon de coiffure pour vous préparer pour votre
            fête d' anniversaire et avez remarqué que tous les invités ont droit
            aux mêmes outils.
          </p>
          <h1 onClick={openModal}>Question</h1>
        </div>
      </div>
      <div
        className="modal"
        style={{ visibility: open ? "visible" : "hidden" }}
      >
        <div className="content">
          <div className="avatar">
            <img src={Berber} width={120} height={120} />
          </div>
          <h2>Question 1/4</h2>
          <p>Comment trouvez-vous ce geste ?</p>
          <div className={"cta"}>
            <div
              className="cta-btn"
              onClick={() => navigate("/levels/answer/1")}
            >
              {" "}
              <span /> Acceptable
            </div>
            <div
              className="cta-btn"
              onClick={() => navigate("/levels/answer/2")}
            >
              {" "}
              <span /> Non Acceptable
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
