import styled, { css } from 'styled-components';

export const StyledNavigationButton = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 20px;
    opacity: .1;
    transition: .16s ease opacity;

    &:hover {
        opacity: .3;
    }

    ${ props => props.active ? css`
        opacity: 1!important;
    ` : '' }
`;

export const StyledButtonIcon = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    transform: rotate(-15deg);

    & svg {
        width: 32px;
        height: 32px;
    }
`;

export const StyledButtonIconMain = styled.div`
    position: absolute;
    z-index: 1;
    fill: ${ props => props.theme.colors.text };
    filter: drop-shadow(${ props => props.theme.shadows.textSmall });
`;

export const StyledButtonIconSub = styled.div`
    position: absolute;
    z-index: 0;
    margin-top: 4px;
    margin-left: -6px;
    fill: ${ props => props.theme.colors.primary };
    filter: drop-shadow(${ props => props.theme.shadows.primarySmall });
`;