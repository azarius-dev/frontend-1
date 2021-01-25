import React from 'react';

/* import styles */
import { StyledSpinner, StyledSpinnerSVG, StyledCircle } from './spinner.styles';

const Spinner = props => {

    const { size } = props;

    return (
        <StyledSpinner size={size}>
            <StyledSpinnerSVG
                width="100%"
                height="100%"
                viewBox="0 0 60 60"
            >
                <circle x="6" y="6" width="48" height="48" fill="transparent" rx="12" ry="12" />
            </StyledSpinnerSVG>
        </StyledSpinner>
    );

}

export default Spinner;