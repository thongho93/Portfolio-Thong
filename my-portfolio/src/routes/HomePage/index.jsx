import * as React from "react";
import { Container, Box, Typography } from "@mui/material";
import "../../styles/homePage.css";
import { StyledH1 } from "../../styles/styledComponents/styledTypography";

function HomePage() {
  return (
    <Container maxWidth="xl">
      <div className="backgroundImage">
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            flexDirection: "column",
          }}
        >
          <StyledH1 className="homePage_Title">Hi, I'm Thong</StyledH1>
          <div>
            <Typography className="homePage_Subtitle">Web Developer & Designer</Typography>
          </div>
        </Box>
      </div>
    </Container>
  );
}

export default HomePage;
