import { useState, useEffect, useContext, useRef } from 'react';
import { createPortal } from 'react-dom';

/* import context */
import { RootContext } from '../../../contexts';
/* import hooks */
import { useMousePosition } from '../../../hooks';
/* import styles */
import { StyledTooltipWrapper, StyledTooltipContainer, StyledTooltip } from './tooltip.styles';

const Tooltip = props => {

    const { message, isHtml, location, followCursor, offset, enterDelay, leaveDelay, children } = props;

    const [ active, setActive ] = useState(false);
    const [ position, setPosition ] = useState({ x: 0, y: 0 });
    const [ wrapperRect, setWrapperRect ] = useState(null);

    const { rootNode } = useContext(RootContext);

    const wrapperRef = useRef(null);
    const tooltipRef = useRef(null);

    const mousePosition = useMousePosition();

    const onMouseEnterWrapper = e => {
        calcPosition();
        setActive(true);
    };
    const onMouseLeaveWrapper = e => {
        setActive(false);
    };
    const onMouseMoveWrapper = e => {
        if (!followCursor) {return}
        calcPosition();
    };

    const calcPosition = () => {
        if (!wrapperRect || !tooltipRef || !tooltipRef.current) {return}
        const tooltipWidth = tooltipRef.current.offsetWidth;
        const tooltipHeight = tooltipRef.current.offsetHeight;

        const originLeft = followCursor ? mousePosition.x : wrapperRect.left;
        const originTop = followCursor ? mousePosition.y : wrapperRect.top;
        const originWidth = followCursor ? 0 : wrapperRect.width;
        const originHeight = followCursor ? 0 : wrapperRect.height;

        switch(location) {
            case 'top-left': {
                return setPosition({
                    x: originLeft,
                    y: originTop - offset - tooltipHeight
                });
            }
            case 'top-center': {
                return setPosition({
                    x: originLeft + (originWidth / 2) - (tooltipWidth / 2),
                    y: originTop - offset - tooltipHeight
                });
            }
            case 'top-right': {
                return setPosition({
                    x: originLeft + originWidth - tooltipWidth,
                    y: originTop - offset - tooltipHeight
                });
            }
            case 'right-top': {
                return setPosition({
                    x: originLeft + originWidth + offset,
                    y: originTop
                });
            }
            case 'right-center': {
                return setPosition({
                    x: originLeft + originWidth + offset,
                    y: originTop + (originHeight / 2) - (tooltipHeight / 2),
                });
            }
            case 'right-bottom': {
                return setPosition({
                    x: originLeft + originWidth + offset,
                    y: originTop + originHeight - tooltipHeight
                });
            }
            case 'bottom-right': {
                return setPosition({
                    x: originLeft + originWidth - tooltipWidth,
                    y: originTop + originHeight + offset
                });
            }
            case 'bottom-center': {
                return setPosition({
                    x: originLeft + (originWidth / 2) - (tooltipWidth / 2),
                    y: originTop + originHeight + offset
                });
            }
            case 'bottom-left': {
                return setPosition({
                    x: originLeft + originWidth - tooltipWidth,
                    y: originTop + originHeight + offset
                });
            }
            case 'left-bottom': {
                return setPosition({
                    x: originLeft - offset - tooltipWidth,
                    y: originTop + originHeight
                });
            }
            case 'left-center': {
                return setPosition({
                    x: originLeft - offset - tooltipWidth,
                    y: originTop + (originHeight / 2) - (tooltipHeight / 2),
                });
            }
            case 'left-top': {
                return setPosition({
                    x: originLeft - offset - tooltipWidth,
                    y: originTop
                });
            }
        }
    };
    
    const renderTooltip = () => {
        if (!active || !message || message === '') {return null}
        return (
            createPortal(
                <StyledTooltipContainer>
                    <StyledTooltip
                        ref={tooltipRef}s
                        style={{ 
                            left: position.x,
                            top: position.y
                        }}
                    >
                        {message}
                    </StyledTooltip>
                </StyledTooltipContainer>,
                rootNode
            )
        );
    };

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(() => {
            if (!wrapperRef || !wrapperRef.current) {return}
            setWrapperRect(wrapperRef.current.getBoundingClientRect());
        });
        intersectionObserver.observe(wrapperRef.current);
        return () => {
            intersectionObserver.disconnect();
        }
    }, [wrapperRef]);
    useEffect(() => {
        if (!wrapperRect && active) {return}
        calcPosition();
    }, [wrapperRect, active]);

    return (
        <StyledTooltipWrapper
            ref={wrapperRef}
            onMouseEnter={e => onMouseEnterWrapper(e)}
            onMouseLeave={e => onMouseLeaveWrapper(e)}
            onMouseMove={e => onMouseMoveWrapper(e)}
        >
            {children}
            {renderTooltip()}
        </StyledTooltipWrapper>
    );

};

Tooltip.defaultProps = {
    message: '',
    isHtml: false,
    location: 'top-center',
    followCursor: false,
    offset: 10,
    enterDelay: null,
    leaveDelay: null
};

export default Tooltip;