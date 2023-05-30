import * as React from "react";
import { Box } from "@mui/material";
import { StyledH2 } from "../../styles/styledComponents/styledTypography";

function AboutPage({ aboutRef }) {
  return (
    <div ref={aboutRef} style={{ height: "100vh" }}>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          backgroundColor: "white",
          color: "black",
          justifyContent: "center",
        }}
      >
        <div className="mt-5">
          <StyledH2 className="mt-5 mb-2 aboutPage_Title">Get to know me</StyledH2>
        </div>
      </Box>
    </div>
  );
}

export default AboutPage;
