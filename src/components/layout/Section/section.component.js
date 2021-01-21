/* import components*/
import SectionBorderSVG from './SectionBorderSVG/section-bordersvg.component';
import { DisplayMedium, DisplaySmall } from '../../../theme';
/* import styles */
import { StyledSectionContainer, StyledSection, StyledSectionLabel } from './section.styles';

const Section = props => {

    const { color, label, children } = props;

    const renderLabel = () => {
        if (!label || label === '') {return null}
        return (
            <StyledSectionLabel>
                <DisplayMedium
                    color={color}
                >
                    {label}
                </DisplayMedium>
            </StyledSectionLabel>
        )
    }

    return (
        <StyledSectionContainer>
            {renderLabel()}
            <StyledSection>
                <SectionBorderSVG 
                    color={color}
                />
                {children}
            </StyledSection>
        </StyledSectionContainer>
    );

};

export default Section;