import * as React from "react";
import { Box, Typography } from "@mui/material";
import "../../styles/homePage.css";
import {
  StyledMainH1,
  StyledSecondaryTypography,
} from "../../styles/styledComponents/styledTypography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";

function HomePage({ aboutRef }) {
  const handleArrowClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <div className="backgroundImage">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            flexDirection: "column",
            minHeight: "100vh",
            width: "100%",
          }}
        >
          <StyledMainH1 className="homePage_Title">Hi, I'm Thong</StyledMainH1>
          <div>
            <StyledSecondaryTypography className="homePage_Subtitle">
              Web Developer & Designer
            </StyledSecondaryTypography>
          </div>
          <IconButton
            onClick={handleArrowClick}
            style={{
              zIndex: 1,
              position: "absolute",
              bottom: "125px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <KeyboardArrowDownIcon
              sx={{
                fontSize: "2.4rem",
                color: "white",
                "&:hover": {
                  color: "lightgrey",
                },
              }}
            />
          </IconButton>
        </Box>
      </div>
    </div>
  );
}

export default HomePage;
