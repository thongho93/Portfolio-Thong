import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const StyledH1 = styled.h1`
  font-family: "Lato", sans-serif;
  text-decoration: none;
  letter-spacing: 0.15rem;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
`;

export const StyledH2 = styled.h2`
  font-family: "Lato", sans-serif;
  text-decoration: none;
  letter-spacing: 0.15rem;
  font-weight: 500;
  text-transform: uppercase;
`;

export const StyledH3 = styled.h3`
  font-family: "Lato", sans-serif;
  text-decoration: none;
  letter-spacing: 0.15rem;
  font-weight: 500;
  text-transform: uppercase;
  ::selection {
    background-color: #ffb8b1;
  }
`;

export const StyledP = styled.p`
  font-family: "Roboto Slab", sans-serif;
  font-weight: 400;
  text-decoration: none;
  letter-spacing: 0.045rem;
  line-height: 1.7;
  color: #000000;
`;

export const StyledCenterP = styled(StyledP)`
  text-align: center;
  margin: 0;
`;

export const StyledUL = styled.ul`
  font-family: "Roboto Slab", sans-serif;
  font-weight: 400;
  text-decoration: none;
  letter-spacing: 0.045rem;
  line-height: 1.7;
  color: #000000;
  margin: 0 10px;
  max-width: 650px;
`;

export const StyledLI = styled.li`
  font-family: "Roboto Slab", sans-serif;
  font-weight: 400;
  text-decoration: none;
  letter-spacing: 0.045rem;
  line-height: 1.7;
  color: #000000;
  margin: 0 3px;
  max-width: 650px;
`;
