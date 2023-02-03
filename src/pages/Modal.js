import "./Modal.scss";
import { Link } from "react-router-dom";



export default function Modal({closeModal}) {
  return (
    <div className="modal__background">
      <div className="modal__container">
        <h3 className="modal__title">Every Day Earning, Everywhere</h3>
        <p className="modal__text">Help us find the rewards you're missing by taking a quick quiz</p>
        <div className="modal__links">
          <Link className="modal__link-yes" to="/quiz">
            Yes, please!
          </Link>
          <Link className="modal__link-no" to="/" onClick ={()=>{closeModal(false)}}>
           Not right now...
          </Link>
        </div>
      </div>
    </div>
  );
}
