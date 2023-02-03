import React from "react";
import "./Quiz1.scss";
import { Link } from "react-router-dom";
import Asos from "../assets/images/asos-button.png";
import Ssense from "../assets/images/ssense-button.png";
import Arrow from "../assets/images/arrow.png";
import Dots from "../assets/images/dots2.png";

export default function Quiz2() {
  return (
    <div className="main__container">
      <div className="main__back">
      <Link to="/">
        <img className="back" alt="back" src={Arrow}></img>
        </Link>
      </div>

      <div className="quiz__info">
        <div className="quiz__text">
          <p className="quiz__words">Tap to select...</p>

          <div className="quiz__choices">
            <Link to ='/quiz3'>
            <img className="quiz__choice1" alt="Choice1" src={Asos}></img>
            </Link>
            <Link to ='/quiz3'>
            <img className="quiz__choice2" alt="Choice2" src={Ssense}></img>
            </Link>
          </div>
        </div>

        <div className="quiz__question">
          <h2 className="question">Where do you prefer to shop for fashion?</h2>

          <div className="quiz__nav">
            <Link className="quiz__nav-back" to="/quiz">
              Go back
            </Link>
            <Link className="quiz__nav-forward" to="/quiz3">
              Skip question
            </Link>
          </div>
        </div>
      </div>

      <img className="dots" alt="Dots" src={Dots}></img>
    </div>
  );
}
