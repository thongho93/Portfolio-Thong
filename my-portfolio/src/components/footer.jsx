import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/header.css";
import { FooterIcon } from "../styles/styledComponents/styledIcon";

function Footer() {
  return (
    <footer className="footer_Container">
      <div>
        <Row className="g-1">
          <Col className="footer_Col">
            <FooterIcon className="footer_IconContainer" hoverColor="#1877F2">
              <a href="https://www.facebook.com/thongh/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon="fa-brands fa-facebook-f"
                  className="footer_Icon"
                  id="facebook_Icon"
                />
              </a>
            </FooterIcon>
          </Col>
          <Col className="footer_Col">
            <FooterIcon className="footer_IconContainer" hoverColor="#E4405F">
              <a
                href="https://www.instagram.com/norbadboy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon="fa-brands fa-instagram" className="footer_Icon" />
              </a>
            </FooterIcon>
          </Col>
          <Col className="footer_Col">
            <FooterIcon className="footer_IconContainer" hoverColor="#181717">
              <a href="https://github.com/norbadboy" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-github" className="footer_Icon" />
              </a>
            </FooterIcon>
          </Col>
          <Col className="footer_Col">
            <FooterIcon className="footer_IconContainer" hoverColor="#0077B5">
              <a
                href="https://www.linkedin.com/in/thong-trong-ho/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" className="footer_Icon" />
              </a>
            </FooterIcon>
          </Col>
        </Row>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <p className="footer_Text">© 2023 Thong Ho</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
