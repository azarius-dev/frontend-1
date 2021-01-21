import styled from 'styled-components';

export const StyledBackgroundDots = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    user-select: none;
    pointer-events: none;
    opacity: .06;
`;

const BackgroundDots = props => {

    const { size, distance } = props;

    const dimensions = (distance + size) * 2;

    return (
        <StyledBackgroundDots>
            <svg width='100%' height='100%'>
                <pattern id='background-dots' x='0' y='0' width={dimensions} height={dimensions} patternUnits='userSpaceOnUse'>
                    <circle cx={distance / 2} cy={distance / 2} r={size} />
                    <circle cx={distance * 1.5 + size} cy={distance / 2} r={size} />
                    <circle cx={distance / 2} cy={distance * 1.5 + size} r={size} />
                    <circle cx={distance * 1.5 + size} cy={distance * 1.5 + size} r={size} />
                </pattern>
                <rect x='0' y='0' width='100%' height='100%' fill='url(#background-dots)'></rect>
            </svg>
        </StyledBackgroundDots>
    );

}

export default BackgroundDots;