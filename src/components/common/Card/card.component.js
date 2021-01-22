/* import styles */
import { StyledCard, StyledBackground, StyledBorder, StyledActiveBorderSVG, StyledActiveBorderSVGRect, StyledContent } from './card.styles';

const Card = props => {

    const { status, color, gutter, children } = props;

    const renderActiveBorder = () => {
        if (!status || status !== 'active') {return null}
        return (
            <StyledActiveBorderSVG
                data-db-el="card-active-border-svg"
                color={color}
            >
                <StyledActiveBorderSVGRect
                    width="100%"
                    height="100%"
                    color={color}
                >

                </StyledActiveBorderSVGRect>
            </StyledActiveBorderSVG>
        );
    };

    return (
        <StyledCard
            data-db-el="card"
            color={color}
            status={status}
            style={{
                'padding': `${gutter}px`
            }}
        >
            <StyledBackground 
                data-db-el="card-background"
                color={color}
            />
            <StyledBorder 
                data-db-el="card-border"
                color={color}
                style={{
                    opacity: status === 'inactive' ? .2 : 1
                }}
            />
            {renderActiveBorder()}
            <StyledContent
                data-db-el="card-content"
            >
                {children}
            </StyledContent>
        </StyledCard>
    );

};

Card.defaultProps = {
    status: 'idle',
    gutter: 1,
    color: 'text'
};

export default Card;

//<CardActiveBorderSVG />