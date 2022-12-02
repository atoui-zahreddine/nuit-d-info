import React from "react";
import Step1 from "../assets/step-1.png";
import "./levels.css";
import { useNavigate } from "react-router-dom";

const SvgComponent = (props) => (
  <svg
    width={57}
    height={79}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m42.948 14-28.92 25.657M43.16 65.282 14.238 39.687"
      stroke="#DA1212"
      strokeWidth={26.15}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Levels(props) {
  const navigate = useNavigate();
  return (
    <div className="levels">
      <div>
        <div className="progress-bar">
          <SvgComponent />
          <h1 className="progress-bar__title">Niveau 1</h1>
          <div className="progress-bar__container">
            <div className="progress-bar__progress"></div>
          </div>
        </div>
        <img
          style={{ cursor: "pointer" }}
          src={Step1}
          width="100%"
          onClick={() => navigate("/levels/question/1")}
        />
      </div>
    </div>
  );
}

export default Levels;
