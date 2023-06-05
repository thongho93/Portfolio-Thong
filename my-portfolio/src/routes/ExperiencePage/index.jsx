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
import Popover from "@mui/material/Popover";
import { Typography } from "@mui/material";

function ExperiencePage({ experienceRef }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [popoverContent, setPopoverContent] = React.useState("");

  const handlePopoverOpen = (event, content) => {
    setAnchorEl(event.currentTarget);
    setPopoverContent(content);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopoverContent("");
  };

  const open = Boolean(anchorEl);

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
            <StyledH3 className="experiencePage_Subtitle">
              some technologies I've worked with:
            </StyledH3>
            <Row className="g-5" style={{ maxWidth: "750px" }}>
              <Col xs={6} sm={4} md={3} lg={3}>
                <FontAwesomeIcon
                  icon="fa-brands fa-html5"
                  className="techIcon"
                  id="html_Icon"
                  aria-owns={open ? "mouse-over-popover-html" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={(event) => handlePopoverOpen(event, "html")}
                  onMouseLeave={handlePopoverClose}
                />
                <Popover
                  id="mouse-over-popover"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handlePopoverClose}
                  sx={{
                    pointerEvents: "none",
                    display: "flex",
                    ".MuiPopover-paper": {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "fit-content",
                      height: "22px",
                      border: "none",
                      boxShadow: "none",
                      color: "rgb(80, 76, 140)",
                      borderRadius: "5px",
                      padding: "0",
                      margin: "0",
                      fontWeight: "700",
                    },
                  }}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  disableRestoreFocus
                >
                  <Typography
                    sx={{
                      p: 1,
                      whiteSpace: "nowrap",
                      fontSize: "15px",
                      textTransform: "uppercase",
                      fontWeight: "500",
                    }}
                  >
                    {popoverContent}{" "}
                  </Typography>
                </Popover>
              </Col>
              <Col xs={6} sm={4} md={3} lg={3}>
                <FontAwesomeIcon
                  icon="fa-brands fa-css3-alt"
                  className="techIcon"
                  id="css_Icon"
                  aria-owns={open ? "mouse-over-popover-html" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={(event) => handlePopoverOpen(event, "css")}
                  onMouseLeave={handlePopoverClose}
                />
                <Popover
                  id="mouse-over-popover"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handlePopoverClose}
                  sx={{
                    pointerEvents: "none",
                    display: "flex",
                    ".MuiPopover-paper": {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "fit-content",
                      height: "22px",
                      border: "none",
                      boxShadow: "none",
                      color: "rgb(80, 76, 140)",
                      borderRadius: "5px",
                      padding: "0",
                      margin: "0",
                      fontWeight: "700",
                    },
                  }}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  disableRestoreFocus
                >
                  <Typography
                    sx={{
                      p: 1,
                      whiteSpace: "nowrap",
                      fontSize: "15px",
                      textTransform: "uppercase",
                      fontWeight: "500",
                    }}
                  >
                    {popoverContent}{" "}
                  </Typography>
                </Popover>
              </Col>
              <Col xs={6} sm={4} md={3} lg={3}>
                <FontAwesomeIcon
                  icon="fa-brands fa-sass"
                  className="techIcon"
                  id="sass_Icon"
                  aria-owns={open ? "mouse-over-popover-html" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={(event) => handlePopoverOpen(event, "sass")}
                  onMouseLeave={handlePopoverClose}
                />
                <Popover
                  id="mouse-over-popover"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handlePopoverClose}
                  sx={{
                    pointerEvents: "none",
                    display: "flex",
                    ".MuiPopover-paper": {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "fit-content",
                      height: "22px",
                      border: "none",
                      boxShadow: "none",
                      color: "rgb(80, 76, 140)",
                      borderRadius: "5px",
                      padding: "0",
                      margin: "0",
                      fontWeight: "700",
                    },
                  }}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  disableRestoreFocus
                >
                  <Typography
                    sx={{
                      p: 1,
                      whiteSpace: "nowrap",
                      fontSize: "15px",
                      textTransform: "uppercase",
                      fontWeight: "500",
                    }}
                  >
                    {popoverContent}{" "}
                  </Typography>
                </Popover>
              </Col>
              <Col xs={6} sm={4} md={3} lg={3}>
                <FontAwesomeIcon
                  icon="fa-brands fa-js"
                  className="techIcon"
                  id="js_Icon"
                  aria-owns={open ? "mouse-over-popover-html" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={(event) => handlePopoverOpen(event, "JavaScript")}
                  onMouseLeave={handlePopoverClose}
                />
                <Popover
                  id="mouse-over-popover"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handlePopoverClose}
                  sx={{
                    pointerEvents: "none",
                    display: "flex",
                    ".MuiPopover-paper": {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "fit-content",
                      height: "22px",
                      border: "none",
                      boxShadow: "none",
                      color: "rgb(80, 76, 140)",
                      borderRadius: "5px",
                      padding: "0",
                      margin: "0",
                      fontWeight: "700",
                    },
                  }}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  disableRestoreFocus
                >
                  <Typography
                    sx={{
                      p: 1,
                      whiteSpace: "nowrap",
                      fontSize: "15px",
                      textTransform: "uppercase",
                      fontWeight: "500",
                    }}
                  >
                    {popoverContent}{" "}
                  </Typography>
                </Popover>
              </Col>
              <Col xs={6} sm={4} md={3} lg={3}>
                <FontAwesomeIcon
                  icon="fa-brands fa-react"
                  className="techIcon"
                  id="react_Icon"
                  aria-owns={open ? "mouse-over-popover-html" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={(event) => handlePopoverOpen(event, "react")}
                  onMouseLeave={handlePopoverClose}
                />
                <Popover
                  id="mouse-over-popover"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handlePopoverClose}
                  sx={{
                    pointerEvents: "none",
                    display: "flex",
                    ".MuiPopover-paper": {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "fit-content",
                      height: "22px",
                      border: "none",
                      boxShadow: "none",
                      color: "rgb(80, 76, 140)",
                      borderRadius: "5px",
                      padding: "0",
                      margin: "0",
                      fontWeight: "700",
                    },
                  }}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  disableRestoreFocus
                >
                  <Typography
                    sx={{
                      p: 1,
                      whiteSpace: "nowrap",
                      fontSize: "15px",
                      textTransform: "uppercase",
                      fontWeight: "500",
                    }}
                  >
                    {popoverContent}{" "}
                  </Typography>
                </Popover>
              </Col>
              <Col xs={6} sm={4} md={3} lg={3}>
                <FontAwesomeIcon
                  icon="fa-brands fa-bootstrap"
                  className="techIcon"
                  id="bootstrap_Icon"
                  aria-owns={open ? "mouse-over-popover-html" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={(event) => handlePopoverOpen(event, "bootstrap")}
                  onMouseLeave={handlePopoverClose}
                />
                <Popover
                  id="mouse-over-popover"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handlePopoverClose}
                  sx={{
                    pointerEvents: "none",
                    display: "flex",
                    ".MuiPopover-paper": {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "fit-content",
                      height: "22px",
                      border: "none",
                      boxShadow: "none",
                      color: "rgb(80, 76, 140)",
                      borderRadius: "5px",
                      padding: "0",
                      margin: "0",
                      fontWeight: "700",
                    },
                  }}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  disableRestoreFocus
                >
                  <Typography
                    sx={{
                      p: 1,
                      whiteSpace: "nowrap",
                      fontSize: "15px",
                      textTransform: "uppercase",
                      fontWeight: "500",
                    }}
                  >
                    {popoverContent}{" "}
                  </Typography>
                </Popover>
              </Col>
              <Col xs={6} sm={4} md={3} lg={3}>
                <FontAwesomeIcon
                  icon="fa-brands fa-github"
                  className="techIcon"
                  id="gitHub_Icon"
                  aria-owns={open ? "mouse-over-popover-html" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={(event) => handlePopoverOpen(event, "GitHub")}
                  onMouseLeave={handlePopoverClose}
                />
                <Popover
                  id="mouse-over-popover"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handlePopoverClose}
                  sx={{
                    pointerEvents: "none",
                    display: "flex",
                    ".MuiPopover-paper": {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "fit-content",
                      height: "22px",
                      border: "none",
                      boxShadow: "none",
                      color: "rgb(80, 76, 140)",
                      borderRadius: "5px",
                      padding: "0",
                      margin: "0",
                      fontWeight: "700",
                    },
                  }}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  disableRestoreFocus
                >
                  <Typography
                    sx={{
                      p: 1,
                      whiteSpace: "nowrap",
                      fontSize: "15px",
                      textTransform: "uppercase",
                      fontWeight: "500",
                    }}
                  >
                    {popoverContent}{" "}
                  </Typography>
                </Popover>
              </Col>
              <Col xs={6} sm={4} md={3} lg={3}>
                <FontAwesomeIcon
                  icon="fa-brands fa-wordpress"
                  className="techIcon"
                  id="wordPress_Icon"
                  aria-owns={open ? "mouse-over-popover-html" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={(event) => handlePopoverOpen(event, "wordpress")}
                  onMouseLeave={handlePopoverClose}
                />
                <Popover
                  id="mouse-over-popover"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handlePopoverClose}
                  sx={{
                    pointerEvents: "none",
                    display: "flex",
                    ".MuiPopover-paper": {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "fit-content",
                      height: "22px",
                      border: "none",
                      boxShadow: "none",
                      color: "rgb(80, 76, 140)",
                      borderRadius: "5px",
                      padding: "0",
                      margin: "0",
                      fontWeight: "700",
                    },
                  }}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  disableRestoreFocus
                >
                  <Typography
                    sx={{
                      p: 1,
                      whiteSpace: "nowrap",
                      fontSize: "15px",
                      textTransform: "uppercase",
                      fontWeight: "500",
                    }}
                  >
                    {popoverContent}{" "}
                  </Typography>
                </Popover>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Col className="experiencePage_Footer_Col">
        <div className="experiencePage_Footer_Image">
          <div className="experiencePage_Footer_Content">
            <div className="experiencePage_Footer_Container">
              <div className="experiencePage_Footer_Container_Text">
                <StyledH2>Check out my résumé!</StyledH2>
                <div className="mt-4">
                  <a
                    href={"/"}
                    className="experiencePage_Footer_Link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get a copy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
}

export default ExperiencePage;
