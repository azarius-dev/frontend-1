import styled from 'styled-components';

export const StyledSidebarLogo = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid ${ props => props.theme.colors.text };
    border-radius: 50%;
    box-shadow: ${ props => props.theme.shadows.textMedium };
    width: 72px;
    height: 72px;
`;

export const StyledLogoImg = styled.img`
    width: 60px;
    height: 60px;
`;