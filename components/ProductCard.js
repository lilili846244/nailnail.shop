import React, { useState } from "react";

import style from "../styles/ProductCard.module.css";

import { Button, ButtonGroup } from "react-bootstrap";

import { FaApple } from "react-icons/fa";

import Image from "next/image";

export const ProductCard = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={style.productCard}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div style={{ position: "relative" }}>
        <Image
          src="/image/product1.png"
          layout="responsive"
          width="600"
          height="700"
        />
        {isHover && (
          <ButtonGroup className={style.hoverItem} style={{ zIndex: 1 }}>
            <Button>Left</Button>
            <Button>
              <FaApple />
            </Button>
            <Button>Right</Button>
          </ButtonGroup>
        )}
        <div className="textAlignContainer">
          <p>star</p>
          <a>
            <h3>Product Name</h3>
          </a>
          <div style={{ flexDirection: "row" }}>
            <span>price/</span>
            <span>origin price</span>
          </div>
        </div>
      </div>
    </div>
  );
};
