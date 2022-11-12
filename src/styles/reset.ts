import { createGlobalStyle } from "styled-components";

import Background from "../assets/star-wars-background.png";

export const GlobalStyle = createGlobalStyle`
    body, li, ul, p, a, form, input, label, div, span, button, header, main, section, figure{
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Jedi';
    }

    @font-face {
        font-family: 'Jedi';
        src: url(Starjedi.ttf) format('truetype');
    }
    
    body{
        width: 100%;
        height: 100vh; 

        background-image: url(${Background});
        background-size: cover;
        background-attachment: fixed;
    }

    ul, li {
	list-style: none;
}
`;
