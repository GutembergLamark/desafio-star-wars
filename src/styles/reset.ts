import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body, li, ul, p, a, form, input, label, div, span, button, header, main, section{
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
    } 

    ul {
	list-style: none;
}
`;
