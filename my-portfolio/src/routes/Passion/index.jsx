import * as React from "react";
import { Row, Col } from "react-bootstrap";
import { StyledH2, StyledH3, StyledP } from "../../styles/styledComponents/styledTypography";
import "../../styles/homePage.css";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";

function PassionPage({ passionRef }) {
  return (
    <div ref={passionRef} className="passionPage_Container">
      <Row className="passionPage_Row m-0">
        <Col className="mt-5 d-flex flex-column align-items-center justify-content-start">
          <div>
            <StyledH2 className=" mb-1 passionPage_Title">My passion</StyledH2>
          </div>
          <div className="d-flex flex-column">
            <div className="mt-4 passionPage_IconContainer">
              <LaptopMacIcon
                sx={{ fontSize: "60px", color: "white" }}
                className="passionPage_IconSpin"
              />
            </div>
            <div>
              <StyledH3 className="mt-3 passionPage_Subtitle">Design</StyledH3>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default PassionPage;
