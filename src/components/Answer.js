import React from "react";
import Berber from "../assets/berber.png";
import { useLocation, useParams } from "react-router";
import { useNavigate } from "react-router-dom";

function Answer(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="answer-container">
      <div className="modal">
        <div className="content">
          <div className="avatar">
            <img src={Berber} width={120} height={120} />
          </div>
          <p>
            {id === "1"
              ? "Bravo ,De multiples instruments traduisibles (tels que lames,\n" +
                "            aiguilles, ciseaux, et tondeuses) sont utilisés comme outils de\n" +
                "            travail dans les salons de coiffure . Ces outils de travail, s'ils\n" +
                "            sont mal entretenus , peuvent servir de source de contamination à\n" +
                "            plusieurs virus, dont le VIH."
              : "Pas du tout puisque, par exemple, l' infection par le VIH , qui ciblespécifiquement le système immunitaire de système immunitaire de l'organisme , en particulier leglobules blancs appelés globules , peut être causée par cette action.globules blancs appelés globules , peuvent être causés par cette action.\n"}
          </p>
          <button
            type="button "
            onClick={() => {
              navigate(id === "1" ? "/levels/answer/2" : "/levels/links");
            }}
          >
            {" "}
            Cliquer ici{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Answer;
