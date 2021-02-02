import styled from 'styled-components';

export const StyledRebaseView = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 60px;
`;

export const StyledVariablesGrid = styled.div`
    position: relative;
    display: grid;
    gap: 75px;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    grid-auto-rows: max-content;
    flex-grow: 1;
`;

export const StyledRebaseGridItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 60px;
`;