import { useContext } from 'react';
import { useWeb3React } from '@web3-react/core';

/* import components */
import TopbarBorderSVG from './TopbarBorderSVG/topbar-bordersvg.component';
import { Button, Card, StatusIndicator } from '../../common';
import { DisplayLarge } from '../../../theme/components';
/* import contexts */
import { UIContext, WalletContext } from '../../../contexts';
/* import styles */
import { StyledTopbar, StyledAccountContainer, StyledAccountAddress } from './topbar.styles';
/* import assets */
import { PowerOffIcon } from '../../../assets/icons';

const Topbar = () => {

    const { account, active } = useWeb3React();

    const { ui } = useContext(UIContext);
    const { wallet, walletMethods } = useContext(WalletContext);

    return (
        <StyledTopbar
            data-db-el="topbar"
        >
            <TopbarBorderSVG 
                data-db-el="topbar-border-svg"
            />
            <DisplayLarge>
                {ui.activeRoute.label}
            </DisplayLarge>
            {active ? (
                <StyledAccountContainer
                    data-db-el="topbar-account-container"
                >
                    <StatusIndicator
                        status="active"
                    />
                    <Card
                        title={account}
                        color="secundary"
                        status="active"
                        activeParts={2}
                    >   
                        <StyledAccountAddress>
                            {account}
                        </StyledAccountAddress>
                    </Card>
                </StyledAccountContainer>
            ) : (
                <Button
                    color="secundary"
                    isLoading={wallet.isConnecting}
                    disabled={wallet.isConnecting}
                    onClick={ () => walletMethods.connectAccount() }
                >
                    connect wallet
                </Button>
            )}
        </StyledTopbar>
    );

};

export default Topbar;