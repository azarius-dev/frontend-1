import React, { useState, useEffect, useContext, useRef } from 'react';

/* import components */
import { IconButton } from 'components/common';
import { DisplaySmall } from 'theme';
/* import styles */
import { StyledSidepanelContainer, StyledBackdrop, StyledSidepanel, StyledSidepanelHeader, StyledSidepanelBody, StyledSidepanelFooter, StyledCloseAction } from './sidepanel.styles';
/* import contexts */
import { SidepanelContext } from 'contexts';
/* import icons */
import { CloseIcon } from 'assets/icons';

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