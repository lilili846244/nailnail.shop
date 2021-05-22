import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation, appWithTranslation } from "next-i18next";

import { Navbar, Container, Nav } from "react-bootstrap";
function MyApp({ Component, pageProps }) {
  const { t } = useTranslation("common");
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="#">NAILNAIL</Navbar.Brand>
          <Nav className="mr-auto">
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav.Link href="/">{t("Home")}</Nav.Link>
              <Nav.Link href="/about">{t("About Us")}</Nav.Link>
              <Nav.Link href="/products">{t("Products")}</Nav.Link>

              <Nav.Link href="/kits">{t("Kits")}</Nav.Link>
              <Nav.Link href="/news">{t("News")}</Nav.Link>
              <Nav.Link href="/contact">{t("Contact Us")}</Nav.Link>
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
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});
export default appWithTranslation(MyApp);
