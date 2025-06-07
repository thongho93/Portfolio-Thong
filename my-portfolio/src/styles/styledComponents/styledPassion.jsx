import styled, { keyframes } from "styled-components";
import { StyledH1, StyledH2, StyledP } from "./styledTypography";

// --- PASSION PAGE ---
export const PassionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 50px;
  justify-items: center;
  align-items: start;
  width: 100%;
  margin-top: 40px;
`;
export const PassionContainer = styled.div`
  min-height: 100vh;
  background-color: #f0f0f0;
  padding: 50px;
  @media screen and (max-width: 480px) {
    padding: 30px 0;
  }
`;

export const PassionRow = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const PassionTitle = styled(StyledH1)`
  font-size: clamp(1.3rem, 4vw, 2rem);
`;

export const PassionSubtitle = styled(StyledH2)`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  display: flex;
  justify-content: center;
`;

export const PassionTextBlock = styled(StyledP)`
  max-width: clamp(260px, 90%, 440px);
  width: 100%;
  font-size: clamp(0.85rem, 1.8vw, 1.05rem);
  text-align: left;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 480px) {
    padding: 0 15px;
  }
`;

export const PassionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const PassionIconContainer = styled.div`
  background-color: rgb(39, 35, 112);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  line-height: 0;

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media screen and (min-width: 1024px) {
    width: 140px;
    height: 140px;
  }
`;

export const SpinningIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 1px;

  ${PassionIconContainer}:hover & {
    animation: ${spin} 0.43s linear;
  }
`;
