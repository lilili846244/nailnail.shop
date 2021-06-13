import Head from "next/head";
import { Container, Image, Row, Col } from "react-bootstrap";

import { ProductCard } from "../components/ProductCard";

export default function Products() {
  return (
    <div>
      <Head>
        <title>Nail Nail Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ background: "#ECBD99" }}>
        <Container>
          <Row>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h1
                style={{
                  color: "#fff",
                  fontSize: "50px",
                  fontWeight: 700,
                }}
              >
                Shop Left Sidebar
              </h1>
              <div>
                <a href="/"> Home</a> {">"} Shop Left Sidebar
              </div>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src="/image/cbd_oil.png"
                width={600}
                height={353}
                layout="responsive"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          <Col xs={4} style={{ background: "0005" }}>
            <div style={{ background: "pink", width: 100, height: 100 }}></div>
          </Col>
          <Col xs={8} style={{ background: "0005" }}>
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
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
