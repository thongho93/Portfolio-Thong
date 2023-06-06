import styled from "styled-components";

export const BaseIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterIcon = styled(BaseIcon)`
  width: 50px;
  height: 50px;
  background-color: #333;
  font-size: 25px;
  outline: none;
  line-height: 50px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: #fff;
  &:hover {
    background-color: ${(props) => props.hoverColor};
    transform: scale(1.1);
    transition: transform 0.2s;
  }
`;
