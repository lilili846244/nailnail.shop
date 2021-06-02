import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function About() {
  return (
    <div>
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
      </div>
    </div>
  );
}
