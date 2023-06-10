import { useState } from "react";
import { Row, Col, Modal, Card, Carousel } from "react-bootstrap";
import {
  StyledH1,
  StyledH3,
  StyledP,
  StyledUL,
  StyledLI,
} from "../../styles/styledComponents/styledTypography";
import "../../styles/homePage.css";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import project1 from "../../pictures/project1.jpg";
import project1_1 from "../../pictures/project1_1.jpg";
import project2 from "../../pictures/project2.jpg";
import project2_1 from "../../pictures/project2_1.jpg";
import project3 from "../../pictures/project3.jpg";
import project4 from "../../pictures/project4.jpg";
import project4_1 from "../../pictures/project4_1.jpg";
import project5 from "../../pictures/project5.jpg";
import project5_1 from "../../pictures/project5_1.jpg";
import project5_2 from "../../pictures/project5_2.jpg";
import project6 from "../../pictures/project6.jpg";
import project6_1 from "../../pictures/project6_1.jpg";
import project6_2 from "../../pictures/project6_2.jpg";
import { BaseButton, ModalButton } from "../../styles/styledComponents/styledButton";

const descriptionProject1 = (
  <div className="d-flex flex-column">
    <StyledP>
      Holidaze is a fictional venue booking website. In this project, we will be working with the
      official API documentation provided by Holidaze to plan, design, and build a modern front-end
      accommodation booking application. The goal is to create a user-friendly and visually
      appealing application that allows users to book holidays at various venues and provides an
      admin-facing interface for managing venues and bookings.
    </StyledP>
  </div>
);

const descriptionProject2 = (
  <div className="d-flex flex-column">
    <StyledP>
      This project aim is to build a blog site where I can choose the theme and topic covered on the
      blog.
    </StyledP>
    <StyledP className="mt-2">
      {" "}
      <strong>The project has the following required tasks:</strong>{" "}
    </StyledP>
    <StyledUL>
      <StyledLI>
        Home page must have a carousel (slider) showing the ‘Latest Posts’ where user can click to
        see more posts.
      </StyledLI>
      <StyledLI>
        Blog page must show the first ten blogs, and then click a button to load more posts.
      </StyledLI>
      <StyledLI>
        Blog specific page must have a modal image giving the user a bigger view of that image.
      </StyledLI>
      <StyledLI>
        Contact page that contains at least 4 textbox (name, email, subject and message content)
        with JavaScript validation.
      </StyledLI>
      <StyledLI>
        Use WordPress to publish contents, and making a call to the WordPress REST API to fetch the
        data into my website.
      </StyledLI>
    </StyledUL>
  </div>
);

const descriptionProject3 = (
  <div className="d-flex flex-column">
    <StyledP>
      An auction site is looking to launch a website where users can add items to be bid on and bid
      on items other users have put up for auction.
    </StyledP>
    <StyledP>
      When a new user joins the website, they are given 1000 credits to use on the site. They can
      get credits by selling items and use credit by buying items. Non-registered users can search
      through the listings, but only registered users can make bids on listings.
    </StyledP>
    <StyledP className="mt-2">
      {" "}
      <strong>User stories:</strong>{" "}
    </StyledP>
    <StyledUL>
      <StyledLI>A user with a stud.noroff.no email may register</StyledLI>
      <StyledLI>A registered user may login</StyledLI>
      <StyledLI>A registered user may logout</StyledLI>
      <StyledLI>A registered user may update their avatar</StyledLI>
      <StyledLI>A registered user may view their total credit</StyledLI>
      <StyledLI>
        A registered user may create a Listing with a title, deadline date, media gallery and
        description
      </StyledLI>
      <StyledLI>A registered user may add a Bid to another user’s Listing</StyledLI>
      <StyledLI>A registered user may view Bids made on a Listing</StyledLI>
      <StyledLI>A registered user may use credit to make a Bid on another user’s Listing</StyledLI>
      <StyledLI>An unregistered user may search through Listings</StyledLI>
    </StyledUL>
  </div>
);

const descriptionProject5 = (
  <div className="d-flex flex-column">
    <StyledP>
      The goal of this project is to apply knowledge of React to build an eCom store.
    </StyledP>
    <StyledP className="mt-2">
      {" "}
      <strong>The project has the following required pages for an eCom store:</strong>{" "}
    </StyledP>
    <StyledUL>
      <StyledLI>Home page</StyledLI>
      <StyledLI>Individual product page</StyledLI>
      <StyledLI>Cart page</StyledLI>
      <StyledLI>Checkout success page</StyledLI>
    </StyledUL>
    <StyledP className="mt-2">
      {" "}
      The Homepage should have a list of all the products. There should be a look-ahead search bar
      that filters products when typing in a product name. Clicking on a product should take a user
      to an individual product page.
    </StyledP>
    <StyledP className="mt-2">
      {" "}
      The individual product page should display data for a single product. There should be an Add
      to cart button which, upon clicking, adds the product to the cart. The product page should
      display the title of the product, the description and the image. There should also be reviews
      listed for the product, if there are any. You should use the discountedPrice property to
      display the price of the product. If there is a difference between the discountedPrice and
      price properties then that means there is a discount for that product. Calculate what this
      discount is and display it on the page.
    </StyledP>
    <StyledP className="mt-2">
      {" "}
      Clicking on the Cart icon will load the Cart page, which will list all of the products as well
      as a total. The Cart page will have a Checkout button. Clicking this Checkout button then goes
      to a Checkout success page.
    </StyledP>
    <StyledP className="mt-2">
      {" "}
      The Checkout success page will display a message to the user notifying them that their order
      was successful. There should also be a link that lets a user go back to the store. The cart
      must be cleared if the user gets to the Checkout success page.
    </StyledP>
  </div>
);

const descriptionProject6 = (
  <div className="d-flex flex-column">
    <StyledP>
      An interactive science museum called the Community Science Museum is opening in your
      town/city. Its core target audience is primary and middle school children (7-15) and families
      with young children. The museum wants a website that is informative and appealing, that will
      attract both middle school pupils and their parents. The site should appeal to youngsters
      without pandering; it should take for granted that the audience is inquisitive and
      intelligent. The website should be informative and engaging, but should encourage viewers to
      visit the museum itself.
    </StyledP>
    <StyledP className="mt-2">
      {" "}
      <strong>Requirements:</strong>{" "}
    </StyledP>
    <StyledUL>
      <StyledLI>The site must be have a design that appeals to the target audience.</StyledLI>
      <StyledLI>The site must have at least 4-6 pages.</StyledLI>
      <StyledLI>
        Compositional principles, typography, and color schemes must be considered.
      </StyledLI>
      <StyledLI>Your HTML should be semantic and neatly indented.</StyledLI>
      <StyledLI>
        The site should use external CSS style sheets which follow the DRY principle.
      </StyledLI>
      <StyledLI>
        The site should download quickly, and not be overly "heavy". Images should not be over
        200kb.
      </StyledLI>
      <StyledLI>
        The site should take WCAG principles into consideration, especially regarding hierarchy,
        navigation, and color usage.
      </StyledLI>
      <StyledLI>
        The site should be responsive, attractive, and easy to use on a variety of devices.
      </StyledLI>
      <StyledLI>
        The site should show consideration for content strategy and SEO (consider your use of meta
        tags and alt text).
      </StyledLI>
    </StyledUL>
  </div>
);

const projects = [
  {
    images: [project1, project1_1],
    alt: "Holidaze",
    description: descriptionProject1,
    siteUrl: "https://holidaze-exam-thong.netlify.app/",
    githubUrl: "https://github.com/norbadboy/holidaze-project-exam-2-thong",
  },
  {
    images: [project2, project2_1],
    alt: "Home Luxury",
    description: descriptionProject2,
    siteUrl: "https://spring2022.netlify.app/",
    githubUrl: "https://github.com/Noroff-FEU-Assignments/project-exam-1-norbadboy",
  },
  {
    images: [project3],
    alt: "EasyBid",
    description: descriptionProject3,
    siteUrl: "https://thong-ho-semester-project-2.netlify.app/",
    githubUrl: "https://github.com/norbadboy/Semester-project-2",
  },
  {
    images: [project4, project4_1],
    alt: "Stay Home",
    siteUrl: "https://thong-css-frameworks.netlify.app/",
    githubUrl: "https://github.com/norbadboy/css-frameworks-resit",
  },
  {
    images: [project5, project5_1, project5_2],
    alt: "Ecom Store",
    description: descriptionProject5,
    siteUrl: "https://react-app-thong-23.netlify.app/",
    githubUrl: "https://github.com/norbadboy/React-CA-Thong-23",
  },
  {
    images: [project6, project6_1, project6_2],
    alt: "Community Science Museum",
    description: descriptionProject6,
    siteUrl: "https://semester-project-winter-2021-thong-ho.netlify.app/",
    githubUrl: "https://github.com/norbadboy/Noroff-FEU-Semester-Project-Thong",
  },
];

function Description({ element }) {
  return <div>{element}</div>;
}

function WorkPage({ workRef }) {
  const [show, setShow] = useState(false);
  const [currentProject, setCurrentProject] = useState({ images: [], alt: "", description: "" });

  const handleClose = () => setShow(false);
  const handleShow = (project) => {
    setCurrentProject(project);
    setShow(true);
  };

  return (
    <div ref={workRef} className="workPage_Container">
      <Row className="workPage_Row m-0">
        <Col className="d-flex flex-column align-items-center justify-content-start">
          <div>
            <StyledH1 className=" mb-1 workPage_Title">What I've done</StyledH1>
          </div>
          <div className="mt-2">
            <StyledP>(More coming soon...)</StyledP>
          </div>
          <div
            className="mt-5 d-flex flex-column align-items-center justify-content-center"
            style={{ maxWidth: "1150px" }}
          >
            <Row className="g-4">
              {projects.map((project, index) => (
                <Col key={index} xl={4} md={6}>
                  <Card className="workPage_Card">
                    <div className="card-img-container">
                      <Card.Img
                        variant="top"
                        src={project.images[0]}
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
              <div className="d-flex modal_Images_Container">
                <Carousel interval={5000}>
                  {currentProject &&
                    currentProject.images &&
                    currentProject.images.map((image, index) => (
                      <Carousel.Item key={index}>
                        <img
                          src={image}
                          alt={currentProject.alt}
                          className="modal_Image img-fluid"
                        />
                      </Carousel.Item>
                    ))}
                </Carousel>
              </div>
              <div className="modal_Description mt-5">
                <Description element={currentProject.description} />
              </div>
              <div className="d-flex justify-content-center mt-3" style={{ width: "100%" }}>
                {currentProject.siteUrl && (
                  <ModalButton
                    as="a"
                    href={currentProject.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal_Button_ViewSite"
                  >
                    Visit site
                  </ModalButton>
                )}
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <StyledP>or</StyledP>
                </div>
                {currentProject.githubUrl && (
                  <ModalButton
                    as="a"
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal_Button_GitHub"
                  >
                    View source
                  </ModalButton>
                )}
              </div>
            </Modal.Body>
            <Modal.Footer className="modal_Footer_Container">
              <div className="modal_Footer">
                <BaseButton className="modal_Button_Close" onClick={handleClose}>
                  Close
                </BaseButton>
              </div>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </div>
  );
}

export default WorkPage;
