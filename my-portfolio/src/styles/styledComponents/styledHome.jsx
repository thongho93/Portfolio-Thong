import styled, { keyframes } from "styled-components";
import backgroundMain from "../../pictures/backgroundMain.jpg";
import backgroundExperiencePage from "../../pictures/backgroundExperiencePage.jpg";
import { StyledH1, StyledH2, StyledH3, StyledP } from "./styledTypography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${backgroundMain}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

// --- HOME PAGE ---
export const HomePageTitle = styled(StyledH1)`
  margin-bottom: 20px;
  color: white;
  font-size: 4rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

export const HomePageSubtitle = styled(StyledH3)`
  color: white;
  font-family: "Roboto Slab", Courier, monospace;
  font-size: 1.4rem;
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
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

  @media (max-width: 768px) {
    bottom: 80px;
  }

  @media (max-width: 480px) {
    bottom: 60px;
  }
`;

// --- ABOUT PAGE ---
export const AboutPageContainer = styled.div`
  min-height: 100vh;
  background-color: white;
  padding: 75px 100px;

  @media screen and (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const AboutPageTitle = styled(StyledH1)`
  font-size: 35px;
`;
export const AboutPageImage = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const AboutText = styled.div`
  max-width: 720px;
  a {
    text-decoration: none;
    color: rgb(49, 43, 155);
    font-weight: 500;

    &:hover {
      color: rgb(49, 43, 155);
      text-decoration: underline;
    }

    &::selection {
      background-color: #ffb8b1;
    }
  }

  .strongText::selection {
    background-color: #ffb8b1;
  }
`;
export const AboutPageSelfClaimContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px 60px;
  width: 650px;
  margin: 0 auto;

  @media screen and (max-width: 690px) {
    width: 100%;
    padding: 20px;
  }
`;
export const AboutPageSubtitleContainer = styled.div`
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #111111;
  display: flex;
  justify-content: center;
`;
export const AboutIconsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  @media screen and (max-width: 520px) {
    flex-direction: column;
  }
`;

export const AboutIconsBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 520px) {
    margin-bottom: 20px;
  }
`;

// --- PASSION PAGE ---
export const PassionContainer = styled.div`
  min-height: 100vh;
  background-color: #f0f0f0;
  padding: 75px 0;
`;

export const PassionRow = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const PassionTitle = styled(StyledH1)`
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
`;

export const PassionSubtitle = styled(StyledH2)`
  display: flex;
  justify-content: center;
`;

export const PassionTextBlock = styled(StyledP)`
  max-width: 720px;
  text-align: start;
  padding: 0 10px;

  @media screen and (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const PassionIconContainer = styled.div`
  background-color: rgb(39, 35, 112);
  border-radius: 50%;
  padding: 50px;
  margin: 25px;
  max-width: 170px;
  max-height: 250px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding: 35px;
    max-width: 130px;
    max-height: 200px;
  }

  @media screen and (max-width: 480px) {
    padding: 25px;
    max-width: 100px;
    max-height: 180px;
  }
`;

export const SpinningIcon = styled.div`
  display: inline-block;

  ${PassionIconContainer}:hover & {
    animation: ${spin} 0.43s linear;
  }
`;

// --- EXPERIENCE PAGE ---
export const ExperienceContainer = styled.div`
  min-height: 100vh;
  background-color: white;
  padding: 75px 0 0 0;
`;

export const ExperienceRow = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ExperienceCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 0 20px;
`;

export const TechIconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: 650px;
`;

export const TechIcon = styled(FontAwesomeIcon)`
  font-size: 75px;
  width: 45%;
  text-align: center;
  margin-bottom: 10px;
  color: ${(props) => props.iconcolor || "black"};

  @media screen and (max-width: 575px) {
    font-size: 55px;
  }
  @media screen and (max-width: 375px) {
    font-size: 40px;
  }
  @media screen and (max-width: 345px) {
    font-size: 30px;
  }
`;

export const ExperienceFooterImage = styled.div`
  background: url(${backgroundExperiencePage}) no-repeat center;
  background-attachment: fixed;
  width: 100%;
  height: 300px;
  background-size: 240% auto;

  @media screen and (max-width: 769px) {
    background-size: 320% auto;
  }
  @media screen and (max-width: 575px) {
    background-size: 580% auto;
  }
  @media screen and (max-width: 375px) {
    background-size: 680% auto;
  }
  @media screen and (max-width: 345px) {
    background-size: 780% auto;
  }
`;

export const ExperienceFooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
`;

export const ExperienceFooterText = styled.div`
  color: white;
  text-align: center;
  margin: 0 20px;
`;

export const ExperienceLink = styled.a`
  border: 1px solid white;
  padding: 12px 20px;
  font-family: "Roboto Slab", Courier, monospace;
  font-size: 21px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
`;

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
