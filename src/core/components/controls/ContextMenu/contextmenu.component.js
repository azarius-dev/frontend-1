import React, { useState, useEffect, useContext, useRef } from 'react';

import { clampNum } from 'utils';
import { UIContext, ViewportContext, ContextMenuContext } from '@editor/contexts';
import {
    StyledContextMenu,
    StyledMenuDivider,
    StyledMenuButton,
    StyledButtonIcon,
    StyledButtonLabel,
    StyledButtonInfo
} from './contextmenu.styles';

const ContextMenu = () => {

    const [ dimensions, setDimensions ] = useState({ w: 0, h: 0 });

    const { ui } = useContext(UIContext);
    const { viewport } = useContext(ViewportContext);
    const { handleContextMenu, actions, position } = useContext(ContextMenuContext);

    const gutter = 20;
    const contextMenuRef = useRef(null);

    const [ uiWidth, uiHeight ] = ui.size;

    const style = {
        'top': clampNum(position.y, gutter, uiHeight - dimensions.h - gutter),
        'left': clampNum(position.x, gutter, uiWidth - dimensions.w - gutter),
    };

    const onExternalClick = e => {
        if (contextMenuRef && !contextMenuRef.current.contains(e.target)) {
            handleContextMenu();
        }
    };

    const renderButtonIcon = icon => {
        if (!icon) {return null}
        return (
            <StyledButtonIcon>
                {icon}
            </StyledButtonIcon>
        );
    };

    const renderButtonInfo = info => {
        if (!info) {return null}
        return (
            <StyledButtonInfo>
                {info}
            </StyledButtonInfo>
        );
    }

    const renderActions = () => {
        if (!actions || actions.length === 0) {return null}
        return actions.map((action, i) => {
            const { type, label, icon, info, method } = action;
            switch (type) {
                case 'button': {
                    return (
                        <StyledMenuButton
                            key={`context-button-${label}-${i}`}
                            onClick={() => {
                                method();
                                handleContextMenu();
                            }}
                        >
                            {renderButtonIcon(icon)}
                            <StyledButtonLabel>
                                {label}
                            </StyledButtonLabel>
                            {renderButtonInfo(info)}
                        </StyledMenuButton>
                    );
                }
                case 'divider': {
                    return (
                        <StyledMenuDivider 
                            key={`context-button-${label}-${i}`}
                        />
                    );
                }
                default: return null
            }
        });
    }

    useEffect(() => {
        const designerNode = ui.designerRef ? ui.designerRef.current : null;
        const iframeDocument = viewport.iframeRef ? viewport.iframeRef.current.contentWindow.document : null;

        if (contextMenuRef.current && designerNode && iframeDocument) {
            designerNode.addEventListener('click', onExternalClick);
            iframeDocument.addEventListener('click', onExternalClick);
        }

        if (contextMenuRef.current) {
            setDimensions({
                w: contextMenuRef.current.offsetWidth,
                h: contextMenuRef.current.offsetHeight
            });
        }

        return () => {
            if (contextMenuRef.current && designerNode && iframeDocument) {
                designerNode.removeEventListener('click', onExternalClick);
                iframeDocument.removeEventListener('click', onExternalClick);
            }
        }

    }, [contextMenuRef.current, ui.designerRef, viewport.iframeRef]);

    return (
        <StyledContextMenu
            ref={contextMenuRef}
            style={style}
        >
            {renderActions()}
        </StyledContextMenu>
    );

};

export default ContextMenu;