import React, { useContext, useRef } from 'react';

import { IconButton, Button, DisplayLarge, TextMedium } from '@common';
import { CloseIcon } from '@icons';
import { DialogContext } from '@editor/contexts';
import {
    StyledDialogBackdrop,
    StyledDialog,
    StyledCloseAction,
    StyledDialogIcon,
    StyledDialogMessage,
    StyledDialogActions,
    StyledDialogDecoration,
    StyledDecorationIcon
} from './dialog.styles';

const Dialog = () => {

    const { handleDialog, dialogData } = useContext(DialogContext);
    const { color, title, icon, message, acceptLabel, acceptAction, declineLabel, isCloseable } = dialogData;
    const dialogRef = useRef(null);

    const colorType = color ? color : 'primary';

    const renderCloseAction = () => {
        if (!isCloseable) {return null}
        return (
            <StyledCloseAction>
                <IconButton
                    variant="flat"
                    size="small"
                    edge="rounded"
                    onClick={() => handleDialog()}
                >
                    <CloseIcon />
                </IconButton>
            </StyledCloseAction>
        );
    };

    const renderIcon = () => {
        if (!icon) {return null}
        return (
            <StyledDialogIcon
                color={colorType}
            >
                {icon}
            </StyledDialogIcon>
        );
    };

    const renderTitle = () => {
        if (!title) {return null}
        return (
            <DisplayLarge>
                {title}
            </DisplayLarge>
        );
    };

    const renderMessage = () => {
        if (!message) {return null}
        return (
            <StyledDialogMessage>
                <TextMedium>
                    {message}
                </TextMedium>
            </StyledDialogMessage>
        );
    };

    const renderDeclineAction = () => {
        if (!declineLabel) {return null}
        return (
            <Button
                variant="flat"
                size="medium"
                edge="smooth"
                onClick={() => handleDialog()}
            >
                {declineLabel}
            </Button>
        );
    };

    const renderAcceptAction = () => {
        if (!acceptLabel || !acceptAction) {return null}
        return (
            <Button
                variant="primary"
                size="medium"
                edge="smooth"
                color={colorType}
                onClick={() => {
                    acceptAction();
                    handleDialog();
                }}
            >
                {acceptLabel}
            </Button>
        );
    };

    const renderDialogActions = () => {
        if (!declineLabel && (!acceptLabel || !acceptAction)) {return null}
        return (
            <StyledDialogActions>
                {renderDeclineAction()}
                {renderAcceptAction()}
            </StyledDialogActions>
        );
    };

    const renderDecorationIcon = () => {
        if (!icon) {return null}
        return (
            <StyledDecorationIcon
                color={colorType}
            >
                {icon}
            </StyledDecorationIcon>
        );
    };

    return (
        <StyledDialogBackdrop>
            <StyledDialog
                ref={dialogRef}
            >
                {renderCloseAction()}
                {renderIcon()}
                {renderTitle()}
                {renderMessage()}
                {renderDialogActions()}
                <StyledDialogDecoration>
                    {renderDecorationIcon()}
                </StyledDialogDecoration>
            </StyledDialog>
        </StyledDialogBackdrop>
    );

};

export default Dialog;