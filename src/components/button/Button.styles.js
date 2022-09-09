import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) =>
    props.variant === "buy" ? "#111111" : "rgba(0, 0, 0, 0.596)"};
  color: white;
  border-radius: 10px;
  border-color: transparent;
  padding: 10px;
  gap: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  &:hover {
    background-color: black;
  }
`;

export const SimpleButton = styled.button`
  padding: 0.75rem;
  font-size: 1.5rem;
  background: transparent;
  border: transparent;
  color: white;

  &:hover {
    color: rgb(219, 218, 218);
    cursor: pointer;
  }
`;

export const LinkButton = styled.button`
  text-decoration: none;
  font-size: x-large;
  color: white;
  font-weight: 500;

  &:hover {
    color: rgb(202, 202, 202);
  }
`;

export const BuyButton = styled.button`
  color: white;
  background-color: black;
  border-radius: 10px;
  /* padding: 60px;
  padding-top: 0;
  padding-bottom: 0; */
  height: 55px;
  width: 200px;
  font-size: x-large;
  border: transparent;

  &:hover {
    background-color: rgb(14, 16, 25);
  }
`;
