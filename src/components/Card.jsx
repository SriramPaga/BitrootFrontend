import React, { useState, useEffect } from 'react';
import './Styles/Card.css';
import CircleDot from './CircleDot';
import Modal from './Modal';
// import Modal from './Modal';
function Card({ ModalData }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalId, setModalId] = useState(0);

  function handleModalClose() {
    setOpenModal(false);
  }
  function handleModalClick(modalId) {
    setModalId(modalId);
    // console.log(modalId);
    setOpenModal(!openModal);
  }
  const ModalBtn = (
    <button onClick={handleModalClose}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
      </svg>
    </button>
  );
  return (
    <>
      {ModalData.map((mdata, index) => {
        // console.log(mdata.id);
        return (
          <div className="Card" key={index}>
            <div className="imageContainer">
              <img className="modalImg" src={mdata.thumbnail.large} />
              <button
                className="btn"
                onClick={() => handleModalClick(mdata.id)}
              >
                Learn More
              </button>
            </div>
            <div className="cardContend">
              <div className="colorDots">
                <CircleDot color="#ffa500" />
                <CircleDot color="#008080" />
              </div>
              <div className="cardTitle">
                <h2>{mdata.title}</h2>
              </div>
              <div className="description">
                <p>{mdata.content}</p>
              </div>
              <div className="cardFooter">
                <div className="cardAuthor" key={index}>
                  {/* <div className="cardAuthoravatar">
                  <img
                    className="cardAuthorimg"
                    src={mdata.cardAuthor.avatar}
                    alt="avatar"
                  />
                </div> */}
                  <div className="cardAuthordetail">
                    <p className="cardAuthorname">{mdata.author.name}</p>
                    <p className="cardAuthorrole">{mdata.author.role}</p>
                  </div>
                </div>

                <div className="publishdate">
                  <p className="date">{Date(mdata.date).substring(0, 16)}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {openModal && (
        <>
          {console.log(ModalData)}
          <Modal
            ModalData={ModalData[modalId - 1]}
            open={openModal}
            closeModalBtn={ModalBtn}
          />
        </>
      )}
    </>
  );
}

export default Card;
