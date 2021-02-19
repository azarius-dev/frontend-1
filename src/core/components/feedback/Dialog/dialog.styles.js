import styled from 'styled-components';

export const StyledDialogBackdrop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 4000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${props => props.theme.colors.text}66;
    user-select: none;
    overflow: hidden;
`;

export const StyledDialog = styled.div`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    width: 340px;
    padding: 50px 40px;
    border-radius: 5px;
    background-color: ${ props => props.theme.colors.background };
    box-shadow: ${ props => props.theme.shadows.textLarge };
    user-select: none;
    overflow: hidden;
    z-index: 3000;
`;

export const StyledCloseAction = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;
`;

export const StyledDialogIcon = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    border: 20px solid ${props => props.theme.colors[props.color]}1A;
    border-radius: 50%;
    background-clip: padding-box;
    background-color: ${props => props.theme.colors[props.color]};
    fill: ${ props => props.theme.colors.background };
    color: ${ props => props.theme.colors.background };

    svg {
        height: 42px;
        width: 42px;
    }

`;

export const StyledDialogMessage = styled.div`
    opacity: .4;
`;

export const StyledDialogActions = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;

export const StyledDialogDecoration = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    user-select: none;
`;

export const StyledDecorationIcon = styled.div`
    position: absolute;
    top: 30%;
    left: -70px;
    width: 140px;
    height: 140px;
    transform-origin: center center;
    transform: rotate(30deg);
    fill: ${props => props.theme.colors[props.color]}1A;

    svg {
        width: 140px;
        height: 140px;
    }
`;