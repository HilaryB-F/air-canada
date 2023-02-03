import React from "react";
import Clinique from "../assets/images/clinique-button";
import Kiels from "../assets/images/kiels-button";
export default function Quiz3() {
  return (
    <div className="main__container">
      <div className="main__back">
        <img className="back" alt="back" src={Arrow}></img>
      </div>

      <div className="quiz__info">
        <div className="quiz__text">
          <p className="quiz__words">Tap to select...</p>

          <div className="quiz__choices">
            <img className="quiz__choice1" alt="Choice1" src={Clinique}></img>
            <img className="quiz__choice2" alt="Choice2" src={Kiels}></img>
          </div>
        </div>

        <div className="quiz__question">
          <h2 className="question">
            Where do you prefer to shop for technology?
          </h2>

          <div className="quiz__nav">
            <Link className="quiz__nav-back" to="/">
              Go back
            </Link>
            <Link className="quiz__nav-forward" to="/quiz2">
              Skip question
            </Link>
          </div>
        </div>
      </div>

      <img className="dots" alt="Dots" src={Dots}></img>
    </div>
  );
}
