/* import assets */
import logo from '../../../../assets/img/logo.png';
/* import styles */
import { StyledSidebarLogo, StyledLogoImg } from './sidebar-logo.styles';

const SidebarLogo = () => {

    return (
        <StyledSidebarLogo>
            <StyledLogoImg
                src={logo}
                alt="Debaseonomics"
            />
        </StyledSidebarLogo>
    );

};

export default SidebarLogo;