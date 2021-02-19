import { useContext, useRef } from 'domains/Dapp/layout/Topbar/react';
import { useWeb3React } from 'domains/Dapp/layout/Topbar/@web3-react/core';

/* import components */
import TopbarBorderSVG from './TopbarBorderSVG/topbar-bordersvg.component';
import { Button, Card, StatusIndicator, Tooltip } from 'domains/Dapp/layout/Topbar/domains/Dapp/views/DashboardView/components/common';
import { DisplayLarge } from 'domains/Dapp/layout/Topbar/theme/components';
/* import contexts */
import { UIContext, WalletContext } from 'domains/Dapp/layout/Topbar/domains/Dapp/views/DashboardView/contexts';
/* import hooks */
import { useReferenceSize } from 'domains/Dapp/layout/Topbar/hooks';
/* import styles */
import { StyledTopbar, StyledAccountContainer, StyledAccountAddress } from './topbar.styles';

const Topbar = () => {

    const topbarRef = useRef(null);

    const { account, active } = useWeb3React();
    const topbarSize = useReferenceSize(topbarRef);

    const { ui } = useContext(UIContext);
    const { wallet, walletMethods } = useContext(WalletContext);

    const renderConnectButton = () => {
        if (ui.isMobile) {return null}
        if (active) {
            return (
                <StyledAccountContainer
                    data-db-el="topbar-account-container"
                >
                    <Tooltip
                        message="Metamask connected"
                        position="left-center"
                    >
                        <StatusIndicator
                            status="active"
                        />
                    </Tooltip>
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
            );
        }
        return (
            <Button
                variant="offset"
                color="secundary"
                isLoading={wallet.isConnecting}
                disabled={wallet.isConnecting}
                onClick={ () => walletMethods.connectAccount() }
            >
                connect wallet
            </Button>
        );
    };

    return (
        <StyledTopbar
            ref={topbarRef}
            data-db-el="topbar"
        >
            <TopbarBorderSVG 
                data-db-el="topbar-border-svg"
                parentSize={topbarSize}
            />
            <DisplayLarge>
                {ui.activeRoute.label}
            </DisplayLarge>
            {renderConnectButton()}
        </StyledTopbar>
    );

};

export default Topbar;