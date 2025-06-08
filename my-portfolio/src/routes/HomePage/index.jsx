import { Box } from "@mui/material";
import {
  BackgroundWrapper,
  BlurredBackground,
  DarkOverlay,
  HeroContent,
  StyledTextBox,
  HomePageTitle,
  HomePageSubtitle,
  ArrowButton,
} from "../../styles/styledComponents/styledHome";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion } from "framer-motion";

function HomePage({ aboutRef }) {
  const handleArrowClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BackgroundWrapper>
      <BlurredBackground />
      <DarkOverlay />
      <HeroContent>
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
          <StyledTextBox>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <HomePageTitle>Hi, I'm Thong</HomePageTitle>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <HomePageSubtitle>Web Developer & Designer</HomePageSubtitle>
            </motion.div>
          </StyledTextBox>
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
      </HeroContent>
    </BackgroundWrapper>
  );
}

export default HomePage;
