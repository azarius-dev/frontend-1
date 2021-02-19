import { useState, useEffect, useRef } from 'domains/Dapp/layout/Section/react';

/* import components*/
import SectionBorderSVG from './SectionBorderSVG/section-bordersvg.component';
import { DisplayMedium } from '../../../theme';
import { Tooltip } from '../../common';
/* import styles */
import { StyledSectionContainer, StyledSection, StyledSectionLabel } from './section.styles';
/* import assets */
import { HelpIcon } from '@icons';

const Section = props => {

    const { color, label, info, children } = props;

    const [ sectionSize, setSectionSize ] = useState(null);
    const sectionRef = useRef(null);

    const renderInfo = () => {
        if (!info || info === '') {return null}
        return (
            <Tooltip
                message={info}
            >
                <HelpIcon />
            </Tooltip>
        );
    };
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
                {renderInfo()}
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