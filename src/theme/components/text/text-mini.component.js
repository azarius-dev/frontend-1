import styled from 'styled-components';

const TextMini = styled.div`
    position: relative;
    font-size: 13px;
    font-weight: 400;
    line-height: 150%;
    color: ${ props => props.theme.colors.text };
`;

export default TextMini;