import Head from "next/head";
import Image from "next/image";

import React, { useState } from "react";
import { Carousel, Button, Container, Row, Col } from "react-bootstrap";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import "react-multi-carousel/lib/styles.css";
import { MulitProductCarousel } from "../components/MultiProductCarousel";
import { ProductCard } from "../components/ProductCard";
import { MulitBlogCarousel } from "../components/MultiBlogCarousel";

import { GoBook } from "react-icons/go";
import Link from "next/link";

export default function Home() {
  const [index, setIndex] = useState(0);
  const { t } = useTranslation("common");
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const items = [
    {
      image: "http://nailnail.shop/img/banner/6.png",
      caption1: "First slide label",
      caption2: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      image: "http://nailnail.shop/img/banner/6.png",
      caption1: "2 slide label",
      caption2: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      image: "http://nailnail.shop/img/banner/6.png",
      caption1: "3 slide label",
      caption2: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      image: "http://nailnail.shop/img/banner/6.png",
      caption1: "4 slide label",
      caption2: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ];

  return (
    <div>
      <Head>
        <title>Nail Nail Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Carousel activeIndex={index} onSelect={handleSelect} interval={6000}>
        {items.map((item, index) => {
          return (
            <Carousel.Item key={index}>
              <div className="w-100" style={{ height: 500 }}>
                <Image
                  src={item.image}
                  alt={item.caption1}
                  layout="fill"
                  quality={50}
                />
              </div>
              <Carousel.Caption>
                <h3>{item.Caption1}</h3>
                <p>{item.caption2}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>

      <Container
        style={{
          position: "relative",
          top: -30,
          zIndex: 10,
          background: "#fff",
          boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
        }}
      >
        <Row>
          <Col>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ margin: "auto 10px", background: "#09c8" }}>
                <GoBook />
              </div>

              <div className="home_feature">
                <h4>Oredr Online</h4>
                <p>Free Shipping on Order Over $100</p>
              </div>
            </div>
          </Col>

          <Col>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ margin: "auto 10px", background: "#09c8" }}>
                <GoBook />
              </div>
              <div className="home_feature">
                <h4>Worldwide Shipping</h4>
                <p>24/7 h Customer Support</p>
              </div>
            </div>
          </Col>

          <Col>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ margin: "auto 10px", background: "#09c8" }}>
                <GoBook />
              </div>
              <div className="home_feature">
                <h4>Payment System</h4>
                <p>Secure Payment System</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="pt-5">
        <Row>
          <Col>
            <Image
              src="/image/home_left.jpg"
              width={600}
              height={353}
              layout="responsive"
            />
          </Col>
          <Col>
            <Image
              src="/image/home_right.jpg"
              width={600}
              height={353}
              layout="responsive"
            />
          </Col>
        </Row>
      </Container>

      <Container className="pt-5">
        <div className="center">
          <h1>New Arrivals</h1>
          <p>There are many variations of Lorem Ipsum available</p>
        </div>
      </Container>

      <Container>
        <MulitProductCarousel />
      </Container>

      <div style={{ background: "#fcf2e8", padding: "5rem 0" }}>
        <Container>
          <Row>
            <Col>
              <Image
                src="http://nailnail.shop/img/banner/6.png"
                layout="responsive"
                width="600px"
                height="537px"
              />
            </Col>

            <Col style={{ margin: "auto", padding: "0 50px" }}>
              <h4>Upto 40% off</h4>
              <h1>Beard Oil and Cream</h1>
              <p>
                Colognes contain approximately 3-5% oil diluted in 80-90%
                alcohol, with water making up about 10%.
              </p>

              <Button variant="outline-primary">Shop Now</Button>
              <Button variant="outline-primary">View More</Button>
            </Col>
          </Row>

          <Row>
            <Col style={{ margin: "auto", padding: "0 50px" }}>
              <h4>Upto 30% off</h4>
              <h1>Oak Oil and Cream</h1>
              <p>
                Colognes contain approximately 3-5% oil diluted in 80-90%
                alcohol, with water making up about 10%.
              </p>

              <Button variant="outline-primary">Shop Now</Button>
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
      </div>
      <Container className="pt-5">
        <div className="center">
          <h1>Popular Products</h1>
          <p>There are many variations of Lorem Ipsum available</p>
        </div>
      </Container>

      <Container>
        <Row>
          <Col>
            <ProductCard />
          </Col>
          <Col>
            <ProductCard />
          </Col>
          <Col>
            <ProductCard />
          </Col>
          <Col>
            <ProductCard />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProductCard />
          </Col>
          <Col>
            <ProductCard />
          </Col>
          <Col>
            <ProductCard />
          </Col>
          <Col>
            <ProductCard />
          </Col>
        </Row>
      </Container>

      <div>
        <Row>
          <Col>
            <Image
              src="/image/cbd_oil.png"
              layout="intrinsic"
              width="300px"
              height="300px"
            />
          </Col>
          <Col>
            <div className="center">
              <h3>Special Offers for Subscription</h3>
              <h1>GET INSTANT DISCOUNT FOR MEMBERSHIP</h1>

              <div
                style={{
                  borderRadius: 15,
                  overflow: "hidden",
                  width: "100%",
                }}
              >
                <input style={{ outline: "none" }} />
                <Button style={{ borderRadius: 15 }}> submit</Button>
              </div>
            </div>
          </Col>
          <Col>
            <Image
              src="/image/people.png"
              layout="intrinsic"
              width="300px"
              height="300px"
            />
          </Col>
        </Row>
      </div>

      <Container>
        <div className="center">
          <h1>Latest Blog</h1>
          <p>There are many variations of passages of Lorem Ipsum available.</p>
        </div>
        <MulitBlogCarousel />
      </Container>
    </div>
  );
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});
