import React from "react";
import "./Store.scss";
import Reccomended from "../Reccomended/Reccomended";
import useFetchMenu from "../../hooks/useFetchMenu";
import { Container, Row, Col } from "react-bootstrap";

const Store = () => {
  const reccomended = useFetchMenu("reccomend");
  const pizza = useFetchMenu("pizza");
  const drink = useFetchMenu("drink");
  const dessert = useFetchMenu("dessert");
  const snack = useFetchMenu("snack");
  const discount = useFetchMenu("discount");

  return (
    <div className="store  content-margin">
      <h4>Rekomenduojame</h4>
      <Container fluid className="">
        <Row className="justify-content-center justify-content-sm-start" id="reccomended">
          {reccomended &&
            reccomended.map((item) => (
              <Col xs={8} sm={6} md={3} lg={3} xl={2} xxl={2} className="mb-5">
                <Reccomended {...item} key={item.ID} Compact={true}></Reccomended>
              </Col>
            ))}
        </Row>
        <h4>Picos</h4>
        <Row className="justify-content-center justify-content-sm-start" id="pizzas">
          {pizza &&
            pizza.map((item) => (
              <Col xs={8} sm={6} md={4} lg={3} xl={2} className="mb-5 ">
                <Reccomended {...item} key={item.ID} Compact={false}></Reccomended>
              </Col>
            ))}
        </Row>
        <h4>Gerimai</h4>
        <Row className="justify-content-center justify-content-sm-start" id="drinks">
          {drink &&
            drink.map((item) => (
              <Col xs={8} sm={6} md={4} lg={3} xl={2} className="mb-5">
                <Reccomended {...item} key={item.ID} Compact={false}></Reccomended>
              </Col>
            ))}
        </Row>
        <h4>Desertai</h4>
        <div className="store-desserts" id="desserts">
          <Row className="justify-content-center justify-content-sm-start" id="desserts">
            {dessert &&
              dessert.map((item) => (
                <Col xs={8} sm={6} md={4} lg={3} xl={2} className="mb-5">
                  <Reccomended {...item} key={item.ID} Compact={false}></Reccomended>
                </Col>
              ))}
          </Row>
        </div>
        <h4>Užkandžiai</h4>
        <div className="store-snacks" id="snacks">
          <Row className="justify-content-center justify-content-sm-start" id="snacks">
            {snack &&
              snack.map((item) => (
                <Col xs={8} sm={6} md={4} lg={3} xl={2} className="mb-5">
                  <Reccomended {...item} key={item.ID} Compact={false}></Reccomended>
                </Col>
              ))}
          </Row>
        </div>
        <h4>Akcijos</h4>
        <div className="store-discounts" id="discounts">
          <Row className="justify-content-center justify-content-sm-start" id="discounts">
            {discount &&
              discount.map((item) => (
                <Col xs={8} sm={6} md={4} lg={3} xl={2} className="mb-5">
                  <Reccomended {...item} key={item.ID} Compact={false}></Reccomended>
                </Col>
              ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Store;
