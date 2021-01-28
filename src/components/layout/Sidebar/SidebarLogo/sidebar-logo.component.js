/* import assets */
import { debaseLogoPNG } from '../../../../assets/img';
/* import styles */
import { StyledSidebarLogo, StyledLogoImg } from './sidebar-logo.styles';

const SidebarLogo = () => {

    return (
        <StyledSidebarLogo>
            <StyledLogoImg
                src={debaseLogoPNG}
                alt="Debaseonomics"
            />
        </StyledSidebarLogo>
    );

};

export default SidebarLogo;