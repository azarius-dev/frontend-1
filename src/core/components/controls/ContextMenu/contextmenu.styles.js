import styled, { css } from 'styled-components';

export const StyledContextMenu = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 230px;
    padding: 10px 6px;
    border-radius: 5px;
    gap: 8px;
    background-color: ${ props => props.theme.colors.background };
    box-shadow: ${ props => props.theme.shadows.textLarge };
    user-select: none;
    overflow: hidden;
    z-index: 2000;
`;

export const StyledMenuDivider = styled.div`
    height: 1px;
    background-color: ${ props => props.theme.colors.border };
`;

export const StyledMenuButton = styled.div`
    display: flex;
    align-items: center;
    padding: 0 10px;
    height: 32px;
    border-radius: 3px;
    box-sizing: border-box;
    font-size: 15px;
    font-weight: 500;
    gap: 10px;
    background-color: ${ props => props.theme.colors.background };
    color: ${ props => props.theme.colors.text };
    fill: ${ props => props.theme.colors.text };
    user-select: none;
    overflow: hidden;
    cursor: pointer;
    transition: .1s ease all;

    &:hover {
        background-color: ${ props => props.theme.colors.off };
    }
`;

export const StyledButtonIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 12px;
    width: 12px;

    svg {
        height: 12px;
        width: 12px;
    }
`;

export const StyledButtonLabel = styled.div`
    margin-right: auto;
    white-space: nowrap;
`;

export const StyledButtonInfo = styled.div`
    font-size: 10px;
    font-weight: 600;
    text-transform: capitalize;
    opacity: .4;
    color: ${ props => props.theme.colors.text };
`;