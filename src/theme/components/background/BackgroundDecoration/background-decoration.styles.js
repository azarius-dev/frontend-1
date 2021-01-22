import styled from 'styled-components';

export const StyledBackgroundDecoration = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    user-select: none;
    pointer-events: none;
`;

export const StyledCircle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    box-shadow: ${ props => props.theme.shadows.primarySmall };
    border: 2px solid ${ props => props.theme.colors.primary };
    border-radius: 50%;
    transition: 0.2s ease all;
    opacity: .2;
    transform: translate(-50%, -50%);
`;