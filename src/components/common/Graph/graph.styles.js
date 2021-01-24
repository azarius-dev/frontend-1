import styled from 'styled-components';

export const StyledGraph = styled.div`
    position: relative;
`;

export const StyledGraphSVG = styled.svg`
    position: relative;
`;

export const StyledPolygon = styled.polygon`
    position: relative;
    fill: none;
    stroke: ${ props => props.theme.colors.secundary };
    stroke-width: 2px;
`;