import styled from "styled-components";
import { StyledH1 } from "./styledTypography";

export const AboutPageContainer = styled.div`
  min-height: 100vh;
  background-color: white;
  padding: 75px 0;
  @media screen and (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const AboutPageTitle = styled(StyledH1)`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  text-align: center;
  margin-bottom: 10px;
  color: #333;
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
