import Display from './display.component';
import { breakpoints } from '../../consts';

const DisplayLarge = Display.h1.attrs(props => ({
    'data-db-el': 'display-large',
    content: props.children,
}))`
    font-size: 45px;
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

    @media ${breakpoints.mobile} {
        font-size: 30px;
    }
`;

export default DisplayLarge;