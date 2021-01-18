/* import styles */
import { StyledNavigationButton, StyledButtonIcon, StyledButtonIconMain, StyledButtonIconSub, StyledButtonLabel } from './navigation-button.styles';

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
            <StyledButtonLabel>
                {label}
            </StyledButtonLabel>
        </StyledNavigationButton>
    );

};

export default NavigationButton;