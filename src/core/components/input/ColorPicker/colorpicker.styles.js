import styled, { css } from 'styled-components';

export const StyledColorPicker = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 250px;
    height: 320px;
    border-radius: 4px;
    background-color: ${ props => props.theme.background };
    box-shadow: ${ props => props.theme.shadows.large };
    z-index: 2000;
`;

export const StyledSaturationBlock = styled.div`
    position: relative;
    height: 150px;
`;

export const StyledHueSlider = styled.div`
    position: relative;
    height: 20px;
`;