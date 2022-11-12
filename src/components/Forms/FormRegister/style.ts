import { Link } from "react-router-dom";
import styled from "styled-components";

export const Form = styled.form`
  padding: 0.625rem;
  margin: 1.25rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;
`;

export const Label = styled.label`
  font-size: 1rem;
`;

export const Input = styled.input`
  border-radius: 15px;

  padding: 5px 1rem;

  outline: none;

  width: 100%;

  font-family: "Inter";

  &::placeholder{
    font-family: "Jedi"
  }
`;

export const Register = styled(Link)`
  text-decoration: none;

  font-size: 0.75rem;

  color: white;

  transition: all 0.5s ease-in-out;

  &:hover {
    font-size: 0.8rem;
    transition: all 0.5s ease-in-out;
  }
`;

export const Error = styled.div`
  position: relative;

  svg {
    color: #f10;

    position: absolute;

    right: 5px;
    top: 1px;
  }
  &:hover span {
    opacity: 1;
  }
  span {
    position: absolute;

    padding: 10px;

    border-radius: 0.25rem;

    width: fit-content;

    text-align: center;
    white-space: nowrap;
    font-size: 0.6rem;

    background-color: #f10;
    color: var(--gray-0);

    bottom: 35px;
    right: 2px;

    opacity: 0;

    transition: all 0.3s ease-in-out;
    &::before {
      content: "";

      border-style: solid;
      border-width: 10px 7px 0 7px;
      border-color: #f10 transparent;

      position: absolute;

      bottom: -8px;
      right: 8px;
    }
  }
`;
