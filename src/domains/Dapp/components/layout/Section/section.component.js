import { DisplayMedium, Tooltip } from '@core/components';
import { HelpIcon } from '@assets';
import {
    StyledSection,
    StyledBody,
    StyledHeader
} from './section.styles';

const Section = ({
    children,
    label,
    info
}) => {

    return (
        <StyledSection>
            {label && label !== '' && (
                <StyledHeader>
                    <DisplayMedium>
                        {label}
                    </DisplayMedium>
                    {info && info !== '' && (
                        <Tooltip
                            message={info}
                        >
                            <HelpIcon />
                        </Tooltip>
                    )}
                </StyledHeader>
            )}
            <StyledBody>
                {children}
            </StyledBody>
        </StyledSection>
    );

};

export default Section;