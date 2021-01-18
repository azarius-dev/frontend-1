/* import styles */
import { StyledCard } from './card.styles';

const Card = props => {

    const { label, columns, children } = props;

    const renderLabel = () => {

    };

    return (
        <StyledCard>
            {children}
        </StyledCard>
    );

};

export default Card;