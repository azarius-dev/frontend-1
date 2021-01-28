import styled from 'styled-components';
import { crossPNG } from '../../../assets/img';


export const StyledDebug = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

export const StyledGraph = styled.div`
    box-sizing: border-box;
    position: relative;
    display: flex;
    height: 420px;
    padding-top: 60px;
    cursor: url(${crossPNG}), auto;
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
    border-left: 1px dashed ${props => props.theme.colors.secundary}33;
    backface-visibility: hidden;
`;

export const StyledActiveLineY = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    border-top: 1px dashed ${props => props.theme.colors.secundary}33;
    backface-visibility: hidden;
`;

export const StyledActiveDot = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    background-color: ${props => props.theme.colors.secundary}22;
    border-radius: 50%;
    transform: translate(-50%, -50%);

    :before {
        content: '';
        display: flex;
        background-color: ${props => props.theme.colors.secundary};
        border-radius: 50%;
        width: 8px;
        height: 8px;
    }

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

export const StyledGraphTooltip = styled.div`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.background};
    box-shadow: ${ props => props.theme.shadows.background };
    border-radius: 5px;
    padding: 10px;
    z-index: 10;
    white-space: nowrap;
`;