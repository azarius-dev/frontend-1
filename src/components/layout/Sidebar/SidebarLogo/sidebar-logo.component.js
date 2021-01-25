/* import assets */
import { debaseLogo } from '../../../../assets/img';
/* import styles */
import { StyledSidebarLogo, StyledLogoImg } from './sidebar-logo.styles';

const SidebarLogo = () => {

    return (
        <StyledSidebarLogo>
            <StyledLogoImg
                src={debaseLogo}
                alt="Debaseonomics"
            />
        </StyledSidebarLogo>
    );

};

export default SidebarLogo;