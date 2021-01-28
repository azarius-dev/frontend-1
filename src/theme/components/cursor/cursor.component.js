import { useState, useEffect } from 'react';

/* import hooks */
import { useMousePosition } from '../../../hooks';
/* import styles */
import { StyledCursor } from './cursor.styles';

const windowSize = {
    w: window.innerWidth,
    h: window.innerHeight
};

const Cursor = () => {

    const [ position, setPosition ] = useState(null);

    const mousePosition = useMousePosition();

    useEffect(() => {
        setPosition({
            x: (mousePosition.x - (windowSize.w / 2)) / (windowSize.w / 2),
            y: (mousePosition.y - (windowSize.h / 2)) / (windowSize.h / 2),
        });
    }, [mousePosition]);

    console.log(mousePosition);

    return (
        <StyledCursor />
    );

};

export default Cursor;