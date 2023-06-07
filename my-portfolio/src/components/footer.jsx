import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/header.css";
import { FooterIcon } from "../styles/styledComponents/styledIcon";
import RocketIcon from "@mui/icons-material/Rocket";
import { Fade, Fab, Box, useScrollTrigger, Typography } from "@mui/material";

function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "relative" }} // This is to position the hover text relative to the box
      >
        <Box
          sx={{
            "&:hover .hover-text": {
              opacity: 1,
            },
          }}
        >
          {children}
          <Typography
            className="hover-text"
            sx={{
              position: "absolute",
              fontFamily: "Roboto",
              fontWeight: "500",
              bottom: "-35px",
              left: "-75px",
              width: "200px",
              textAlign: "center",
              color: "white",
              opacity: 0,
              transition: "opacity 0.3s",
            }}
          >
            Beam me up, Scotty!
          </Typography>
        </Box>
      </Box>
    </Fade>
  );
}

function Footer(props) {
  return (
    <footer className="footer_Container">
      <div>
        <Row>
          <Col className="footer_Col">
            <a href="https://www.facebook.com/thongh/" target="_blank" rel="noopener noreferrer">
              <FooterIcon className="footer_IconContainer" hoverColor="#1877F2">
                <FontAwesomeIcon
                  icon="fa-brands fa-facebook-f"
                  className="footer_Icon"
                  id="facebook_Icon"
                />
              </FooterIcon>
            </a>
          </Col>
          <Col className="footer_Col">
            <a
              href="https://www.instagram.com/norbadboy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterIcon className="footer_IconContainer" hoverColor="#E4405F">
                <FontAwesomeIcon icon="fa-brands fa-instagram" className="footer_Icon" />
              </FooterIcon>
            </a>
          </Col>
          <Col className="footer_Col">
            <a href="https://github.com/norbadboy" target="_blank" rel="noopener noreferrer">
              <FooterIcon className="footer_IconContainer" hoverColor="#181717">
                <FontAwesomeIcon icon="fa-brands fa-github" className="footer_Icon" />
              </FooterIcon>
            </a>
          </Col>
          <Col className="footer_Col">
            <a
              href="https://www.linkedin.com/in/thong-trong-ho/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterIcon className="footer_IconContainer" hoverColor="#0077B5">
                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" className="footer_Icon" />
              </FooterIcon>
            </a>
          </Col>
        </Row>
        <div className="d-flex flex-column justify-content-center align-items-center mt-4">
          <div className="d-flex justify-content-center align-items-center mt-1">
            <div>
              <ScrollTop {...props}>
                <Fab
                  size="small"
                  aria-label="scroll back to top"
                  sx={{
                    backgroundColor: "transparent",
                    color: "white",
                    width: "50px",
                    height: "50px",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "white",
                    },
                  }}
                >
                  <RocketIcon sx={{ padding: " 2px", fontSize: "60px" }} />
                </Fab>
              </ScrollTop>
            </div>
          </div>
          <p className="footer_Text">© 2023 Thong Ho</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
