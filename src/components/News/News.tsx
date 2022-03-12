import React from "react";
import "./News.scss";
import Article from "../Article/Article";
import Sample from "../../assets/pizza.svg";
import useFetchNews from "../../hooks/useFetchNews";
import { Container, Row, Col } from "react-bootstrap";

const News = () => {
  const news = useFetchNews();

  return (
    <div className="news-element content-margin">
      <Container fluid>
        <Row className="justify-content-center">
          {news &&
            news.map((news) => {
              return (
                <Col>
                  <Article Image={news.image} Time={news.date} Title={news.title} Description={news.body} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default News;
