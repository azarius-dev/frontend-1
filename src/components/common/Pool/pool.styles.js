import styled from 'styled-components';

export const StyledPool = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StyledPoolHeader = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 14px;
    gap: 12px;
`;

export const StyledPoolBody = styled.div`
    position: relative;
    display: flex;
    gap: 15px;
`;

export const StyledPoolFooter = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding-top: 30px;
`;

export const StyledPoolLinks = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    padding-top: 15px;
`;

export const StyledPoolAnchor = styled.a`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    fill: inherit;
    color: inherit;
    outline: none!important;
`;