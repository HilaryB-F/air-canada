import "./Quiz1.scss";
import { Link } from "react-router-dom";
import BestBuy from "../assets/images/best-buy-button.png"
import Amazon from "../assets/images/amazon-button.png"
import Arrow from "../assets/images/arrow.png"
import Dots from "../assets/images/dots1.png"

export default function Quiz1() {
  return (
    <div className="main__container">

      <div className ="main__back">
        <Link to="/">
        <img className="back" alt="back" src={Arrow}></img>
        </Link>
      </div>

      <div className="quiz__info">

        <div className="quiz__text">
          <p className="quiz__words">Tap to select...</p>

          <div className="quiz__choices">
          <Link to='/quiz2'>
            <img className="quiz__choice1" alt="Choice1" src={BestBuy}></img>
            </Link>
            <Link to='/quiz2'>
            <img className="quiz__choice2" alt="Choice2" src={Amazon}></img>
            </Link>
          </div>
        </div>

        <div className="quiz__question">
          <h2 className="question">Where do you prefer to shop for technology?</h2>
     
          <div className="quiz__nav">
            <Link className="quiz__nav-back" to='/'>Go back</Link>
            <Link className="quiz__nav-forward" to='/quiz2'>Skip question</Link>
          </div>
        </div>
      </div>

      <img className="dots" alt="Dots" src={Dots}></img>
    </div>
  );
}
