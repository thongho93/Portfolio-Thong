import styled, { keyframes } from "styled-components";
import backgroundMain from "../../pictures/backgroundMain.jpg";
import backgroundExperiencePage from "../../pictures/backgroundExperiencePage.jpg";
import { StyledH1, StyledH2, StyledH3, StyledP } from "./styledTypography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BackgroundWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const BlurredBackground = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${backgroundMain}) no-repeat center center fixed;
  background-size: cover;
  filter: blur(6px);
  z-index: 0;
`;

export const DarkOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// --- HOME PAGE ---
export const StyledTextBox = styled.div`
  padding: 2rem 3rem;
  border-radius: 16px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1.5rem;
  }
`;
export const HomePageTitle = styled(StyledH1)`
  margin-bottom: 20px;
  color: white;
  font-size: clamp(2rem, 8vw, 5rem);
`;

export const HomePageSubtitle = styled(StyledH3)`
  color: white;
  font-family: "Roboto Slab", Courier, monospace;
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  margin-top: 5px;
`;
const bounce = keyframes`
0%, 100% {
  transform: translateY(0);
}
50% {
  transform: translateY(-6px);
}
`;
export const ArrowButton = styled.button`
  z-index: 1;
  position: absolute;
  bottom: 125px;
  left: 50%;
  transform: translateX(-50%);
  background: none;
  border: none;

  &:hover svg {
    animation: ${bounce} 0.6s ease-in-out;
  }

  @media (max-width: 768px) {
    bottom: 80px;
  }

  @media (max-width: 480px) {
    bottom: 60px;
  }
`;

// --- EXPERIENCE PAGE ---

// --- WORK PAGE ---
export const WorkContainer = styled.div`
  min-height: 100vh;
  padding: 75px 0;
  background-color: #f0f0f0;
`;

export const WorkRow = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 100px;

  @media screen and (max-width: 999px) {
    padding: 0 75px;
  }
  @media screen and (max-width: 850px) {
    padding: 0 60px;
  }
  @media screen and (max-width: 575px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 375px) {
    padding: 0 20px;
  }
`;

export const WorkCard = styled.div`
  margin: 0 15px;
  border: 0.5px solid #ddd;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 0;
  cursor: pointer;
`;

export const WorkCardImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 0;
  vertical-align: middle;
  transition: opacity 0.3s ease;
`;

export const CardImgContainer = styled.div`
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0);
    transition: background 0.3s ease;
  }

  &:hover ${WorkCardImage} {
    opacity: 0.35;
  }
  &:hover::before {
    background: rgb(0, 0, 0);
  }
`;

export const HoverIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${CardImgContainer}:hover & {
    opacity: 1;
  }
`;

export const ProjectTitle = styled.div`
  position: absolute;
  bottom: -100%;
  left: 0;
  right: 0;
  background: rgb(39, 35, 112);
  color: white;
  padding: 10px;
  text-align: center;
  transition: bottom 0.3s ease;

  ${CardImgContainer}:hover & {
    bottom: 0;
  }
`;

// --- CONTACT PAGE ---
export const ContactContainer = styled.div`
  padding: 75px 0;
  background-color: #ffffff;
`;

export const ContactRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const ContactIcon = styled.div`
  font-size: 60px;
  color: rgb(39, 35, 112);
`;

export const ContactTitle = styled.h1`
  font-size: 35px;
  margin-top: 27px;
`;

// --- FOOTER ---
export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  background-color: #222;
  padding: 50px 0 0 0;
`;

export const FooterText = styled.div`
  color: rgba(255, 255, 255, 1);
  display: flex;
  font-family: "Lato", Courier, monospace;
  margin-top: 45px;
`;

export const FooterCol = styled.div`
  margin: 0 3.5px;
`;
