import styled, { css } from 'styled-components';

export const StyledTreeView = styled.div`
    position: relative;
`;

export const StyledTreeItem = styled.div`
    position: relative;
    display: flex;
    cursor: pointer;
    padding: 0 20px;
    transition: .1s ease all;
    user-select: none;

    ${ props => props.hovered ? css`
        background-color: ${ props => props.theme.colors.off };
    ` : '' }

    ${ props => props.selected ? css`
        background-color: ${ props => props.theme.colors.primaryActive };
    ` : '' }
`;

export const StyledTreeItemContent = styled.div`
    flex-grow: 1;
    min-height: 30px;
    display: flex;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const StyledTreeList = styled.div`
    position: relative;
`;

export const StyledIcon = styled.div`
    width: 16px;
    height: 100%;
    display: inline-flex;
    align-items: center;

    svg {
        width: 8px;
        height: 8px;
    }
`;