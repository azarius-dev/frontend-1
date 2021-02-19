import { Link } from 'domains/Dapp/layout/Sidebar/SidebarLogo/react-router-dom';

/* import components */
import { DisplaySmall } from 'domains/Dapp/layout/Sidebar/SidebarLogo/domains/Dapp/layout/Sidebar/SidebarLogo/domains/Dapp/layout/Sidepanel/domains/Dapp/layout/PoolStake/theme';
/* import assets */
import { debaseLogoPNG } from 'domains/Dapp/layout/Sidebar/SidebarLogo/domains/Dapp/layout/Sidebar/SidebarLogo/assets/img';
/* import styles */
import { StyledSidebarLogo, StyledImgLogoWrapper, StyledImgLogo, StyledTextLogo } from './sidebar-logo.styles';

const SidebarLogo = () => {

    return (
        <Link
            to="/"
            style={{ textDecoration: 'none', flexGrow: 1 }}
        >
            <StyledSidebarLogo>
                <DisplaySmall>
                    <StyledTextLogo>
                        debase
                    </StyledTextLogo>
                </DisplaySmall>
            </StyledSidebarLogo>
        </Link>
    );

};

export default SidebarLogo;