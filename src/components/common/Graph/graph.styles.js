import styled from 'styled-components';

export const StyledDebug = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

export const StyledGraph = styled.div`
    position: relative;
    display: flex;
    height: 420px;
`;

export const StyledGrid = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const StyledActiveLineContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    z-index: 1;
`;

export const StyledActiveLineX = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: white;
    backface-visibility: hidden;
`;


export const StyledGraphSVG = styled.svg`
    position: absolute;
    filter: drop-shadow(0 0 5px ${ props => props.theme.colors.secundary });
`;

export const StyledPolygon = styled.polygon`
    position: relative;
    stroke: ${ props => props.theme.colors.secundary };
    stroke-width: 2px;
    stroke-linejoin: round;
`;