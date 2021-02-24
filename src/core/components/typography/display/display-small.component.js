import styled from 'styled-components';

const DisplaySmall = styled.h3.attrs(props => ({
    content: props.children,
}))`
    position: relative;
    padding: 0;
    margin: 0;
    font-family: 'bladerunner', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 100%;
    text-transform: lowercase;
    color: ${props => props.color ? props.theme.colors[props.color + 'Light'] : props.theme.colors.text};
    text-shadow: ${props => props.color ? props.theme.shadows[props.color + 'Text'] : props.theme.shadows.base};
`;

DisplaySmall.defaultProps = {
    color: 'text'
};

export default DisplaySmall;