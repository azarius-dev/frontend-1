import styled from 'styled-components';

export const StyledBaseLayout = styled.div`
    position: relative;
    display: flex;
    flex-grow: 1;
    padding: 0px;
`;

export const StyledLayoutBody = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const StyledLayoutView = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    padding: 80px 45px 45px 45px;

    &::-webkit-scrollbar {
        display: none;
    }
`;