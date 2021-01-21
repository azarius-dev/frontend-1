import styled, { css } from 'styled-components';

/* statuses */
const statuses = {
    idle: css`
        background-color: ${ props => props.theme.colors.text };
        box-shadow: ${ props => props.theme.shadows.textSmall };
    `,
    active: css`
        background-color: ${ props => props.theme.colors.success };
        box-shadow: ${ props => props.theme.shadows.successSmall };
    `,
    inactive: css`
        background-color: ${ props => props.theme.colors.error };
        box-shadow: ${ props => props.theme.shadows.errorSmall };
    `,
};

/* sizes */
const sizes = {
    small: css`
        height: 14px;
        width: 14px;
    `,
    medium: css`
        height: 20px;
        width: 20px;
    `,
    large: css`
        height: 32px;
        width: 32px;
    `,
};

export const StyledStatusIndicator = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: ${ props => props.theme.shadows.textSmall };
    border: 2px solid ${ props => props.theme.colors.text };
    border-radius: 50%;

    &:before {
        content: '';
        border-radius: 50%;
        height: 50%;
        width: 50%;
        ${props => statuses[props.status] }
    }

    ${props => sizes[props.size] }
`;