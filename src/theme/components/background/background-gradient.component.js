import styled from 'styled-components';

const BackgroundGradient = styled.div.attrs(() => ({
    'data-db-el': 'background-gradient',
}))`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    user-select: none;
    pointer-events: none;
    background-image: linear-gradient(110deg, ${ props => props.theme.colors.secundary } 0%, ${ props => props.theme.colors.background } 27%, ${ props => props.theme.colors.background } 76%, ${ props => props.theme.colors.primary } 100%);
    opacity: .15;
`;

export default BackgroundGradient;