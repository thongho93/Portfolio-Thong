import styled from "styled-components";
import backgroundExperiencePage from "../../pictures/backgroundExperiencePage.jpg";
import { StyledH1, StyledH2, StyledH3, StyledP } from "./styledTypography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export const ExperienceTitle = styled(StyledH1)`
  font-size: clamp(1.3rem, 4vw, 2rem);
`;

export const ExperienceSubtitle = styled(StyledH2)`
  font-size: clamp(0.8rem, 2.3vw, 1.3rem);
  display: flex;
  justify-content: center;
`;

export const ExperienceTextBlock = styled(StyledP)`
  max-width: 660px;
  width: 100%;
  font-size: clamp(0.85rem, 1.8vw, 1rem);
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
