/* import styles */
import { StyledSidebarLogo, StyledLogoImg } from './sidebar-logo.styles';

const SidebarLogo = () => {

    return (
        <StyledSidebarLogo>
            <StyledLogoImg src={process.env.PUBLIC_URL + 'assets/img/logo.png'} />
        </StyledSidebarLogo>
    );

};

export default SidebarLogo;