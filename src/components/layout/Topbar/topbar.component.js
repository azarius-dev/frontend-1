import { useContext } from 'react';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector, NoEthereumProviderError, UserRejectedRequestError } from '@web3-react/injected-connector';

/* import components */
import TopbarBorderSVG from './TopbarBorderSVG/topbar-bordersvg.component';
import { Button } from '../../common';
import { DisplayLarge } from '../../../theme/components';
/* import contexts */
import { UIContext } from '../../../contexts';
/* import styles */
import { StyledTopbar, StyledAccountAddress } from './topbar.styles';

const Topbar = () => {
    
    const injected = new InjectedConnector({ supportedChainIds: [1] });

    const web3react = useWeb3React();
    const { account, activate, active, error } = web3react;

    const { ui } = useContext(UIContext);

    return (
        <StyledTopbar>
            <TopbarBorderSVG />
            <DisplayLarge>
                {ui.activeRoute.label}
            </DisplayLarge>
            {active ? (
                <StyledAccountAddress>{account}</StyledAccountAddress>
            ) : (
                <Button
                    onClick={ () => activate(injected) }
                >
                    connect wallet
                </Button>
            )}
        </StyledTopbar>
    );

};

export default Topbar;