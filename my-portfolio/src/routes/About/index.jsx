import { Box } from "@mui/material";
import { StyledH3, StyledCenterP } from "../../styles/styledComponents/styledTypography";
import thong from "../../pictures/thong.jpg";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BackpackIcon from "@mui/icons-material/Backpack";
import {
  AboutPageContainer,
  AboutPageTitle,
  AboutPageImage,
  AboutText,
  AboutPageSelfClaimContainer,
  AboutPageSubtitleContainer,
  AboutIconsContainer,
  AboutIconsBody,
} from "../../styles/styledComponents/styledHome";

function AboutPage({ aboutRef }) {
  return (
    <AboutPageContainer ref={aboutRef}>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          color: "black",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <div>
          <AboutPageTitle>Get to know me</AboutPageTitle>
        </div>
        <div className="mt-3">
          <AboutPageImage src={thong} alt="Thong Ho" />
        </div>
        <div className="my-4">
          <AboutText>
            Hey! My name is <strong className="strongText">Thong</strong> and I'm a web developer
            with a passion for creating beautiful, intuitive and highly functional websites. I've
            graduated as a{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.noroff.no/studier/fagskole/frontend-utvikling"
            >
              front end developer
            </a>{" "}
            from the school of technology –{" "}
            <a target="_blank" rel="noopener noreferrer" href="https://www.noroff.no/index.php">
              Noroff
            </a>
            . I'm a fast learner and I'm always looking for new challenges. I'm currently looking
            for a job as a web developer.
          </AboutText>
          <AboutText className="mt-3 mb-3">
            When I'm not coding, you'll find me building muscles, petting cats, or traveling.
          </AboutText>
        </div>
        <AboutPageSelfClaimContainer>
          <AboutPageSubtitleContainer>
            <StyledH3>Self Proclamations</StyledH3>
          </AboutPageSubtitleContainer>
          <AboutIconsContainer>
            <AboutIconsBody>
              <KeyboardIcon sx={{ fontSize: "40px", color: "#555", marginBottom: "5px" }} />
              <StyledCenterP>Web Developer</StyledCenterP>
            </AboutIconsBody>
            <AboutIconsBody>
              <DesignServicesIcon sx={{ fontSize: "40px", color: "#555", marginBottom: "5px" }} />
              <StyledCenterP>Web Designer</StyledCenterP>
            </AboutIconsBody>
            <AboutIconsBody>
              <BackpackIcon sx={{ fontSize: "40px", color: "#555", marginBottom: "5px" }} />
              <StyledCenterP>Traveler</StyledCenterP>
            </AboutIconsBody>
          </AboutIconsContainer>
        </AboutPageSelfClaimContainer>
      </Box>
    </AboutPageContainer>
  );
}

export default AboutPage;
