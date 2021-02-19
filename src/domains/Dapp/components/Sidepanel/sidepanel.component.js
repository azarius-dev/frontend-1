import React, { useState, useEffect, useContext, useRef } from 'domains/Dapp/layout/Sidepanel/react';

/* import components */
import { IconButton } from '@domains/Dapp/views/Dashboard/domains/Dapp/layout/Sidepanel/domains/Dapp/layout/PoolStake/domains/Dapp/views/DashboardView/components/common';
import { DisplaySmall } from 'domains/Dapp/layout/Sidebar/SidebarLogo/domains/Dapp/layout/Sidebar/SidebarLogo/domains/Dapp/layout/Sidepanel/domains/Dapp/layout/PoolStake/theme';
/* import styles */
import { StyledSidepanelContainer, StyledBackdrop, StyledSidepanel, StyledSidepanelHeader, StyledSidepanelBody, StyledSidepanelFooter, StyledCloseAction } from './sidepanel.styles';
/* import contexts */
import { SidepanelContext } from '@domains/Dapp/views/Dashboard/domains/Dapp/layout/Sidepanel/domains/Dapp/views/DashboardView/contexts';
/* import icons */
import { CloseIcon } from 'domains/Dapp/layout/Sidepanel/assets/icons';

const Sidepanel = () => {

    const { handleSidepanel, sidepanelData } = useContext(SidepanelContext);
    const { color, hasBackdrop, detectOutsideClick, headerContent, bodyContent, footerContent } = sidepanelData;
    const sidepanelRef = useRef(null)

    const onClickDocument = e => {
        if (sidepanelRef && sidepanelRef.current && !sidepanelRef.current.contains(e.target)) {
            handleSidepanel();
        }
    };

    const renderBackdrop = () => {
        if (!hasBackdrop) {return null}
        return <StyledBackdrop />
    };

    useEffect(() => {
        if (!detectOutsideClick) {return}
        document.addEventListener('click', onClickDocument);
        return () => {
            if (!detectOutsideClick) {return}
            document.removeEventListener('click', onClickDocument);
        }
    }, []);

    return (
        <StyledSidepanelContainer>
            {renderBackdrop()}
            <StyledSidepanel
                ref={sidepanelRef}
                color={color}
            >
                <StyledSidepanelHeader>
                    {headerContent}
                    <StyledCloseAction>
                        <IconButton
                            variant="flat"
                            edge="rounded"
                            size="medium"
                            color={color}
                            onClick={() => handleSidepanel()}
                        >
                            <CloseIcon />
                        </IconButton>
                    </StyledCloseAction>
                </StyledSidepanelHeader>
                <StyledSidepanelBody>
                    {bodyContent}
                </StyledSidepanelBody>
                <StyledSidepanelFooter>
                    {footerContent}
                </StyledSidepanelFooter>
            </StyledSidepanel>
        </StyledSidepanelContainer>
    );

};

export default Sidepanel;