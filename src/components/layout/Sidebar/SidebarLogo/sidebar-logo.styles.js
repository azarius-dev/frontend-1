import styled from 'styled-components';

export const StyledSidebarLogo = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 115px;
    gap: 20px;
    user-select: none;
    text-decoration: none;
    padding-left: 20px;
`;

export const StyledImgLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: 3px solid ${ props => props.theme.colors.text };
    border-radius: 50%;
    box-shadow: ${ props => props.theme.shadows.secundaryMedium };
`;

export const StyledImgLogo = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

export const StyledTextLogo = styled.div`
    font-size: 26px;
`;