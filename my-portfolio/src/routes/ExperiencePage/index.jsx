import * as React from "react";
import { Row, Col } from "react-bootstrap";
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledP,
} from "../../styles/styledComponents/styledTypography";
import "../../styles/homePage.css";
import "../../styles/icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ExperiencePage({ experienceRef }) {
  return (
    <div ref={experienceRef} className="experiencePage_Container">
      <Row className="experiencePage_Row m-0">
        <Col className="mt-5 d-flex flex-column align-items-center justify-content-start">
          <div>
            <StyledH1 className=" mb-1 experiencePage_Title">Experience</StyledH1>
          </div>
          <div className="mt-3">
            <StyledP>
              I have been doing web development for the past 2 years, and I'm always eager to learn
              more in this fast paced industry.
            </StyledP>
          </div>
          <div className="mt-5 d-flex flex-column align-items-center justify-content-start">
            <StyledH3 className=" mb-1 experiencePage_Subtitle">
              some technologies I've worked with:
            </StyledH3>
            <Row className="g-4 mt-1">
              <Col xs={6} sm={4} md={3} lg={3}>
                <FontAwesomeIcon icon="fa-brands fa-html5" className="techIcon" id="html_Icon" />
              </Col>
              <Col xs={6} sm={4} md={3} lg={3}>
                <FontAwesomeIcon icon="fa-brands fa-css3-alt" className="techIcon" id="css_Icon" />
              </Col>
              <Col xs={6} sm={4} md={3} lg={3}>
                <FontAwesomeIcon icon="fa-brands fa-sass" className="techIcon" id="sass_Icon" />
              </Col>
              <Col xs={6} sm={4} md={3} lg={3}>
                <FontAwesomeIcon icon="fa-brands fa-js" className="techIcon" id="js_Icon" />{" "}
              </Col>
              <Col xs={6} sm={4} md={3} lg={3}>
                <FontAwesomeIcon icon="fa-brands fa-react" className="techIcon" id="react_Icon" />{" "}
              </Col>
              <Col xs={6} sm={4} md={3} lg={3}>
                <FontAwesomeIcon
                  icon="fa-brands fa-bootstrap"
                  className="techIcon"
                  id="bootstrap_Icon"
                />{" "}
              </Col>
              <Col xs={6} sm={4} md={3} lg={3}>
                <FontAwesomeIcon icon="fa-brands fa-github" className="techIcon" id="gitHub_Icon" />{" "}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ExperiencePage;
