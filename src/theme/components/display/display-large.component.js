import styled from 'styled-components';

const DisplayLarge = styled.h1.attrs(props => ({
    'data-db-el': 'display-large',
    content: props.children,
}))`
    position: relative;
    padding: 0;
    margin: 0;
    font-family: 'bladerunner', sans-serif;
    font-size: 54px;
    font-weight: 500;
    text-transform: lowercase;
    color: ${ props => props.theme.colors.text };
    background-image: linear-gradient(30deg, ${props => props.theme.colors.text} 30%, ${props => props.theme.colors.text}10 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &:before {
        content: attr(content);
        position: absolute;
        top: 3px;
        left: -3px;
        z-index: -1;
        text-shadow: ${props => props.theme.shadows.primarySmall}, ${props => props.theme.shadows.primaryMedium};
        color: ${ props => props.theme.colors.primary };
        -webkit-text-fill-color: ${ props => props.theme.colors.primary };
    }
`;

export default DisplayLarge;