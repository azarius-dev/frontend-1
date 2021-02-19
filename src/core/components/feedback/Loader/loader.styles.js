import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
    0% {
        transform: rotate(0deg) scale(1.2);
    }
    50% {
        transform: rotate(180deg) scale(0.8);
    }
    100% {
        transform: rotate(360deg) scale(1.2);
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

export const StyledLoader = styled.div`
    stroke: ${ props => props.theme.colors.primary };
    stroke-width: 6px;
    animation: ${rotate} 1.4s cubic-bezier(0.42, 0.09, 0.13, 1.57) infinite;
`;