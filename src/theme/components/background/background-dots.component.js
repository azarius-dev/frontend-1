import styled from 'styled-components';

export const StyledBackgroundDots = styled.div.attrs(() => ({
    'data-db-el': 'background-pattern',
}))`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    user-select: none;
    pointer-events: none;
    opacity: .08;
    stroke-width: 2px;
    stroke: white;
`;

const BackgroundDots = props => {

    const { size, distance } = props;

    const dimensions = (distance + size) * 2;

    return (
        <StyledBackgroundDots>
            <svg width='100%' height='100%'>
                {/*<pattern id='background-pattern' x='0' y='0' width={dimensions} height={dimensions} patternUnits='userSpaceOnUse'>
                    <line x1={distance / 2} y1={(distance / 2) + (size / 2)} x2={(distance / 2) + size} y2={(distance / 2) + (size / 2)} />
                    <line x1={(distance / 2) + (size / 2)} y1={distance / 2} x2={(distance / 2) + (size / 2)} y2={(distance / 2) + size} />
                </pattern>*/}
                <pattern id='background-pattern' x='0' y='0' width={dimensions} height={dimensions} patternUnits='userSpaceOnUse'>
                    <circle cx={distance / 2} cy={distance / 2} r={size} />
                    <circle cx={distance * 1.5 + size} cy={distance / 2} r={size} />
                    <circle cx={distance / 2} cy={distance * 1.5 + size} r={size} />
                    <circle cx={distance * 1.5 + size} cy={distance * 1.5 + size} r={size} />
                </pattern>
                <rect x='0' y='0' width='100%' height='100%' fill='url(#background-pattern)'></rect>
            </svg>
        </StyledBackgroundDots>
    );

}

export default BackgroundDots;