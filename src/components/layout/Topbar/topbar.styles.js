import styled from 'styled-components';
import { breakpoints } from '../../../theme';

/* main style */
export const StyledTopbar = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    padding-left: 60px;
    padding-top: 10px;
    top: -8px;
    flex-shrink: 0;
    margin: 45px 45px 0 45px;
    gap: 30px;

    @media ${breakpoints.mobile} {
        height: 80px;
        padding-left: 40px;
        margin: 20px 20px 0 20px;
    }
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