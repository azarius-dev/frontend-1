import styled from '@domains/Dapp/views/Pools/styled-components';

export const StyledPoolsView = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 60px;
`;

export const StyledGridsWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 60px;
    flex-grow: 1;
`;

export const StyledPoolsGrid = styled.div`
    position: relative;
    display: grid;
    gap: 75px;
    grid-template-columns: repeat(auto-fit, minmax( ${props => props.minWidthCol ? props.minWidthCol : 0} , 1fr));
    grid-auto-rows: max-content;
    flex-grow: 1;
`;