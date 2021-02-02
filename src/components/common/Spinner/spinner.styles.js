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
    xsmall: css`
        width: 14px;
        height: 14px;
    `,
    small: css`
        width: 24px;
        height: 24px;
    `,
    medium: css`
        width: 32px;
        height: 32px;
    `,
    large: css`
        width: 40px;
        height: 40px;
    `,
};

export const StyledSpinner = styled.div`
    display: flex;
    user-select: none;
    pointer-events: none;
    filter: drop-shadow(0 3px 4px ${props => props.theme.colors[props.color]}50);
    ${props => sizes[props.size]};
`;

export const StyledSpinnerSVG = styled.svg`
    position: relative;
    stroke: ${ props => props.theme.colors[props.color] };
    stroke-width: 6px;
    stroke-dasharray: 50px;
    transform-origin: center center;
    animation: ${rotateCounterClockwise} .9s linear infinite;
`;
export const StyledCircle = styled.circle`
    position: relative;
`;