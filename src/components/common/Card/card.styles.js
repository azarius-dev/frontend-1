import styled, { css } from 'styled-components';

const statuses = {
    idle: css`
        box-shadow: ${ props => props.theme.shadows[props.color + 'Medium'] };
    `,
    active: css`
        box-shadow: ${ props => props.theme.shadows[props.color + 'Medium'] };
    `
}

export const StyledCard = styled.div`
    position: relative;
    box-sizing: border-box;
    display: flex;
    border-radius: 10px;
    ${ props => statuses[props.status] };
    flex-grow: 1;
`;

export const StyledBackground = styled.div`
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 10px;
    background-color: ${props => props.theme.colors[props.color]}0D;
    background-image: linear-gradient(120deg, ${props => props.theme.colors[props.color]}26 0%, ${props => props.theme.colors[props.color]}00 80%);
    backdrop-filter: blur(5px);
`;

export const StyledBorder = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid ${props => props.theme.colors[props.color]};
    border-radius: 10px;
`;

export const StyledActiveBorderSVG = styled.svg`
    position: absolute;
    z-index: 2;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    height: calc(100% + 2px);
    width: calc(100% + 2px);
    user-select: none;
    pointer-events: none;
    filter: drop-shadow(${props => props.theme.shadows[props.color + 'Small']});
`;

export const StyledActiveBorderSVGRect = styled.rect`
    fill: transparent;
    stroke: ${props => props.theme.colors[props.color]};
    stroke-width: 3px;
    stroke-linecap: round;
    rx: 10px;
`;

export const StyledContent = styled.div`
    position: relative;
    z-index: 3;
    flex-grow: 1;
`;