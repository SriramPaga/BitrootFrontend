import React, { useState, useEffect } from 'react';
import Card from './Card';
import './CardView.css';
function CardsView() {
  const [modaldata, setModalData] = useState(null);

  useEffect(() => {
    fetch(
      'https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts'
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setModalData(data);
      })
      .catch((error) => console.log('ERROR'));
  }, []);

  return (
    <section className="mainContainer">
      <div className="container">
        {modaldata && <Card ModalData={modaldata} />}
      </div>
    </section>
  );
}

export default CardsView;
