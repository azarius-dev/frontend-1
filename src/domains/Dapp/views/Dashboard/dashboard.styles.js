import styled from '@domains/Dapp/views/Dashboard/styled-components';

export const StyledDashboardView = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 60px;
`;

export const StyledStatisticsGrid = styled.div`
    position: relative;
    display: grid;
    gap: 75px;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    grid-auto-rows: max-content;
    flex-grow: 1;
`;

export const StyledChartsGrid = styled.div`
    position: relative;
    display: grid;
    gap: 75px;
    grid-template-columns: repeat(auto-fit, minmax(425px, 1fr));
    grid-auto-rows: max-content;
    flex-grow: 1;
`;