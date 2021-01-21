import styled from 'styled-components';

export const StyledBaseLayout = styled.div`
    position: relative;
    display: flex;
    flex-grow: 1;
    padding: 45px;
    gap: 60px;
`;

export const StyledLayoutBody = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 80px;
`;

export const StyledLayoutView = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;