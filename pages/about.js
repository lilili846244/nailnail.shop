import Head from "next/head";
import Image from "next/image";
import { GoBook } from "react-icons/go";

import React, { Component } from "react";
import { Youtube } from "../components/ReactYouTubeExample";

import { Row, Col, Container, Button } from "react-bootstrap";

export default function About() {
  return (
    <div>
      <Row style={{ background: "#fcf2e8", height: "269px" }}>
        <Col>
          <h1>About Us</h1>
          <div>
            <ul>
              <li>Home</li>
              <li>About Us</li>
            </ul>
          </div>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col style={{ margin: "auto", padding: "0 50px" }}>
            <h4>Provide the best</h4>
            <h1>Beard Oil For You</h1>
            <p>
              {" "}
              We provide the best Beard oil all over the world. We are the
              worldd best store for Beard Oil. You can buy our product without
              any hegitation because we always consus about our product quality
              and always maintain it properly so your can trust and this is our
              main goal we belive that...
            </p>
            <p>
              Some of our customer say’s that they trust us and buy our product
              without any hagitation because they belive us and always happy
            </p>

            <Button variant="outline-primary">View More</Button>
          </Col>
          <Col>
            <Image
              src="http://nailnail.shop/img/banner/6.png"
              layout="responsive"
              width="600px"
              height="537px"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <div
          style={{ background: "#fcf2e8", width: "1260px", height: "864px" }}
        ></div>
      </Container>

      <Row>
        <Col>
          <Image
            src="http://nailnail.shop/img/brand-logo/1.png"
            width={83}
            height={82}
            layout="responsive"
          />
        </Col>
        <Col>
          <Image
            src="http://nailnail.shop/img/brand-logo/2.png"
            width={83}
            height={82}
            layout="responsive"
          />
        </Col>
        <Col>
          <Image
            src="http://nailnail.shop/img/brand-logo/3.png"
            width={83}
            height={82}
            layout="responsive"
          />
        </Col>
        <Col>
          <Image
            src="http://nailnail.shop/img/brand-logo/4.png"
            width={83}
            height={82}
            layout="responsive"
          />
        </Col>
        <Col>
          <Image
            src="http://nailnail.shop/img/brand-logo/5.png"
            width={83}
            height={82}
            layout="responsive"
          />
        </Col>
      </Row>

      <ReactYouTubeExample />

      <Container
        style={{
          background: "#fff",
          boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
        }}
      >
        <Row>
          <Col>
            <Col>
              <GoBook />
            </Col>

            <Col className="home_feature">
              <h4>Oredr Online</h4>
              <p>Free Shipping on Order Over $100</p>
            </Col>
          </Col>

          <Col className="ltn-feature">
            <Col className="icon">
              <GoBook />
            </Col>
            <Col className="home_feature">
              <h4>Worldwide Shipping</h4>
              <p>24/7 h Customer Support</p>
            </Col>
          </Col>
          <Col className="ltn-feature">
            <Col className="icon">
              <GoBook />
            </Col>
            <Col className="home_feature">
              <h4>Worldwide Shipping</h4>
              <p>24/7 h Customer Support</p>
            </Col>
          </Col>

          <Col className="ltn-feature">
            <Col className="icon">
              <GoBook />
            </Col>
            <Col className="home_feature">
              <h4>Payment System</h4>
              <p>Secure Payment System</p>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
