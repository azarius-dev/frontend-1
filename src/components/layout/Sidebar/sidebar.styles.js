import styled from 'styled-components';

/* main style */
export const StyledSidebar = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 240px;
    height: 100%;
    flex-shrink: 0;
`;

/* header */
export const StyledSidebarHeader = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    padding-top: 20px;
`;
export const StyledLogo = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
`;

/* navigation */
export const StyledSidebarNav = styled.div`
    position: relative;
    display: flex;
`;

/* footer */
export const StyledSidebarFooter = styled.div`
    position: relative;
    padding-bottom: 60px;
`;