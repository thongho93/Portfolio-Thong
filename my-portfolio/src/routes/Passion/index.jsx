import * as React from "react";
import { Row, Col } from "react-bootstrap";
import { StyledH2, StyledH3, StyledP } from "../../styles/styledComponents/styledTypography";
import "../../styles/homePage.css";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import DataObjectIcon from "@mui/icons-material/DataObject";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";

function PassionPage({ passionRef, experienceRef }) {
  const handleArrowClickExperience = () => {
    experienceRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={passionRef} className="passionPage_Container pb-5">
      <Row className="passionPage_Row m-0 pb-5">
        <Col className="mt-5 d-flex flex-column align-items-center justify-content-start">
          <div>
            <StyledH2 className=" mb-1 passionPage_Title">My passion</StyledH2>
          </div>
          <div className="d-flex flex-column align-items-center">
            <span className="d-flex flex-column align-items-center">
              <div className="mt-4 passionPage_IconContainer">
                <LaptopMacIcon
                  sx={{ fontSize: "60px", color: "white" }}
                  className="passionPage_IconSpin"
                />
              </div>
              <div className="d-flex flex-column">
                <StyledH3 className="mt-3 passionPage_Subtitle">Design</StyledH3>
                <StyledP className="mt-3 passionPage_Text">
                  Web designing is the process of planning, conceptualizing, and implementing the
                  plan for designing a website in a way that is functional and offers a good user
                  experience. I strive to design interfaces and experiences that people can enjoy on
                  all digital mediums.
                </StyledP>
              </div>
            </span>
            <span className="d-flex flex-column align-items-center">
              <div className="mt-4 passionPage_IconContainer">
                <DataObjectIcon
                  sx={{ fontSize: "60px", color: "white" }}
                  className="passionPage_IconSpin"
                />
              </div>
              <div className="d-flex flex-column">
                <StyledH3 className="mt-3 passionPage_Subtitle">Development</StyledH3>
                <StyledP className="mt-3 passionPage_Text">
                  As I grow as a developer, I hope to write clean, readable code that can be used by
                  others and leveraged to create beautiful software.
                </StyledP>
              </div>
            </span>
            <span className="d-flex flex-column align-items-center">
              <div className="mt-4 passionPage_IconContainer">
                <LightbulbIcon
                  sx={{ fontSize: "60px", color: "white" }}
                  className="passionPage_IconSpin"
                />
              </div>
              <div className="d-flex flex-column">
                <StyledH3 className="mt-3 passionPage_Subtitle">Creativity</StyledH3>
                <StyledP className="mt-3 passionPage_Text">
                  I love to create and I love to learn. I am always looking for new challenges and
                  opportunities to grow as a developer.
                </StyledP>
              </div>
            </span>
          </div>
        </Col>
      </Row>
      <IconButton
        onClick={handleArrowClickExperience}
        style={{
          zIndex: 1,
          marginBottom: "100px",
          marginTop: "20px",
        }}
      >
        <KeyboardArrowDownIcon
          sx={{
            fontSize: "2.4rem",
            color: "black",
            "&:hover": {
              color: "lightgrey",
            },
          }}
        />
      </IconButton>
    </div>
  );
}

export default PassionPage;
