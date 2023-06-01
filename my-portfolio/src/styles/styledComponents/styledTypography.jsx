import styled from "@emotion/styled";

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

export const StyledMainH1 = styled(StyledH1)`
  font-size: 4rem;
  color: #ffff;
  ::selection {
    background-color: #ffb8b1;
  }
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

export const StyledP = styled.p`
  font-family: "Roboto Slab", sans-serif;
  font-weight: 400;
  text-decoration: none;
  letter-spacing: 0.05rem;
  font-size: 17px;
  color: #000000;
  max-width: 650px;
  line-height: 1.9;
  ::selection {
    background-color: #ffb8b1;
  }
`;
