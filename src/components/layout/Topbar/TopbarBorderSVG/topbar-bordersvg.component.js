import React, { useContext } from 'react';

/* import contexts */
import { ThemeContext } from 'styled-components';
/* import styles */
import { StyledTopbarBorderSVG, StyledRect } from './topbar-bordersvg.styles';

const TopbarBorderSVG = ({ parentSize }) => {

    const theme = useContext(ThemeContext);

    const primaryRectId = 'topbar-gradient-primary-rect';
    const secundaryRectId = 'topbar-gradient-secundary-rect';

    return (
        <React.Fragment>
            <StyledTopbarBorderSVG style={{ 
                left: '8px',
                filter: `drop-shadow(0 0 5px ${theme.colors.primary})`
            }}>
                <defs>
                    <linearGradient
                        id={primaryRectId}
                        gradientTransform="rotate(5)"
                    >
                        <stop offset="30%" stopColor={theme.colors.primary} />
                        <stop offset="100%" stopColor={`${theme.colors.background}00`} />
                    </linearGradient>
                </defs>
                <StyledRect 
                    x="2"
                    y="2"
                    width={parentSize.width}
                    height={parentSize.height - 4}
                    stroke={`url(#${primaryRectId})`}
                />
            </StyledTopbarBorderSVG>
            <StyledTopbarBorderSVG style={{ 
                top: '8px',
                filter: `drop-shadow(0 0 10px ${theme.colors.secundary})`
            }}>
                <defs>
                    <linearGradient
                        id={secundaryRectId}
                        gradientTransform="rotate(8)"
                    >
                        <stop offset="30%" stopColor={theme.colors.secundary} />
                        <stop offset="80%" stopColor={`${theme.colors.background}00`} />
                    </linearGradient>
                </defs>
                <StyledRect 
                    x="2"
                    y="2"
                    width={parentSize.width}
                    height={parentSize.height - 4}
                    stroke={`url(#${secundaryRectId})`}
                />
            </StyledTopbarBorderSVG>
        </React.Fragment>
    );

};

export default TopbarBorderSVG;