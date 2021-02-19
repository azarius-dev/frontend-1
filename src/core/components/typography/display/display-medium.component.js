import Display from './display.component';

const DisplayMedium = Display.withComponent('h2').attrs(props => ({
    'data-db-el': 'display-medium',
    content: props.children,
}))`
    font-size: 28px;
    font-weight: 500;
    text-transform: lowercase;
    text-shadow: ${props => props.theme.shadows[props.color + 'Small']};
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${ props => props.theme.colors[props.color] };
`;

export default DisplayMedium;