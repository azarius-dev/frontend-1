/* import components */
import { Topbar } from '../index';
/* import styles */
import { StyledBaseLayout, StyledLayoutBody, StyledLayoutView } from './baselayout.styles';

const BaseLayout = props => {

    const { sidebar, children } = props;

    return (
        <StyledBaseLayout>
            {sidebar ? sidebar : null}
            <StyledLayoutBody>
                <Topbar />
                <StyledLayoutView>
                    {children}
                </StyledLayoutView>
            </StyledLayoutBody>
        </StyledBaseLayout>
    );

};

export default BaseLayout;