import { useState, useEffect, useRef } from 'react';

/* import components */
import SidebarLogo from './SidebarLogo/sidebar-logo.component';
import SidebarBorderSVG from './SidebarBorderSVG/sidebar-bordersvg.component';
/* import styles */
import { StyledSidebar, StyledSidebarHeader, StyledSidebarNav, StyledSidebarFooter } from './sidebar.styles';

const Sidebar = props => {

    const { children } = props;

    const [ sidebarSize, setSidebarSize ] = useState(null);
    const sidebarRef = useRef(null);

    const renderBorderSVG = () => {
        if (!sidebarSize) {return null}
        return <SidebarBorderSVG size={sidebarSize} />
    };

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            const { offsetWidth, offsetHeight } = sidebarRef.current;
            setSidebarSize({
                w: offsetWidth,
                h: offsetHeight
            });
        });
        resizeObserver.observe(sidebarRef.current);
        return () => {
            resizeObserver.disconnect();
        }
    }, []);

    return (
        <StyledSidebar
            ref={sidebarRef}
        >
            {renderBorderSVG()}
            <StyledSidebarHeader>
                <SidebarLogo />
            </StyledSidebarHeader>
            <StyledSidebarNav>
                {children}
            </StyledSidebarNav>
            <StyledSidebarFooter>
                [ disconnect button ]
            </StyledSidebarFooter>
        </StyledSidebar>
    );

};

export default Sidebar;