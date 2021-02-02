import { useContext } from 'react';

/* import components */
import { Topbar } from '../index';
/* import styles */
import { StyledBaseLayout, StyledLayoutBody, StyledLayoutView } from './baselayout.styles';
/* import context */
import { UIContext } from '../../../contexts';

const BaseLayout = props => {

    const { sidebar, children } = props;

    const { ui } = useContext(UIContext);

    const renderSidebar = () => {
        if (ui.isMobile || !sidebar) {return null}
        return sidebar;
    };

    return (
        <StyledBaseLayout
            data-db-el="base-layout"
        >
            {renderSidebar()}
            <StyledLayoutBody
                data-db-el="base-layout-body"
            >
                <Topbar />
                <StyledLayoutView
                    data-db-el="base-layout-view"
                >
                    {children}
                </StyledLayoutView>
            </StyledLayoutBody>
        </StyledBaseLayout>
    );

};

export default BaseLayout;