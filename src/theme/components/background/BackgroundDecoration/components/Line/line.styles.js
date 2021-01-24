import styled from 'styled-components';

export const StyledLine = styled.div`
    position: absolute;
    box-shadow: ${ props => props.theme.shadows[props.color + 'Medium'] };
    border: 2px solid ${ props => props.theme.color[props.color] };
    border-radius: 50%;
    width: ${ props => props.size };
    height: ${ props => props.size };
`;