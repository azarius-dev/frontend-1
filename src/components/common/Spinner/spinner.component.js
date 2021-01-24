import React from 'react';

/* import styles */
import { StyledSpinnerContainer, StyledSpinnerOuterSVG, StyledSpinnerInnerSVG } from './spinner.styles';

const Spinner = props => {

    const { size } = props;

    return (
        <StyledSpinnerContainer size={size}>
            <StyledSpinnerOuterSVG>
                <svg width="100%" height="100%" viewBox="0 0 60 60">
                    <rect x="6" y="6" width="48" height="48" fill="transparent" rx="12" ry="12">
                        <animate
                            id="x-to-circle"
                            attributeName="rx"
                            values="12;24;12"
                            dur="1.4s"
                            begin="0s; x-to-rect.end"
                            repeatCount="indefinite"
                            fill="freeze"
                        />
                        <animate
                            id="y-to-circle"
                            attributeName="ry"
                            values="12;24;12"
                            dur="1.4s"
                            begin="0s"
                            repeatCount="indefinite"
                            fill="freeze"
                        />
                    </rect>
                </svg>
            </StyledSpinnerOuterSVG>
            <StyledSpinnerInnerSVG>
                <svg width="100%" height="100%" viewBox="0 0 60 60">
                    <rect x="20" y="20" width="20" height="20" fill="transparent" rx="50" ry="50">
                        <animate
                            id="x-to-circle"
                            attributeName="rx"
                            values="12;24;12"
                            dur="1.4s"
                            begin="0s; x-to-rect.end"
                            repeatCount="indefinite"
                            fill="freeze"
                        />
                        <animate
                            id="y-to-circle"
                            attributeName="ry"
                            values="12;24;12"
                            dur="1.4s"
                            begin="0s"
                            repeatCount="indefinite"
                            fill="freeze"
                        />
                    </rect>
                </svg>
            </StyledSpinnerInnerSVG>
        </StyledSpinnerContainer>
    );

}

export default Spinner;