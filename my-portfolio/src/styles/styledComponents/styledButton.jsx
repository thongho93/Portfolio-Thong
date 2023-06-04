import styled from "styled-components";

export const BaseButton = styled.button`
  padding: 10px 20px;
  border: none;
  font-size: 20px;
  font-family: "Lato", sans-serif;
  letter-spacing: 0.04rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: transparent;
  color: #000;
  border: 2px solid #000;
  &:hover {
    background-color: rgb(39, 35, 112);
    color: #fff;
    transform: scale(1.2);
    transition: transform 0.2s;
    border: 2px solid rgb(39, 35, 112);
  }
`;
