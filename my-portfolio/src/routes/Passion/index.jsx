import * as React from "react";
import { Row, Col } from "react-bootstrap";
import {
  StyledH2,
  StyledH3,
  StyledP,
  StyledH1,
} from "../../styles/styledComponents/styledTypography";
import "../../styles/homePage.css";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import DataObjectIcon from "@mui/icons-material/DataObject";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

function PassionPage({ passionRef }) {
  return (
    <div ref={passionRef} className="passionPage_Container">
      <Row className="passionPage_Row m-0">
        <Col className="d-flex flex-column align-items-center justify-content-start m-0 p-0">
          <div className="mb-1">
            <StyledH1 className=" mb-1 passionPage_Title">My passion</StyledH1>
          </div>
          <div className="d-flex flex-column align-items-center">
            <span className="d-flex flex-column align-items-center">
              <div className="mt-4 passionPage_IconContainer">
                <LaptopMacIcon
                  sx={{ fontSize: "60px", color: "white" }}
                  className="passionPage_IconSpin"
                />
              </div>
              <div className="d-flex flex-column mb-3">
                <StyledH2 className="mt-3 passionPage_Subtitle">Design</StyledH2>
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
              <div className="d-flex flex-column mb-3">
                <StyledH2 className="mt-3 passionPage_Subtitle">Development</StyledH2>
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
                <StyledH2 className="mt-3 passionPage_Subtitle">Involvement</StyledH2>
                <StyledP className="mt-3 passionPage_Text">
                  I am passionate about learning new things and I am always looking for new ways to
                  improve my skills. I am also passionate about helping others and I am always open
                  to new opportunities to get involved in my community.
                </StyledP>
              </div>
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default PassionPage;
