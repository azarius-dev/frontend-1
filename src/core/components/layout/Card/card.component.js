import { useState, useRef, useEffect } from 'react';

import { Spinner } from '@core/components';
import {
    StyledCard,
    StyledBackground,
    StyledBorder,
    StyledActiveBorderSVG,
    StyledActiveBorderSVGRect,
    StyledContent,
    StyledLoader
} from './card.styles';
const Card = ({
    children,
    color = "primary",
    gutter,
    minHeight,
    isActive = false,
    isLoading = false,
    activeParts
}) => {

    const [ cardSize, setCardSize ] = useState(null);
    const cardRef = useRef(null);

    const renderActiveBorder = () => {
        if (!isActive || !cardSize) {return null}
        const width = cardSize.w;
        const height = cardSize.h;
        const circumference = (width + height - 10) * 2;
        return (
            <StyledActiveBorderSVG color={color}>
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
                    <Spinner />
                </StyledLoader>
            );
        } else {
            return children;
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
            color={color}
            isActive
            style={{
                'padding': `${gutter}px`,
                'minHeight': `${minHeight}px`
            }}
        >
            {renderActiveBorder()}
            {renderContent()}
        </StyledCard>
    );

};

Card.defaultProps = {
    status: 'idle',
    gutter: 1,
    minHeight: 0,
    activeParts: 8
};

export default Card;