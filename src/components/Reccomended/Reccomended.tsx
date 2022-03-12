import React, { useState } from "react";
import "./Reccomended.scss";
import { Modal, Button } from "react-bootstrap";

const Reccomended = ({
  ID,
  title,
  description,
  image,
  category,
  price,
  price_discount,
  Compact,
}: {
  ID: number;
  title: string;
  description?: string;
  category: string;
  image: string;
  price?: number;
  price_discount?: number;
  Compact: boolean;
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {Compact && (
        <div className="store-reccomended__element_compact" onClick={handleShow}>
          <img src={image} alt="image" />
          <div>
            <h4>{title}</h4>
            <p>{price}€</p>
          </div>
        </div>
      )}

      {!Compact && (
        <>
          {" "}
          <div className="store-reccomended__element" onClick={handleShow}>
            <img src={image} alt="pizza" />
            <div>
              <h4>{title}</h4>
              <p>{description}</p>
              <p>{price}€</p>
            </div>
          </div>
        </>
      )}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="modalBody">
          <div className="modalLeft">
            <img src={image} alt="pizza" />{" "}
          </div>
          <div className="modalRight">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{price}€</p>
            <div className="modalButton">
              <input type="button" value="Užsakyti" />
              <input type="button" value="Atšaukti" onClick={handleClose} />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Reccomended;
