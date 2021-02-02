import styled, { keyframes } from 'styled-components';

const moveIn = keyframes`
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0%);
    }
`;

export const StyledSidepanelContainer = styled.div`
    position: fixed;
    z-index: 10001;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    user-select: none;
    pointer-events: none;
    overflow: hidden;
`;

export const StyledBackdrop = styled.div`
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${props => props.theme.colors.background};
    opacity: .6;
    user-select: none;
    overflow: hidden;
    pointer-events: auto;
`;

export const StyledSidepanel = styled.div`
    box-sizing: border-box;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 45px;
    padding: 45px;
    width: 450px;
    box-shadow: ${props => props.theme.shadows[props.color + 'Medium']};
    background-color: ${props => props.theme.colors.background};
    border: 2px solid ${props => props.theme.colors[props.color]};
    border-radius: 10px;
    pointer-events: auto;
    animation: ${moveIn} .4s cubic-bezier(0.47, 0.13, 0.22, 1.26);
`;

export const StyledSidepanelHeader = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledCloseAction = styled.div`
    position: relative;
    margin-left: auto;
`;

export const StyledSidepanelBody = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const StyledSidepanelFooter = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;