import React from '@common/feedback/Spinner/react';

/* import styles */
import { StyledSpinner, StyledSpinnerSVG, StyledCircle } from './spinner.styles';

const Spinner = props => {

    const { size, color } = props;

    return (
        <StyledSpinner
            size={size}
            color={color}
        >
            <StyledSpinnerSVG
                color={color}
                width="100%"
                height="100%"
                viewBox="0 0 60 60"
            >
                <StyledCircle
                    cx="30"
                    cy="30"
                    r="24"
                    fill="transparent"
                />
            </StyledSpinnerSVG>
        </StyledSpinner>
    );

}

Spinner.defaultProps = {
    size: 'small',
    color: 'text'
};

export default Spinner;