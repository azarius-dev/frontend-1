import { useState, useEffect, useRef } from 'react';

/* import components*/
import SectionBorderSVG from './SectionBorderSVG/section-bordersvg.component';
import { DisplayMedium } from '../../../theme';
/* import styles */
import { StyledSectionContainer, StyledSection, StyledSectionLabel } from './section.styles';

const Section = props => {

    const { color, label, children } = props;

    const [ sectionSize, setSectionSize ] = useState(null);
    const sectionRef = useRef(null);

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

    const renderBorderSVG = () => {
        if (!sectionSize) {return null}
        return (
            <SectionBorderSVG 
                data-db-el="section-border-svg"
                color={color}
                size={sectionSize}
            />
        );
    };

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            if (!sectionRef || !sectionRef.current) {return}
            const { offsetWidth, offsetHeight } = sectionRef.current;
            setSectionSize({
                w: offsetWidth,
                h: offsetHeight
            });
        });
        resizeObserver.observe(sectionRef.current);
        return () => {
            resizeObserver.disconnect();
        }
    }, []);

    return (
        <StyledSectionContainer
            data-db-el="section-container"
        >
            {renderLabel()}
            <StyledSection
                ref={sectionRef}
                data-db-el="section"
            >
                {renderBorderSVG()}
                {children}
            </StyledSection>
        </StyledSectionContainer>
    );

};

export default Section;