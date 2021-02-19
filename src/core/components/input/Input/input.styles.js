import styled, { css } from '@common/input/Input/styled-components';

const sizes = {
    small: css`
        height: 24px;
        padding-left: 6px;
        padding-right: 6px;
        font-size: 12px;

        svg {
            height: 16px;
            width: 16px;
        }
    `,
    normal: css`
        height: 32px;
        padding-left: 12px;
        padding-right: 12px;
        font-size: 14px;
        font-weight: 600;

        svg {
            height: 18px;
            width: 18px;
        }
    `,
};

const adornmentTypes = {
    leftOut: css`
        font-weight: 600;
        padding-left: 0;
    `,
    leftIn: css`
        position: absolute;
        left: 1px;
        color: ${ props => props.theme.inputText };
        opacity: .6;
    `,
    rightIn: css`
        position: absolute;
        right: 1px;
        color: ${ props => props.theme.inputText };
        opacity: .6;
    `,
    rightOut: css`
        padding-right: 0;
    `
}

export const StyledInputContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    flex-grow: 1;
`;

export const StyledInput = styled.input`
    box-sizing: border-box;
    flex-grow: 1;
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: ${ props => props.theme.colors.text };
    background-color: ${ props => props.theme.colors.background };
    border: 2px solid ${ props => props.theme.colors.text };
    border-radius: 10px;
    outline: none;
    transition: .1s ease border, background-color;
    width: inherit;

    &[type=number]::-webkit-inner-spin-button,
    &[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none; 
        margin: 0; 
    }

    &[type=number] {
        -moz-appearance: textfield;
    }

    &:hover {
        border: 2px solid ${ props => props.theme.colors.primary };
    }

    &:focus {
        border: 2px solid ${ props => props.theme.colors.primary };
    }

    ${ props => sizes[props.size] }
`;

export const StyledAdornment = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    pointer-events: none;
    line-height: 1;

    ${ props => sizes[props.size] }
    ${ props => adornmentTypes[props.type] }
`;