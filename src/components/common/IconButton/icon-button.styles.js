import styled, { css } from 'styled-components';

/* sizes */
const sizes = {
    medium: css`
        height: 34px;
        width: 34px;

        svg {
            height: 16px;
            width: 16px;
        }
    `,
    large: css`
        height: 50px;
        width: 50px;

        svg {
            height: 24px;
            width: 24px;
        }
    `,
};

/* edges */
const edges = {
    smooth: css`
        border-radius: 10px;
    `,
    rounded: css`
        border-radius: 100px;
    `
};

export const StyledIconButton = styled.button`
    position: relative;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: 0;
    border-radius: 0;
    outline: none;
    transition: .1s ease all;
    flex-shrink: 0;
    outline: none!important;
    color: ${ props => props.theme.colors.text };
    fill: ${ props => props.theme.colors.text };

    ${props => edges[props.edge] }
    ${props => sizes[props.size] }
`;

export const StyledBackground = styled.div`
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    ${props => edges[props.edge] }
    background-color: ${props => props.theme.colors[props.color]}0D;
    background-image: linear-gradient(120deg, ${props => props.theme.colors[props.color]}26 0%, ${props => props.theme.colors[props.color]}00 80%);
    backdrop-filter: blur(2px);
`;

export const StyledBorder = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 2px solid ${props => props.theme.colors[props.color]};
    ${props => edges[props.edge] }
`;

export const StyledIcon = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    width: 100%;
    height: 100%;
`;