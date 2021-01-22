import { useState, useEffect } from 'react';

/* import hooks */
import { useMousePosition } from '../../../../hooks';
/* import styles */
import { StyledBackgroundDecoration, StyledCircle } from './background-decoration.styles';

const BackgroundDecoration = () => {

    const [ centerOffset, setCenterOffset ] = useState({ x: 0, y: 0 });

    const mousePosition = useMousePosition();

    const windowSize = {
        w: window.innerWidth,
        h: window.innerHeight
    };

    const startPosition1 = {
        x: .2,
        y: .3
    }

    const startPosition2 = {
        x: .5,
        y: .5
    }

    console.log(centerOffset);

    useEffect(() => {
        setCenterOffset({
            x: (windowSize.w / 2) / mousePosition.x,
            y: (windowSize.h / 2) / mousePosition.y,
        });
    }, [mousePosition]);

    return (
        <StyledBackgroundDecoration>
            <StyledCircle 
                style={{
                    top: startPosition1.y * centerOffset.y * 100 + '%',
                    left: startPosition1.x * centerOffset.x * 100 + '%'
                }}
            />
            <StyledCircle 
                style={{
                    top: startPosition2.y * centerOffset.y * 100 + '%',
                    left: startPosition2.x * centerOffset.x * 100 + '%'
                }}
            />
        </StyledBackgroundDecoration>
    );

};

export default BackgroundDecoration;