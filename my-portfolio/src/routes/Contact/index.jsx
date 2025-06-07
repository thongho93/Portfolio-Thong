import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledP, StyledH1 } from "../../styles/styledComponents/styledTypography";
import "../../styles/homePage.css";
import { PrimaryButton } from "../../styles/styledComponents/styledButton";

function ContactPage({ contactRef }) {
  return (
    <div ref={contactRef} className="contactPage_Container">
      <Row className="contactPage_Row m-0">
        <Col className="d-flex flex-column align-items-center justify-content-start">
          <div className="mb-1 contactPage_Title_Container">
            <FontAwesomeIcon icon="fa-solid fa-paper-plane" className="contactPage_Icon" />
            <StyledH1 className="contactPage_Title">Get in touch!</StyledH1>
          </div>
          <div>
            <StyledP className="contactPage_Text mt-3">
              I'm currently looking for a job as a web developer. If you have any questions or want
              to work with me, feel free to contact me!
            </StyledP>
          </div>
          <div className="mt-3">
            <a href="mailto:thong_ho_93@yahoo.com">
              <PrimaryButton className="contactPage_Button">Say Hello</PrimaryButton>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ContactPage;
