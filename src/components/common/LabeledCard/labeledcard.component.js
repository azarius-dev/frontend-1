/* import components */
import { Card } from '../';
import { DisplaySmall } from '../../../theme';
/* import styles */
import { StyledLabeledCard, StyledCardHeader } from './labeledcard.styles';

const LabeledCard = props => {

    const { label, info, status, color, gutter, isLoading, activeParts, children } = props;

    return (
        <StyledLabeledCard>
            <StyledCardHeader>
                <DisplaySmall>
                    {label}
                </DisplaySmall>
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

LabeledCard.defaultProps = {
    label: 'Label'
}

export default LabeledCard;