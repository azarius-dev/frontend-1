import styled, { css } from 'styled-components';

const positions = {
    'topLeft': css`
        grid-column-start: 1;
        grid-row-start: 1;
    `,
    'topCenter': css`
        grid-column-start: 2;
        grid-row-start: 1;
    `,
    'topRight': css`
        grid-column-start: 3;
        grid-row-start: 1;
    `,
    /*'bottomLeft': css`
        height: 26px;
    `,
    'bottomCenter': css`
        height: 26px;
    `,
    'bottomRight': css`
        height: 26px;
    `,*/
};

export const StyledSnackbarContainer = styled.div`
    /*display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);*/
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2100000;
    padding: 45px;
    gap: 10px;
    user-select: none;
    pointer-events: none;
`;

export const StyledSnackbar = styled.div`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.background};
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors[props.status]};
    box-shadow: ${props => props.theme.shadows[props.status + 'Small']};
    padding: 14px 20px;
    pointer-events: auto;
`;

export const StyledCloseAction = styled.div`
    position: absolute;
    display: flex;
    top: -9px;
    right: -9px;
`;