import * as React from "react";
import { Box } from "@mui/material";
import { StyledH3, StyledP, StyledH1 } from "../../styles/styledComponents/styledTypography";
import thong from "../../pictures/thong.jpg";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BackpackIcon from "@mui/icons-material/Backpack";

function AboutPage({ aboutRef }) {
  return (
    <div ref={aboutRef} className="aboutPage_Container">
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
          <StyledH1 className=" mb-1 aboutPage_Title">Get to know me</StyledH1>
        </div>
        <div className="mt-3 aboutPage_Image_Container">
          <img src={thong} alt="Thong Ho" className="aboutPage_Image" />
        </div>
        <div className="my-4">
          <StyledP className="aboutPage_Text">
            Hey! My name is <strong className="strongText">Thong</strong> and I'm a web developer
            with a passion for creating beautiful, intuitive and highly functional websites. I've
            just graduated as a{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.noroff.no/studier/fagskole/frontend-utvikling"
            >
              front end developer
            </a>{" "}
            from the school of technology -{" "}
            <a target="_blank" rel="noopener noreferrer" href="https://www.noroff.no/index.php">
              Noroff
            </a>
            . I'm a fast learner and I'm always looking for new challenges. I'm currently looking
            for a job as a web developer.
          </StyledP>
          <StyledP className="mt-3 mb-3 aboutPage_Text">
            When I'm not coding, you'll find me building muscles, petting cats, or traveling.
          </StyledP>
        </div>
        <div className=" aboutPage_SelfClaim_Container">
          <div className="mb-4 aboutPage_Subtitle_Container">
            <StyledH3 className="aboutPage_Subtitle">Self Proclamations</StyledH3>
          </div>
          <div className="aboutPage_SelfClaim_Icons_Container">
            <div className="aboutPage_SelfClaim_Icons_Body">
              <KeyboardIcon
                className="aboutPage_Icon"
                sx={{ fontSize: "40px", color: "#555", marginBottom: "5px" }}
              />
              <StyledP className=" aboutPage_Text">Web Developer</StyledP>
            </div>
            <div className="aboutPage_SelfClaim_Icons_Body">
              <DesignServicesIcon
                className="aboutPage_Icon"
                sx={{ fontSize: "40px", color: "#555", marginBottom: "5px" }}
              />
              <StyledP className="aboutPage_Text">Web Designer</StyledP>
            </div>
            <div className="aboutPage_SelfClaim_Icons_Body">
              <BackpackIcon
                className="aboutPage_Icon"
                sx={{ fontSize: "40px", color: "#555", marginBottom: "5px" }}
              />
              <StyledP className="aboutPage_Text">Traveler</StyledP>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default AboutPage;
