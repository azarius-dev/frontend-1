import { Link } from 'react-router-dom';

/* import components */
import { DisplaySmall } from 'theme';
/* import assets */
import { debaseLogoPNG } from 'assets/img';
/* import styles */
import { StyledSidebarLogo, StyledImgLogoWrapper, StyledImgLogo, StyledTextLogo } from './sidebar-logo.styles';

const SidebarLogo = () => {

    return (
        <Link
            to="/"
            style={{ textDecoration: 'none' }}
        >
            <StyledSidebarLogo>
                <StyledImgLogoWrapper>
                    <StyledImgLogo 
                        src={debaseLogoPNG}
                        alt="Debaseonomics"
                    />
                </StyledImgLogoWrapper>
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