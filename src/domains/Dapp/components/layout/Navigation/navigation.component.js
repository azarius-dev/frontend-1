import { useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { UIContext } from '@dapp/contexts';
import {
    StyledNavigation,
    StyledButton,
    StyledButtonIcon,
    StyledButtonText,
    StyledButtonBorder
} from './navigation.styles';

const Navigation = ({ routes }) => {

    const { ui, uiMethods } = useContext(UIContext);

    const renderNavigationButtons = () => {
        if (!routes) {return null}
        return routes.map(route => {
            const { label, path, icon } = route;
            const isActive = path === ui.activeRoute.path;
            return (
                <Link
                    key={label} 
                    to={path}
                    style={{ textDecoration: 'none' }}
                    onClick={() => uiMethods.detectActiveRoute(path)}
                >
                    <StyledButton>
                        <StyledButtonIcon>
                            {icon}
                        </StyledButtonIcon>
                        <StyledButtonText>
                            {label}
                        </StyledButtonText>
                        {isActive && (
                            <StyledButtonBorder />
                        )}
                    </StyledButton>
                </Link>
            );
        });
    };

    return (
        <StyledNavigation>
            {renderNavigationButtons()}
        </StyledNavigation>
    );

};

export default Navigation;