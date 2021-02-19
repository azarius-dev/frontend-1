import { createGlobalStyle } from 'styles/styled-components';

const FontFaces = createGlobalStyle`
    @font-face {
        font-family: 'bladerunner';
        font-style: normal;
        font-weight: 500;
        src: url('${BladeRunnerWOFF}') format('woff');
    }
`;

export default FontFaces;