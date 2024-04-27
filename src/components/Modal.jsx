import React from 'react';
import './Styles/Modal.css';
import CircleDot from './CircleDot';
function Modal({ open, closeModalBtn, ModalData }) {
  if (!open) return null;
  // console.log(ModalData);
  return (
    <div className="overlay">
      <div className="modalContainer">
        <div className="closeModalBtn">{closeModalBtn}</div>
        <div className="Modal">
          <div className="modalImageContainer">
            <img className="modalImg" src={ModalData.thumbnail.large} />
          </div>
          <div className="modalContent">
            <div className="modalTitle">
              <h2>{ModalData.title}</h2>
            </div>
            <div className="modalDescription">
              <p>{ModalData.content}</p>
            </div>
            <div className="modalFooter">
              <div className="author">
                <div className="authoravatar">
                  <img
                    className="authorimg"
                    src={ModalData.author.avatar}
                    alt="avatar"
                  />
                </div>
                <div className="authordetail">
                  <p className="authorname">{ModalData.author.name}</p>
                  <p className="authorrole">{ModalData.author.role}</p>
                </div>
              </div>

              <div className="publishdate">
                <p className="date">
                  {Date(ModalData.date).substring(0, 16)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
