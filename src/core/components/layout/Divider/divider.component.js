import { StyledDivider } from './divider.styles';

const Divider = ({
    color = 'primary',
    gap = '0px',
    direction = 'horizontal'
}) => {

    return (
        <StyledDivider
            color={color}
            style={{
                margin: `0 ${gap}`
            }}
        />
    );

};

export default Divider;