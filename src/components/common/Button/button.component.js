import React from 'react';

import { StyledButton } from './button.styles';

const Button = props => {

    const { variant, size, color, alignment, disabled, active, isLoading, onClick, children} = props;

    return (
        <StyledButton
            variant={variant}
            size={size}
            color={color}
            alignment={alignment}
            disabled={disabled}
            active={active}
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
    alignment: 'center',
    disabled: false,
    active: false,
    isLoading: false,
    onClick: () => { console.log('clicked on Button') }
};

export default Button;