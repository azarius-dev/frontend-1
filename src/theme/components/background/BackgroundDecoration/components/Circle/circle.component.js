/* import styles */
import { StyledCircle } from './circle.styles';

const Circle = props => {

    const { style, size, color } = props;

    return (
        <StyledCircle
            color={color}
            size={size}
            style={style}
        >

        </StyledCircle>
    );

};

export default Circle;