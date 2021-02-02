import { useState, useRef, useEffect } from 'react';

/* import components */
import { Loader } from '../../common';
/* import styles */
import { StyledCard, StyledBackground, StyledBorder, StyledActiveBorderSVG, StyledActiveBorderSVGRect, StyledContent, StyledLoader } from './card.styles';

const Card = props => {

    const { status, color, gutter, minHeight, isLoading, activeParts, children } = props;

    const [ cardSize, setCardSize ] = useState(null);
    const cardRef = useRef(null);

    const renderActiveBorder = () => {
        if (!status || status !== 'active' || !cardSize) {return null}
        const width = cardSize.w;
        const height = cardSize.h;
        const circumference = (width + height - 10) * 2;
        return (
            <StyledActiveBorderSVG
                data-db-el="card-active-border-svg"
                color={color}
            >
                <StyledActiveBorderSVGRect
                    x="2"
                    y="2"
                    width={width - 2}
                    height={height - 2}
                    color={color}
                    strokeDasharray={circumference / activeParts}
                    strokeDashoffset={0}
                >
                    <animate
                        attributeName="stroke-dashoffset"
                        from="0"
                        to={circumference / activeParts * 2}
                        dur="1.4s"
                        begin="0s"
                        repeatCount="indefinite"
                        fill="freeze"
                    />
                </StyledActiveBorderSVGRect>
            </StyledActiveBorderSVG>
        );
    };
    const renderContent = () => {
        if (isLoading) {
            return (
                <StyledLoader>
                    <Loader size="medium" />
                </StyledLoader>
            );
        } else {
            return (
                <StyledContent
                    data-db-el="card-content"
                >
                    {children}
                </StyledContent>
            );
        }
    };

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            if (!cardRef || !cardRef.current) {return}
            const { offsetWidth, offsetHeight } = cardRef.current;
            setCardSize({
                w: offsetWidth,
                h: offsetHeight
            });
        });
        resizeObserver.observe(cardRef.current);
        return () => {
            resizeObserver.disconnect();
        }
    }, []);

    return (
        <StyledCard
            ref={cardRef}
            data-db-el="card"
            color={color}
            status={status}
            style={{
                'padding': `${gutter}px`,
                'minHeight': `${minHeight}px`
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
            {renderContent()}
        </StyledCard>
    );

};

Card.defaultProps = {
    status: 'idle',
    gutter: 1,
    minHeight: 0,
    color: 'text',
    isLoading: false,
    activeParts: 8
};

export default Card;