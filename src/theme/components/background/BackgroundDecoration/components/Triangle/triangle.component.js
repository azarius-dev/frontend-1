/* import styles */
import { StyledTriangle } from './triangle.styles';

const Triangle = props => {

    const { position, size, color } = props;
    const { x, y } = position;

    return (
        <StyledTriangle
            color={color}
            size={size}
        >

        </StyledTriangle>
    );

};

export default Triangle;