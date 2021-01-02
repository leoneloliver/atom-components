import React from "react";

function Modal(props) {
  return (
    <>
      <div className="full-modal" id="new-modal">
        <div className="modal-containner">
          <div role="button" className="close-modal">
            X
          </div>
          <div className="close-window">
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
          <div className="d-flex">
            <div className="modal-container">
              <img alt="Main image photo" />
            </div>
            <button className="btn btn-raised-dark">Buy Now</button>
          </div>

          <div className="text-modal"></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Modal;
