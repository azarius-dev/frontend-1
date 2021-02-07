import React from 'react';

/* import components */
import { Spinner } from '../';
/* import styles */
import { StyledButton } from './button.styles';

const Button = props => {

    const { variant, size, color, alignment, disabled, isLoading, onClick, children} = props;

    const renderContent = () => {
        if (!isLoading) return children;
        return (
            <Spinner
                size="small"
                color="text"
            />
        );
    };

    return (
        <StyledButton
            data-db-el="button"
            variant={variant}
            size={size}
            color={color}
            alignment={alignment}
            disabled={disabled}
            isLoading={isLoading}
            onClick={!disabled ? onClick : null}
            style={{ 
                pointerEvents: disabled ? 'none' : 'auto',
                opacity: disabled ? .5 : 1,
            }}
        >
            {renderContent()}
        </StyledButton>
    );

};

Button.defaultProps = {
    variant: 'default',
    size: 'medium',
    color: 'primary',
    alignment: 'center',
    disabled: false,
    isLoading: false,
    onClick: () => { console.log('clicked on Button') }
};

export default Button;