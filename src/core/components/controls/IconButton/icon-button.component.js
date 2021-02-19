import React from '@common/controls/IconButton/react';

import { StyledIconButton, StyledIcon } from './icon-button.styles';

const IconButton = props => {

    const { variant, color, size, edge, disabled, isLoading, onClick, children} = props;

    return (
        <StyledIconButton
            variant={variant}
            color={color}
            size={size}
            edge={edge}
            disabled={disabled}
            isLoading={isLoading}
            onClick={onClick}
        >   
            <StyledIcon>
                {children}
            </StyledIcon>
        </StyledIconButton>
    );

};

IconButton.defaultProps = {
    variant: 'default',
    color: 'text',
    size: 'medium',
    edge: 'smooth',
    disabled: false,
    isLoading: false,
    onClick: () => { console.log('clicked on IconButton') }
};

export default IconButton;