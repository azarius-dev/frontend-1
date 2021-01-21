import styled from 'styled-components';

export const StyledCard = styled.div`
    position: relative;
    box-sizing: border-box;
    display: flex;
    border-radius: 10px;
    box-shadow: ${ props => props.theme.shadows[props.color + 'Medium '] };
    flex-grow: 1;
`;

export const StyledBackground = styled.div`
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 10px;
    background-color: ${props => props.theme.colors[props.color]}0D;
    background-image: linear-gradient(120deg, ${props => props.theme.colors[props.color]}26 0%, ${props => props.theme.colors[props.color]}00 80%);
    backdrop-filter: blur(2px);
`;

export const StyledBorder = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid ${props => props.theme.colors[props.color]};
    border-radius: 10px;
`;

export const StyledContent = styled.div`
    position: relative;
    z-index: 2;
    flex-grow: 1;
`;