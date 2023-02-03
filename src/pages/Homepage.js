import React from "react";
import "./Homepage.scss";
import Modal from "./Modal";
import { useState } from "react";
import Home from "../assets/images/homepage.png"

function Homepage() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <img
        className="modal"
        src={Home}
        alt="homepage"
        onClick={() => {
          setOpenModal(true);
        }}
      >

      </img>
      <div className={`modal__dropdown ${openModal ? "active" : "inactive"}`}>
      {openModal && <Modal closeModal={setOpenModal} openModal={openModal}/>}
     </div>
    </div>
  );
}

export default Homepage;
