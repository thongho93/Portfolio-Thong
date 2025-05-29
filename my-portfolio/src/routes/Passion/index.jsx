import { Col } from "react-bootstrap";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import DataObjectIcon from "@mui/icons-material/DataObject";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import {
  PassionContainer,
  PassionRow,
  PassionTitle,
  PassionSubtitle,
  PassionTextBlock,
  PassionIconContainer,
  SpinningIcon,
} from "../../styles/styledComponents/styledHome";

function PassionPage({ passionRef }) {
  return (
    <PassionContainer ref={passionRef}>
      <PassionRow>
        <Col className="d-flex flex-column align-items-center justify-content-start m-0 p-0">
          <div className="mb-1">
            <PassionTitle>My passion</PassionTitle>
          </div>
          <div className="d-flex flex-column align-items-center">
            <span className="d-flex flex-column align-items-center">
              <PassionIconContainer>
                <SpinningIcon>
                  <LaptopMacIcon
                    sx={{ fontSize: "60px", color: "white" }}
                    className="passionPage_IconSpin"
                  />
                </SpinningIcon>
              </PassionIconContainer>
              <div className="d-flex flex-column mb-3">
                <PassionSubtitle>Design</PassionSubtitle>
                <PassionTextBlock>
                  Web designing is the process of planning, conceptualizing, and implementing the
                  plan for designing a website in a way that is functional and offers a good user
                  experience. I strive to design interfaces and experiences that people can enjoy on
                  all digital mediums.
                </PassionTextBlock>
              </div>
            </span>
            <span className="d-flex flex-column align-items-center">
              <PassionIconContainer>
                <SpinningIcon>
                  <DataObjectIcon
                    sx={{ fontSize: "60px", color: "white" }}
                    className="passionPage_IconSpin"
                  />
                </SpinningIcon>
              </PassionIconContainer>
              <div className="d-flex flex-column mb-3">
                <PassionSubtitle>Development</PassionSubtitle>
                <PassionTextBlock>
                  As I grow as a developer, I hope to write clean, readable code that can be used by
                  others and leveraged to create beautiful software.
                </PassionTextBlock>
              </div>
            </span>
            <span className="d-flex flex-column align-items-center">
              <PassionIconContainer>
                <SpinningIcon>
                  <LightbulbIcon
                    sx={{ fontSize: "60px", color: "white" }}
                    className="passionPage_IconSpin"
                  />
                </SpinningIcon>
              </PassionIconContainer>
              <div className="d-flex flex-column">
                <PassionSubtitle>Involvement</PassionSubtitle>
                <PassionTextBlock>
                  I am passionate about learning new things and I am always looking for new ways to
                  improve my skills. I am also passionate about helping others and I am always open
                  to new opportunities to get involved in my community.
                </PassionTextBlock>
              </div>
            </span>
          </div>
        </Col>
      </PassionRow>
    </PassionContainer>
  );
}

export default PassionPage;
