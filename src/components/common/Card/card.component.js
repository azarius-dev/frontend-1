/* import styles */
import { StyledCard, StyledBackground, StyledBorder, StyledContent } from './card.styles';

const Card = props => {

    const { status, color, gutter, children } = props;

    return (
        <StyledCard
            color={color}
            style={{
                'padding': `${gutter}px`
            }}
        >
            <StyledBackground 
                color={color}

            />
            <StyledBorder 
                color={color}
                style={{
                    opacity: status === 'inactive' ? .2 : 1
                }}
            />
            <StyledContent>
                {children}
            </StyledContent>
        </StyledCard>
    );

};

Card.defaultProps = {
    status: 'idle',
    gutter: 0,
    color: 'text'
};

export default Card;

//<CardActiveBorderSVG />