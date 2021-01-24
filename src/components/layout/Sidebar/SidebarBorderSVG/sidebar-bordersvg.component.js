import React, { useContext } from 'react';

/* import contexts */
import { ThemeContext } from 'styled-components';
/* import styles */
import { StyledSidebarBorderSVG, StyledRect } from './sidebar-bordersvg.styles';

const SidebarBorderSVG = props => {

    const { size } = props;
    const { w: width, h: height } = size;

    const theme = useContext(ThemeContext);

    return (
        <React.Fragment>
            <StyledSidebarBorderSVG style={{ 
                filter: `drop-shadow(0 0 15px ${theme.colors.secundary})`
            }}>
                <defs>
                    <linearGradient
                        id="sidebar-gradient-secundary-rect"
                        gradientTransform="rotate(30)"
                    >
                        <stop offset="40%" stopColor={`${theme.colors.background}00`} />
                        <stop offset="50%" stopColor={theme.colors.secundary} />
                    </linearGradient>
                </defs>
                <StyledRect
                    x="2"
                    y="2"
                    width={width - 4}
                    height={height - 4}
                    stroke={`url(#sidebar-gradient-secundary-rect)`}
                />
            </StyledSidebarBorderSVG>
        </React.Fragment>
    );

};

export default SidebarBorderSVG;