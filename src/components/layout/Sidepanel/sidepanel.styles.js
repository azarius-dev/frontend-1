import styled, { keyframes } from 'styled-components';

export const StyledBackdrop = styled.div`
    display: flex;
    position: fixed;
    z-index: 4000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${props => props.theme.colors.background}66;
    user-select: none;
    overflow: hidden;
`;

export const StyledSidepanelContainer = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 45px;
    user-select: none;
    overflow: hidden;
`;

export const StyledSidepanel = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: ${props => props.theme.colors.background};
    border: 3px solid ${props => props.theme.colors.secundary};
    border-radius: 10px;
`;