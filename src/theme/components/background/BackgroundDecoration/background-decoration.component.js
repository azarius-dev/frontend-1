import { useState, useEffect } from 'react';

/* import components */
import { Circle, Line, Triangle } from './components';
/* import hooks */
import { useMousePosition } from '../../../../hooks';
/* import styles */
import { StyledBackgroundDecoration } from './background-decoration.styles';

const windowSize = {
    w: window.innerWidth,
    h: window.innerHeight
};

const BackgroundDecoration = () => {

    const [ centerOffset, setCenterOffset ] = useState({ x: 0, y: 0 });

    const mousePosition = useMousePosition();

    useEffect(() => {
        setCenterOffset({
            x: (mousePosition.x - (windowSize.w / 2)) / (windowSize.w / 2),
            y: (mousePosition.y - (windowSize.h / 2)) / (windowSize.h / 2),
        });
    }, [mousePosition]);

    return (
        <StyledBackgroundDecoration
            data-db-el="background-decoration"
        >
            <Circle 
                size={500}
                color="secundary"
                /*style={{
                    left: ((.9 + (.9 * centerOffset.x / -12)) * 100) + '%',
                    top: ((-.12 + (-.12 * centerOffset.y / 2)) * 100) + '%'
                }}*/
                style={{
                    left: '90%',
                    top: '-12%'
                }}
            />
            <Circle 
                size={500}
                color="primary"
                /*style={{
                    left: ((-.12 + (-.12* centerOffset.x / 12)) * 100) + '%',
                    top: ((.9 + (.9 * centerOffset.y / -8)) * 100) + '%'
                }}*/
                style={{
                    left: '-12%',
                    top: '90%'
                }}
            />
        </StyledBackgroundDecoration>
    );

};

export default BackgroundDecoration;