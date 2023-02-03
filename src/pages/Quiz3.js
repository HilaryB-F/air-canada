import React from "react";
import "./Quiz3.scss";
import { Link } from "react-router-dom";
import Arrow from "../assets/images/arrow.png";
import Clinique from "../assets/images/clinique-button.png";
import Kiels from "../assets/images/kiehls-button.png";
import Dots from "../assets/images/dots3.png";
export default function Quiz3() {
  return (
    <div className="main__container">
      <div className="main__back">
        <Link to="/quiz2">
          <img className="back" alt="back" src={Arrow}></img>
        </Link>
      </div>

      <div className="quiz__info">
        <div className="quiz__text">
          <p className="quiz__words">Tap to select...</p>

          <div className="quiz__choices">
            <Link to="/foryou">
              <img className="quiz__choice1" alt="Choice1" src={Clinique}></img>
            </Link>
            <Link to="/foryou">
              <img className="quiz__choice2" alt="Choice2" src={Kiels}></img>
            </Link>
          </div>
        </div>

        <div className="quiz__question">
          <h2 className="questions">
            Where do you prefer to shop for beauty, health, and wellness?
          </h2>

          <div className="quiz__nav">
            <Link className="quiz__nav-back" to="/quiz2">
              Go back
            </Link>
            <Link className="quiz__nav-forward" to="/foryou">
              Skip question
            </Link>
          </div>
        </div>
      </div>

      <img className="dots" alt="Dots" src={Dots}></img>
    </div>
  );
}
