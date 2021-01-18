import styled from 'styled-components';

const DisplayMedium = styled.h2`
    position: relative;
    padding: 0;
    margin: 0;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 1px;
    color: ${ props => props.theme.colors.text };
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${ props => props.theme.colors.primary };
    text-shadow: ${ props => props.theme.shadows.primarySmall };
`;

export default DisplayMedium;