import styled, { css, keyframes } from 'styled-components';


const rotateCounterClockwise = keyframes`
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(-180deg);
    }
    100% {
        transform: rotate(-360deg);
    }
`;

/* sizes */
const sizes = {
    small: css`
        width: 30px;
        height: 30px;
    `,
    medium: css`
        width: 60px;
        height: 60px;
    `,
    large: css`
        width: 90px;
        height: 90px;
    `,
};

export const StyledSpinner = styled.div`
    display: flex;
    user-select: none;
    pointer-events: none;
    filter: drop-shadow(0 3px 4px ${props => props.theme.colors.primary}50);
    ${props => sizes[props.size]};
`;

export const StyledSpinnerSVG = styled.svg`
    position: absolute;
    stroke: ${ props => props.theme.colors.primary };
    stroke-width: 3px;
    transform-origin: center center;
    animation: ${rotateCounterClockwise} 1.4s linear infinite;
`;
export const StyledCircle = styled.div`
    position: absolute;
    stroke: ${ props => props.theme.colors.secundary };
    stroke-width: 3px;
    stroke-dasharray: 55px;
    transform-origin: center center;
`;