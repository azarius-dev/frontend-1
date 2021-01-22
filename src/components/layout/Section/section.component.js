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
            <StyledSectionLabel
                data-db-el="section-label"
            >
                <DisplayMedium
                    color={color}
                >
                    {label}
                </DisplayMedium>
            </StyledSectionLabel>
        )
    }

    return (
        <StyledSectionContainer
            data-db-el="section-container"
        >
            {renderLabel()}
            <StyledSection
                data-db-el="section"
            >
                <SectionBorderSVG 
                    data-db-el="section-border-svg"
                    color={color}
                />
                {children}
            </StyledSection>
        </StyledSectionContainer>
    );

};

export default Section;