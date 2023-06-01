import * as React from "react";
import { Box } from "@mui/material";
import { StyledH3, StyledP, StyledH1 } from "../../styles/styledComponents/styledTypography";
import thong from "../../pictures/thong.jpg";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BackpackIcon from "@mui/icons-material/Backpack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";

function AboutPage({ aboutRef, passionRef }) {
  const handleArrowClickExperience = () => {
    passionRef.current.scrollIntoView({ behavior: "smooth" });
  };

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
        <div className="mt-5">
          <StyledH1 className=" mb-1 aboutPage_Title">Get to know me</StyledH1>
        </div>
        <div className="mt-3">
          <img src={thong} alt="Thong Ho" className="aboutPage_Image" />
        </div>
        <div>
          <StyledP className="mt-3 mb-3 aboutPage_Text">
            Hey! My name is <strong className="strongText">Thong</strong> and I'm a web developer
            with a passion for creating beautiful, intuitive and highly functional websites. I have
            just graduated as a{" "}
            <a target="_blank" rel="noopener noreferrer" href="https://www.noroff.no/index.php">
              front end developer
            </a>{" "}
            from the school of technology -{" "}
            <a target="_blank" rel="noopener noreferrer" href="https://www.noroff.no/index.php">
              Noroff
            </a>
            . I am a fast learner and I am always looking for new challenges. I am currently looking
            for a job as a web developer.
          </StyledP>
          <StyledP className="mt-3 mb-3 aboutPage_Text">
            When I'm not coding, you'll find me building muscles, petting cats, or traveling.
          </StyledP>
        </div>
        <div className=" aboutPage_SelfClaimContainer mb-5">
          <div className="mb-4 aboutPage_SubtitleContainer">
            <StyledH3 className="aboutPage_Subtitle">Self Proclamations</StyledH3>
          </div>
          <div className="d-flex flex-grow-1 justify-content-between">
            <div>
              <KeyboardIcon className="aboutPage_Icon" sx={{ fontSize: "40px", color: "#555" }} />
              <StyledP className=" aboutPage_Text">Web Developer</StyledP>
            </div>
            <div>
              <DesignServicesIcon
                className="aboutPage_Icon"
                sx={{ fontSize: "40px", color: "#555" }}
              />
              <StyledP className="aboutPage_Text">Web Designer</StyledP>
            </div>
            <div>
              <BackpackIcon className="aboutPage_Icon" sx={{ fontSize: "40px", color: "#555" }} />
              <StyledP className="aboutPage_Text">Traveler</StyledP>
            </div>
          </div>
        </div>
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
      </Box>
    </div>
  );
}

export default AboutPage;
