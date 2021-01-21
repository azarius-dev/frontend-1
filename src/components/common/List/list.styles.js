import styled from 'styled-components';

export const StyledList = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const StyledListItem = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 0 34px;

    &:nth-child(odd) {
        background-color: ${props => props.theme.colors.background}33;
    }
`;

export const StyledItemLabel = styled.div`
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
`;

export const StyledItemValue = styled.div`
    font-size: 16px;
    font-weight: 500;
    opacity: .4;
`;