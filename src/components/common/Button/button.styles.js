import styled, { css } from 'styled-components';

/* variants */
const variants = {

};

/* sizes */
const sizes = {
    small: css`
        height: 26px;
    `,
    medium: css`
        height: 34px;
        padding: 0 18px;
        font-size: 16px;
        font-weight: 600;
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
    padding-top: 4px;
    background-color: transparent;
    border: 0;
    border-radius: 0;
    outline: none;
    transition: .1s ease all;

    &:before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        width: 100%;
        height: 100%;
        border: 2px solid ${ props => props.theme.colors.text };
        border-radius: 10px 10px 30px 10px;
        user-select: none;
        pointer-events: none;
    }

    &:after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 100%;
        height: 100%;
        border: 2px solid ${ props => props.theme.colors[props.color] };
        border-radius: 10px 10px 30px 10px;
        box-shadow: ${ props => props.theme.shadows[props.color + 'Medium'] };
        user-select: none;
        pointer-events: none;
    }
`;