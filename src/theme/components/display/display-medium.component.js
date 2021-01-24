import styled from 'styled-components';

const DisplayMedium = styled.h2.attrs(props => ({
    'data-db-el': 'display-medium',
    content: props.children,
}))`
    position: relative;
    padding: 0;
    margin: 0;
    font-family: 'bladerunner', sans-serif;
    font-size: 32px;
    font-weight: 500;
    line-height: 100%;
    text-transform: lowercase;
    text-shadow: ${props => props.theme.shadows[props.color + 'Small']};
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${ props => props.theme.colors[props.color] };
`;

export default DisplayMedium;