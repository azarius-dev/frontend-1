import { HelpIcon } from '@assets/icons';
import { Card, DisplaySmall, Tooltip } from '@core/components';
import { StyledLabeledCard, StyledCardHeader } from './labeledcard.styles';

const LabeledCard = ({
    children,
    label = "Labeled card",
    info,
    status,
    color,
    gutter = 40,
    isLoading,
    activeParts
}) => {

    return (
        <StyledLabeledCard>
            <StyledCardHeader>
                <DisplaySmall color="primary">
                    {label}
                </DisplaySmall>

                { info && info !== '' && (
                    <Tooltip
                        message={info}
                    >
                        <HelpIcon />
                    </Tooltip>
                )}

            </StyledCardHeader>
            <Card
                status={status}
                color={color}
                gutter={gutter}
                isLoading={isLoading}
                activeParts={activeParts}
            >
                {children}
            </Card>
        </StyledLabeledCard>
    );

};

export default LabeledCard;