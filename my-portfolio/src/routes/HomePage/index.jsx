import { Box } from "@mui/material";
import {
  BackgroundImage,
  HomePageTitle,
  HomePageSubtitle,
  ArrowButton,
} from "../../styles/styledComponents/styledHome";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";

function HomePage({ aboutRef }) {
  const handleArrowClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BackgroundImage>
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
        <HomePageTitle>Hi, I'm Thong</HomePageTitle>
        <div>
          <HomePageSubtitle>Web Developer & Designer</HomePageSubtitle>
        </div>
        <ArrowButton
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
        </ArrowButton>
      </Box>
    </BackgroundImage>
  );
}

export default HomePage;
