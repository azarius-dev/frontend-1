import React from 'react';

/* import components */
import { Sidepanel } from '../components/common';
/* import hooks */
import { useSidepanel } from '../hooks';
/* create context */
const SidepanelContext = React.createContext({});

const SidepanelProvider = ({ children }) => {

    const { sidepanel, handleSidepanel, sidepanelData } = useSidepanel();

    const renderSidepanel = () => {
        if (!sidepanel) {return null}
        return (
            <Sidepanel />
        );
    }

    return (
        <SidepanelContext.Provider value={{ sidepanel, handleSidepanel, sidepanelData }}>
            {children}
            {renderSidepanel()}
        </SidepanelContext.Provider>
    );
};

export { SidepanelContext, SidepanelProvider };