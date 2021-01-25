import React, { useState, useEffect, useContext, useRef } from 'react';

/* import components */
import { IconButton } from '..';
import { DisplaySmall } from '../../../theme';
/* import styles */
import { StyledSidepanelContainer, StyledBackdrop, StyledSidepanel, StyledSidepanelHeader, StyledSidepanelBody, StyledSidepanelFooter, StyledCloseAction } from './sidepanel.styles';
/* import contexts */
import { SidepanelContext } from '../../../contexts';
/* import icons */
import { CloseIcon } from '../../../assets/icons';

const Sidepanel = () => {

    const { handleSidepanel, sidepanelData } = useContext(SidepanelContext);
    const { color, hasBackdrop, detectOutsideClick, title, bodyContent, footerContent } = sidepanelData;
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

    const renderTitle = () => {
        if (!title || title === '') {return null}
        return (
            <DisplaySmall>
                {title}
            </DisplaySmall>
        );
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
                    {renderTitle()}
                    <StyledCloseAction>
                        <IconButton
                            size="large"
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