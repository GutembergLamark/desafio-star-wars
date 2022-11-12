import styled, { keyframes } from "styled-components";

const borderRotate = keyframes`
    0% {
       transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 1rem;

  width: max-content;
  min-width: 210px;

  padding: 2rem 1rem;

  border-radius: 1rem;
  border: 3px solid transparent;

  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);

  background-color: #333;

  position: relative;

  overflow: hidden;

  z-index: 1;

  h1 {
    font-size: 1rem;
  }

  &::before {
    content: "";
    background-image: conic-gradient(#ffe919 20deg, transparent 120deg);

    width: 200%;
    height: 200%;

    position: absolute;

    z-index: -10;

    animation: ${borderRotate} 3s linear infinite;
  }

  &::after {
    content: "";
    width: 96%;
    height: 96%;

    background-color: #222;

    z-index: -1;

    position: absolute;

    border-radius: 0.625rem;

    box-shadow: inset 20px 20px 20px #0000008c;
  }

  h1 {
    color: white;
  }

  a {
    background: none;
    color: white;

    font-weight: bold;

    font-size: 10px;

    cursor: pointer;

    transition: all 0.5s ease-in-out;
  }

  a:hover {
    font-size: 11px;
    transition: all 0.5s ease-in-out;
  }
`;
