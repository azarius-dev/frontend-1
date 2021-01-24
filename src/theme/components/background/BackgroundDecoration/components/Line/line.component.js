/* import styles */
import { StyledLine } from './line.styles';

const Line = props => {

    const { position, size, color } = props;
    const { x, y } = position;

    return (
        <StyledLine
            color={color}
            size={size}
        >

        </StyledLine>
    );

};

export default Line;