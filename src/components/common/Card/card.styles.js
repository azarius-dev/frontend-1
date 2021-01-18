import styled from 'styled-components';

export const StyledCard = styled.div`
    position: relative;
    box-sizing: border-box;
    display: flex;
    border-radius: 10px;
    border: 2px solid ${ props => props.theme.colors.primary };
    background-color: ${ props => props.theme.colors.off };
    box-shadow: ${ props => props.theme.shadows.primaryMedium };
    width: 100%;
    padding: 60px;
`;