import React, { useContext } from 'react';

/* import contexts */
import { ThemeContext } from 'styled-components';
/* import styles */
import { StyledSectionBorderSVG, StyledRect } from './section-bordersvg.styles';

const SectionBorderSVG = props => {

    const { color } = props;

    const theme = useContext(ThemeContext);

    const rectId = 'section-gradient-primary-rect';

    return (
        <React.Fragment>
            <StyledSectionBorderSVG style={{ 
                left: '0px',
                filter: `drop-shadow(0 0 5px ${theme.colors[color]})`
            }}>
                <defs>
                    <linearGradient
                        id={rectId}
                        gradientTransform="rotate(45)"
                    >
                        <stop offset="0%" stopColor={theme.colors[color]} />
                        <stop offset="80%" stopColor={`${theme.colors.background}00`} />
                    </linearGradient>
                </defs>
                <StyledRect 
                    width="100%"
                    height="100%"
                    stroke={`url(#${rectId})`}
                />
            </StyledSectionBorderSVG>
        </React.Fragment>
    );

};

SectionBorderSVG.defaultProps = {
    color: 'text'
};

export default SectionBorderSVG;