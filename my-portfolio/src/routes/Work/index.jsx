import * as React from "react";
import { Row, Col, Modal, Card } from "react-bootstrap";
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledP,
} from "../../styles/styledComponents/styledTypography";
import "../../styles/homePage.css";
import project1 from "../../pictures/project1.jpg";
import project2 from "../../pictures/project2.jpg";
import project3 from "../../pictures/project3.jpg";
import project4 from "../../pictures/project4.jpg";
import project5 from "../../pictures/project5.jpg";
import project6 from "../../pictures/project6.jpg";

function WorkPage({ workRef }) {
  return (
    <div ref={workRef} className="workPage_Container">
      <Row className="workPage_Row m-0">
        <Col className="mt-5 d-flex flex-column align-items-center justify-content-start">
          <div>
            <StyledH1 className=" mb-1 workPage_Title">What I've done</StyledH1>
          </div>
          <div className="mt-2">
            <StyledP>(More coming soon...)</StyledP>
          </div>
          <div
            className="mt-5 d-flex flex-column align-items-center justify-content-start"
            style={{ maxWidth: "800px" }}
          >
            <Row className="g-5">
              <Col xl={4} md={6}>
                <Card className="workPage_Card border-0 border-radius-0">
                  <Card.Img
                    variant="top"
                    src={project1}
                    alt="Project 1"
                    className="workPage_CardImage"
                  />
                </Card>
              </Col>
              <Col xl={4} md={6}>
                <Card className="workPage_Card border-0 border-radius-0">
                  <Card.Img
                    variant="top"
                    src={project2}
                    alt="Project 2"
                    className="workPage_CardImage"
                  />
                </Card>
              </Col>
              <Col xl={4} md={6}>
                <Card className="workPage_Card border-0 border-radius-0">
                  <Card.Img
                    variant="top"
                    src={project3}
                    alt="Project 3"
                    className="workPage_CardImage"
                  />
                </Card>
              </Col>
              <Col xl={4} md={6}>
                <Card className="workPage_Card border-0 border-radius-0">
                  <Card.Img
                    variant="top"
                    src={project4}
                    alt="Project 4"
                    className="workPage_CardImage"
                  />
                </Card>
              </Col>
              <Col xl={4} md={6}>
                <Card className="workPage_Card border-0 border-radius-0">
                  <Card.Img
                    variant="top"
                    src={project5}
                    alt="Project 5"
                    className="workPage_CardImage"
                  />
                </Card>
              </Col>
              <Col xl={4} md={6}>
                <Card className="workPage_Card border-0 border-radius-0">
                  <Card.Img
                    variant="top"
                    src={project6}
                    alt="Project 6"
                    className="workPage_CardImage"
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default WorkPage;
