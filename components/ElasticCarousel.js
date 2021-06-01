import React from "react";
import { Card } from "react-bootstrap";

import Carousel from "react-elastic-carousel";
import { Card } from "../components/Card";

export const ElasticCarousel = () => {
  return (
    <div className="styling-example">
      <Carousel itemsToShow={1}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>
    </div>
  );
};
