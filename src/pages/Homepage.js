import React from "react";
import "./Homepage.scss";
import Modal from "./Modal";
import { useState } from "react";

function Homepage() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <button
        className="modal"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open
      </button>
      <div className={`modal__dropdown ${openModal ? "active" : "inactive"}`}>
      {openModal && <Modal closeModal={setOpenModal} openModal={openModal}/>}
     </div>
    </div>
  );
}

export default Homepage;
