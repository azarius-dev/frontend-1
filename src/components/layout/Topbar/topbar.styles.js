import styled from 'styled-components';

/* main style */
export const StyledTopbar = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 115px;
    padding-left: 60px;
    top: -8px;
    flex-shrink: 0;
`;

export const StyledAccountContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    user-select: none;
`;

export const StyledAccountAddress = styled.div`
    position: relative;
    width: 130px;
    padding: 12px 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;