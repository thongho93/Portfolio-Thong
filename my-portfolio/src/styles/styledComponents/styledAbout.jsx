import styled from "@emotion/styled";
import { StyledH1, StyledH3 } from "./styledTypography";

export const AboutPageContainer = styled.div`
  min-height: 100vh;
  background-color: white;
  padding: 20px 0 60px 0;
  @media screen and (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const AboutPageTitle = styled(StyledH1)`
  font-size: clamp(1.3rem, 4vw, 2rem);
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
  max-width: 660px;
  font-size: clamp(0.85rem, 1.8vw, 1rem);

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

export const SelfClaimTitle = styled(StyledH3)`
  font-size: clamp(1.1rem, 3vw, 1.6rem);
  text-align: center;
  margin-bottom: 10px;
  color: #333;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.05rem;
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
