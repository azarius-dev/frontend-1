import React from 'react';

import { StyledIconButton, StyledBackground, StyledBorder, StyledIcon } from './icon-button.styles';

const IconButton = props => {

    const { color, size, edge, disabled, isLoading, onClick, children} = props;

    return (
        <StyledIconButton
            color={color}
            size={size}
            edge={edge}
            disabled={disabled}
            isLoading={isLoading}
            onClick={onClick}
        >   
            <StyledBackground 
                color={color}
                edge={edge}
            />
            <StyledBorder 
                color={color}
                edge={edge}
            />
            <StyledIcon>
                {children}
            </StyledIcon>
        </StyledIconButton>
    );

};

IconButton.defaultProps = {
    color: 'text',
    size: 'medium',
    edge: 'smooth',
    disabled: false,
    isLoading: false,
    onClick: () => { console.log('clicked on IconButton') }
};

export default IconButton;