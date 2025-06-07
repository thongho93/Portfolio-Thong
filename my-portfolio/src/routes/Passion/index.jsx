import { Col } from "react-bootstrap";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import DataObjectIcon from "@mui/icons-material/DataObject";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import {
  PassionContainer,
  PassionRow,
  PassionTitle,
  PassionSubtitle,
  PassionCard,
  PassionTextBlock,
  PassionIconContainer,
  SpinningIcon,
  PassionGrid,
} from "../../styles/styledComponents/styledPassion";

function PassionPage({ passionRef }) {
  return (
    <PassionContainer ref={passionRef}>
      <PassionRow>
        <Col className="d-flex flex-column align-items-center">
          <div className="mb-1">
            <PassionTitle>My passion</PassionTitle>
          </div>
          <PassionGrid>
            <div className="d-flex flex-column align-items-center">
              <PassionCard>
                <PassionIconContainer>
                  <SpinningIcon>
                    <LaptopMacIcon sx={{ fontSize: "48px", color: "white" }} />
                  </SpinningIcon>
                </PassionIconContainer>
                <PassionSubtitle>Design</PassionSubtitle>
                <PassionTextBlock>
                  Web designing is the process of planning, conceptualizing, and implementing the
                  plan for designing a website in a way that is functional and offers a good user
                  experience. I strive to design interfaces and experiences that people can enjoy on
                  all digital mediums.
                </PassionTextBlock>
              </PassionCard>
            </div>
            <div className="d-flex flex-column align-items-center">
              <PassionCard>
                <PassionIconContainer>
                  <SpinningIcon>
                    <DataObjectIcon sx={{ fontSize: "48px", color: "white" }} />
                  </SpinningIcon>
                </PassionIconContainer>
                <PassionSubtitle>Development</PassionSubtitle>
                <PassionTextBlock>
                  As I grow as a developer, I hope to write clean, readable code that can be used by
                  others and leveraged to create beautiful software.
                </PassionTextBlock>
              </PassionCard>
            </div>
            <div className="d-flex flex-column align-items-center">
              <PassionCard>
                <PassionIconContainer>
                  <SpinningIcon>
                    <LightbulbIcon sx={{ fontSize: "48px", color: "white" }} />
                  </SpinningIcon>
                </PassionIconContainer>
                <PassionSubtitle>Involvement</PassionSubtitle>
                <PassionTextBlock>
                  I am passionate about learning new things and I am always looking for new ways to
                  improve my skills. I am also passionate about helping others and I am always open
                  to new opportunities to get involved in my community.
                </PassionTextBlock>
              </PassionCard>
            </div>
          </PassionGrid>
        </Col>
      </PassionRow>
    </PassionContainer>
  );
}

export default PassionPage;
