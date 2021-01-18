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
                top: '8px',
                left: '-8px',
                filter: `drop-shadow(0 0 10px ${theme.colors.text}50)`,
                opacity: 0
            }}>
                <StyledRect
                    width="100%"
                    height="100%"
                    stroke={theme.colors.text}
                    strokeDasharray={width + height - 0}
                    strokeDashoffset={-width}
                />
            </StyledSidebarBorderSVG>
            <StyledSidebarBorderSVG style={{ 
                filter: `drop-shadow(0 0 15px ${theme.colors.secundary})`
            }}>
                <StyledRect
                    width="100%"
                    height="100%"
                    stroke={theme.colors.secundary}
                    strokeDasharray={width + height + 40}
                    strokeDashoffset={-width + 20}
                />
            </StyledSidebarBorderSVG>
        </React.Fragment>
    );

};

export default SidebarBorderSVG;