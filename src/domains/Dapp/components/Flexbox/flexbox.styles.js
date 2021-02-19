import styled from 'domains/Dapp/components/Flexbox/styled-components';

export const StyledFlexBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: ${ props => props.direction };
    gap: ${ props => props.gap };
`;