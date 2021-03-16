import styled from 'styled-components';

export const StyledDivider = styled.div`
    position: relative;
    height: 2px;
    background-color: ${props => props.theme.colors[props.color + 'Light']};
    box-shadow: ${props => props.theme.colors[props.color + 'Text']};
`;