import { createGlobalStyle } from 'styled-components';

/* global styling */
export const GlobalStyle = createGlobalStyle`
    body {
        position: relative;
        z-index: 0;
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100%;
        overflow: hidden;
        background-color: ${ props => props.theme.colors.background };
        color: ${ props => props.theme.colors.text };
        fill: ${ props => props.theme.colors.text };
        line-height: 1.15;
        font-family: 'Oswald', sans-serif;
        font-size: 1rem;
    }

    #root {
        position: relative;
        display: flex;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
`;

/* normalize browser styling */
export const NormalizerStyle = createGlobalStyle`
    #root {
        & hr {
            box-sizing: content-box;
            height: 0;
            overflow: visible;
        }
        & a {
            background-color: transparent;
        }
        & abbr[title] {
            border-bottom: none;
            text-decoration: underline;
            text-decoration: underline dotted;
        }
        & b,
        & strong {
            font-weight: bolder;
        }
        & button,
        & optgroup,
        & select,
        & textarea {
            font-family: inherit;
            line-height: 100%;
        }
    }
`;