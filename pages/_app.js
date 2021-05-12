import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Container, Nav } from "react-bootstrap";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="#">NAILNAIL</Navbar.Brand>
          <Nav className="mr-auto">
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/pricing">Pricing</Nav.Link>

              <Nav.Link href="/kits">Kits</Nav.Link>
              <Nav.Link href="/news">News</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Navbar.Collapse>
            <Navbar.Text>USD</Navbar.Text>
            <Navbar.Text>Search</Navbar.Text>
            <Navbar.Text>ACC</Navbar.Text>
            <Navbar.Text>Shop Car</Navbar.Text>
          </Nav>
        </Container>
      </Navbar>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
