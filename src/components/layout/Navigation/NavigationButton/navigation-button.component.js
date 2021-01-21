/* import components */
import { DisplaySmall } from '../../../../theme';
/* import styles */
import { StyledNavigationButton, StyledButtonIcon, StyledButtonIconMain, StyledButtonIconSub } from './navigation-button.styles';

const NavigationButton = props => {

    const { label, icon, active } = props;

    return (
        <StyledNavigationButton
            active={active}
        >
            <StyledButtonIcon>
                <StyledButtonIconMain>
                    {icon}
                </StyledButtonIconMain>
                <StyledButtonIconSub>
                    {icon}
                </StyledButtonIconSub>
            </StyledButtonIcon>
            <DisplaySmall
                color="text"
            >
                {label}
            </DisplaySmall>
        </StyledNavigationButton>
    );

};

export default NavigationButton;