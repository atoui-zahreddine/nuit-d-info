import "./App.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Levels from "./components/Levels";
import Question from "./components/Question";
import Answer from "./components/Answer";

import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import React from "react";

function Links() {
  const navigate = useNavigate();
  return (
    <div className="links">
      <div className="navbar">
        <svg
          onClick={() => navigate("/levels")}
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
      <h2>Documentation</h2>
      <div className="content">
        <a href="https://www.sida-info-service.org/categorie/vihsida/prevention/">
          https://www.sida-info-service.org/categorie/vihsida/prevention/
        </a>
        <a href="https://www.sida-info-service.org/categorie/vihsida/prevention/">
          https://www.sida-info-service.org/categorie/vihsida/prevention/
        </a>
        <a href="https://www.sida-info-service.org/categorie/vihsida/prevention/">
          https://www.sida-info-service.org/categorie/vihsida/prevention/
        </a>
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Login />,
  },
  {
    path: "/login",
    element: <SignUp />,
  },
  {
    path: "/levels/question/1",
    element: <Question />,
  },
  {
    path: "/levels",
    element: <Levels />,
  },
  {
    path: "/levels/answer/:id",
    element: <Answer />,
  },
  {
    path: "/levels/links",
    element: <Links />,
  },
]);

function App() {
  return (
    <div className="container">
      {/*<Home />*/}
      {/*<SignUp />*/}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
