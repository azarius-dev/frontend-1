import styled from 'styled-components';

const DisplaySmall = styled.h2.attrs(props => ({
    content: props.children,
}))`
    position: relative;
    padding: 0;
    margin: 0;
    font-family: 'bladerunner', sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 100%;
    text-transform: lowercase;
    text-shadow: ${props => props.theme.shadows[props.color + 'Small']};
    color: ${ props => props.theme.colors[props.color] };
`;

export default DisplaySmall;