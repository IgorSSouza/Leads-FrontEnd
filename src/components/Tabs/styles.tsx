import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  width: 50%;
  border: none;
  border-style: solid;
  border-width: 1px;
  border-color: #dfdfdf;
  background-color: white;
  padding: 10px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #f37704f6;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &.active::after {
    opacity: 1;
  }

  &.active {
    font-weight: 600;
  }
`;



