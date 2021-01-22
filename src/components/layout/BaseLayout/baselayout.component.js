/* import components */
import { Topbar } from '../index';
/* import styles */
import { StyledBaseLayout, StyledLayoutBody, StyledLayoutView } from './baselayout.styles';

const BaseLayout = props => {

    const { sidebar, children } = props;

    return (
        <StyledBaseLayout
            data-db-el="base-layout"
        >
            {sidebar ? sidebar : null}
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