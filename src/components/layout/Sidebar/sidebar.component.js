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
            if (!sidebarRef || !sidebarRef.current) {return}
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
            data-db-el="sidebar"
            ref={sidebarRef}
        >
            {renderBorderSVG()}
            <StyledSidebarHeader
                data-db-el="sidebar-header"
            >
                <SidebarLogo />
            </StyledSidebarHeader>
            <StyledSidebarNav
                data-db-el="sidebar-navigation"
            >
                {children}
            </StyledSidebarNav>
            <StyledSidebarFooter
                data-db-el="sidebar-footer"
            >

            </StyledSidebarFooter>
        </StyledSidebar>
    );

};

export default Sidebar;