import styled, { css } from '@common/controls/Button/styled-components';

/* variants */
const variants = {
    default: css`
        border: 2px solid ${ props => props.theme.colors[props.color] };
        border-radius: 10px;
        background-color: ${props => props.theme.colors[props.color]}1A;

        &:hover {
            background-color: ${props => props.theme.colors[props.color]}33;
        }
    `,
    offset: css`
        &:before {
            content: '';
            position: absolute;
            top: -4px;
            left: -4px;
            width: 100%;
            height: 100%;
            border: 2px solid ${ props => props.theme.colors.text };
            border-radius: 10px;
            user-select: none;
            pointer-events: none;
        }

        &:after {
            content: '';
            position: absolute;
            z-index: -1;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            border: 2px solid ${ props => props.theme.colors[props.color] };
            border-radius: 10px;
            box-shadow: ${ props => props.theme.shadows[props.color + 'Medium'] };
            background-color: ${props => props.theme.colors[props.color]}1A;
            user-select: none;
            pointer-events: none;
            transition: 0.1s ease all;
        }

        &:hover:after {
            background-color: ${props => props.theme.colors[props.color]}33;
        }
    `,
    flat: css`
        
    `
};

/* sizes */
const sizes = {
    small: css`
        height: 32px;
        font-size: 14px;
        padding: 0 15px;
    `,
    medium: css`
        font-size: 16px;
        height: 42px;
        padding: 0 30px;
    `,
};

/* alignment */
const alignments = {
    left: css`
        justify-content: flex-start;
        text-align: left;
    `,
    center: css`
        justify-content: center;
        text-align: center;
    `,
    right: css`
        justify-content: flex-end;
        text-align: right;
    `
};

export const StyledButton = styled.button`
    position: relative;
    z-index: 0;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    margin: 0;
    padding: 0;
    color: ${ props => props.theme.colors.text };
    font-family: 'bladerunner', sans-serif;
    font-size: 16px;
    height: 42px;
    padding: 0 30px;
    background-color: transparent;
    border: 0;
    border-radius: 0;
    outline: none;
    transition: .1s ease all;

    ${props => variants[props.variant] }
    ${props => sizes[props.size] }
`;