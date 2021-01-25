import { useState } from 'react';

export default () => {

    const [ sidepanel, setSidepanel ] = useState(false);
    const [ sidepanelData, setSidepanelData] = useState(null);

    const defaultData = {
        title: 'Sidepanel',
        bodyContent: '',
        footerContent: '',
        color: 'primary',
        hasBackdrop: true,
        detectOutsideClick: true
    };

    const handleSidepanel = data => {
        setSidepanel(false);
        if (data) {
            setSidepanel(true);
            setSidepanelData(Object.assign({}, defaultData, data));
        }
    };

    return { sidepanel, handleSidepanel, sidepanelData };
};