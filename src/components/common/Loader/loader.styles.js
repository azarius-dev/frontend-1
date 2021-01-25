import styled, { css, keyframes } from 'styled-components';


const scaleRotateClockwise = keyframes`
    0% {
        transform: rotate(0deg) scale(1.1);
    }
    50% {
        transform: rotate(180deg) scale(0.9);
    }
    100% {
        transform: rotate(360deg) scale(1.1);
    }
`;

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

export const StyledLoaderContainer = styled.div`
    display: flex;
    user-select: none;
    pointer-events: none;
    filter: drop-shadow(0 3px 4px ${props => props.theme.colors.primary}50);
    ${props => sizes[props.size]};
`;

export const StyledLoaderOuterSVG = styled.svg`
    position: absolute;
    stroke: ${ props => props.theme.colors.primary };
    stroke-width: 3px;
    transform-origin: center center;
    animation: ${scaleRotateClockwise} 1.4s cubic-bezier(0.42, 0.09, 0.13, 1.57) infinite;
`;
export const StyledLoaderInnerSVG = styled.svg`
    position: absolute;
    stroke: ${ props => props.theme.colors.secundary };
    stroke-width: 3px;
    stroke-dasharray: 55px;
    transform-origin: center center;
    animation: ${rotateCounterClockwise} 1.4s linear infinite;
`;