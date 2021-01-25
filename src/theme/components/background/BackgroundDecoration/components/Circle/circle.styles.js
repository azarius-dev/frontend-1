import styled from 'styled-components';

export const StyledCircle = styled.div`
    position: absolute;
    box-shadow: ${ props => props.theme.shadows[props.color + 'Medium'] };
    border: 2px solid ${ props => props.theme.colors[props.color] };
    border-radius: 50%;
    width: ${ props => props.size }px;
    height: ${ props => props.size }px;
`;