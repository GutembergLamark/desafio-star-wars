import styled, { keyframes } from "styled-components";

const borderRotate = keyframes`
    0% {
       transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
`;

export const Character = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;

  max-width: 80%;

  padding: 50px;

  li {
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.75rem;

    width: max-content;
    min-width: 230px;

    padding: 2rem 1rem;

    border-radius: 1rem;
    border: 3px solid transparent;

    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);

    background-color: #333;

    position: relative;

    overflow: hidden;

    z-index: 1;

    h2 {
      font-size: 1rem;
    }

    span {
      font-style: italic;
      font-size: 0.625rem;
    }

    a {
      font-size: 0.625rem;
      color: white;

      cursor: pointer;

      transition: all 0.5s ease-in-out;
    }

    a:hover {
      text-decoration: underline;
      font-size: 10.5px;
      transition: all 0.5s ease-in-out;
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
  }
`;
