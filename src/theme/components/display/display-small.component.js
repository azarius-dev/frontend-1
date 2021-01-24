import styled from 'styled-components';

const DisplaySmall = styled.h3.attrs(props => ({
    'data-db-el': 'display-small',
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
    color: ${ props => props.theme.colors[props.color] };
    text-shadow: ${props => props.theme.shadows[props.color + 'Small']};
`;

DisplaySmall.defaultProps = {
    color: 'text'
};

export default DisplaySmall;