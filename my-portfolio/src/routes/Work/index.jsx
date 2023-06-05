import { useState } from "react";
import { Row, Col, Modal, Card } from "react-bootstrap";
import { StyledH1, StyledH3, StyledP } from "../../styles/styledComponents/styledTypography";
import "../../styles/homePage.css";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import project1 from "../../pictures/project1.jpg";
import project2 from "../../pictures/project2.jpg";
import project3 from "../../pictures/project3.jpg";
import project4 from "../../pictures/project4.jpg";
import project5 from "../../pictures/project5.jpg";
import project6 from "../../pictures/project6.jpg";

const projects = [
  { image: project1, alt: "Holidaze" },
  { image: project2, alt: "Home Luxury" },
  { image: project3, alt: "EasyBid" },
  { image: project4, alt: "Stay Home" },
  { image: project5, alt: "Ecom Store" },
  { image: project6, alt: "Community Science Museum" },
];

function WorkPage({ workRef }) {
  const [show, setShow] = useState(false);
  const [currentProject, setCurrentProject] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (project) => {
    setCurrentProject(project);
    setShow(true);
  };

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
          <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
            <Row className="g-4 ">
              {projects.map((project, index) => (
                <Col key={index} xl={4} md={6} sm={12}>
                  <Card className="workPage_Card">
                    <div className="card-img-container">
                      <Card.Img
                        variant="top"
                        src={project.image}
                        alt={project.alt}
                        className="workPage_CardImage"
                        onClick={() => handleShow(project)}
                      />
                      <div className="hover-icon">
                        <ZoomInIcon sx={{ color: "white", fontSize: "40px" }} />
                      </div>
                      <div className="project-title">
                        <StyledH3>{project.alt}</StyledH3>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          <Modal show={show} onHide={handleClose} className="modal_Container">
            <Modal.Header closeButton className="modal_Header">
              <div className="modal_Title">
                <Modal.Title>{currentProject.alt}</Modal.Title>
              </div>
            </Modal.Header>
            <Modal.Body className="modal_Body">
              <div>
                <img
                  src={currentProject.image}
                  alt={currentProject.alt}
                  className="modal_Image img-fluid"
                />
              </div>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </div>
  );
}

export default WorkPage;
