import React from 'react';

import { StyledButton } from './button.styles';

const Button = props => {

    const { variant, size, color, alignment, disabled, isLoading, onClick, children} = props;

    return (
        <StyledButton
            data-db-el="button"
            variant={variant}
            size={size}
            color={color}
            alignment={alignment}
            disabled={disabled}
            isLoading={isLoading}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    );

};

Button.defaultProps = {
    variant: 'primary',
    size: 'medium',
    color: 'primary',
    alignment: 'center',
    disabled: false,
    isLoading: false,
    onClick: () => { console.log('clicked on Button') }
};

export default Button;