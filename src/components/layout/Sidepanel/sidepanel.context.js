import React from 'react';
const SidepanelContext = React.createContext([]);
export default SidepanelContext;

import React from "react";

/* import components */
import { Dialog } from '../components/common';
/* import hooks */
import useDialog from "../hooks/useDialog";
/* create context */
const DialogContext = React.createContext({});

const DialogProvider = ({ children }) => {

    const { dialog, handleDialog, dialogData } = useDialog();

    const renderDialog = () => {
        if (!dialog) {return null}
        return (
            <Dialog />
        );
    }

    return (
        <DialogContext.Provider value={{ dialog, handleDialog, dialogData }}>
            {children}
            {renderDialog()}
        </DialogContext.Provider>
    );
};

export { DialogContext, DialogProvider };