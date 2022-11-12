import styled from "styled-components";

interface IClickDropdown {
  click: boolean;
}

export const TopHeader = styled.header<IClickDropdown>`
  background-color: black;

  padding: 5px 25px;

  .content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;

    max-width: 1150px;
  }

  img {
    width: 100px;
  }

  .dropdown {
    position: relative;

    display: inline-block;

    z-index: 100;

    svg {
      width: 30px;
      height: 30px;

      color: white;
    }

    .dropdown__container-button {
      display: none;
      flex-direction: column;
      gap: 0.9375rem;

      position: absolute;
      right: 0;

      background-color: #f9f9f9;

      min-width: 150px;

      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

      padding: 12px 16px;
      margin: 0;

      border-radius: 5px;

      z-index: 1;

      a {
        color: white;
        background-color: black;

        padding: 0.625rem;

        border-radius: 5px;

        font-size: .75rem
      }
    }

    .dropdown__container-button {
      display: ${(props) => (props.click ? "flex" : "none")};
    }
  }
`;
