import styled from 'styled-components';

export const StyledPoolsView = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 60px;
`;

export const StyledPoolsGrid = styled.div`
    position: relative;
    display: grid;
    gap: 75px;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    grid-auto-rows: max-content;
    flex-grow: 1;
`;