import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const StyledMainTypography = styled.div`
  font-family: "Lato", sans-serif;
  text-decoration: none;
  letter-spacing: 0.05rem;
  ::selection {
    background-color: #ffb8b1;
  }
`;

export const StyledSecondaryTypography = styled.p`
  font-family: "Roboto Slab", sans-serif;
  text-decoration: none;
  letter-spacing: 0.05rem;
  ::selection {
    background-color: #ffb8b1;
  }
`;

export const StyledH1 = styled.h1`
  font-family: "Lato", sans-serif;
  text-decoration: none;
  letter-spacing: 0.15rem;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  ::selection {
    background-color: #ffb8b1;
  }
`;

const responsiveMainH1 = (props) => css`
  @media screen and (max-width: 375px) {
    font-size: 3.7rem;
  }
`;
export const StyledMainH1 = styled(StyledH1)`
  font-size: 4rem;
  color: #ffff;
  ::selection {
    background-color: #ffb8b1;
  }
  ${responsiveMainH1}
`;

export const StyledH2 = styled.h2`
  font-family: "Lato", sans-serif;
  text-decoration: none;
  letter-spacing: 0.15rem;
  font-weight: 500;
  text-transform: uppercase;
  ::selection {
    background-color: #ffb8b1;
  }
`;

export const StyledH3 = styled.h3`
  font-family: "Lato", sans-serif;
  text-decoration: none;
  letter-spacing: 0.15rem;
  font-weight: 500;
  font-size: 19px;
  text-transform: uppercase;
  ::selection {
    background-color: #ffb8b1;
  }
`;

const textStyles = css`
  /* Removed margin and max-width from here */
  font-family: "Roboto Slab", sans-serif;
  font-weight: 400;
  font-size: 17px;
  text-decoration: none;
  letter-spacing: 0.045rem;
  text-align: justify;
  line-height: 1.9;
  color: #000000;
  ::selection {
    background-color: #ffb8b1;
  }
`;

const responsiveText = (props) => css`
  @media screen and (max-width: 375px) {
    margin: 0;
  }
`;

export const StyledP = styled.p`
  ${textStyles}
  ${responsiveText}
  margin: 0 20px;
  max-width: 650px;
`;

export const StyledUL = styled.ul`
  ${textStyles}
  margin: 0 10px;
  max-width: 650px;
`;

export const StyledLI = styled.li`
  ${textStyles}
  margin: 0 3px;
  max-width: 650px;
`;
