import { useContext } from '@domains/Dapp/components/DisconnectedWalletCard/react';

/* import components */
import { Button, Card, StatusIndicator } from '@domains/Dapp/components/DisconnectedWalletCard/components/common';
import { DisplaySmall, TextSmall } from '@domains/Dapp/components/DisconnectedWalletCard/domains/Dapp/layout/Sidebar/SidebarLogo/domains/Dapp/layout/Sidebar/SidebarLogo/domains/Dapp/layout/Sidepanel/domains/Dapp/layout/PoolStake/theme';
/* import contexts */
import { WalletContext } from '@domains/Dapp/components/DisconnectedWalletCard/contexts';
/* import styles */
import { StyledDisconnectedWalletCard, StyledDisconnectedWalletDecoration, StyledContent, StyledContentHeading, StyledContentFooter } from './disconnectedwallet-card.styles';
/* import assets */
import { PowerOffIcon } from '@domains/Dapp/components/DisconnectedWalletCard/domains/Dapp/layout/Sidepanel/assets/icons';

const DisconnectedWalletCard = () => {

    const { wallet, walletMethods } = useContext(WalletContext);

    return (
        <StyledDisconnectedWalletCard
            data-db-el="disconnectedwallet-card"
        >
            <Card
                color="primary"
            >
                <StyledContent
                    data-db-el="disconnectedwallet-card-content"
                >
                    <StyledContentHeading
                        data-db-el="disconnectedwallet-card-content-heading"
                    >
                        <StatusIndicator
                            status="inactive"
                        />
                        <DisplaySmall
                            style={{ 
                                'fontSize': '34px'
                            }}
                        >
                            not connected
                        </DisplaySmall>
                    </StyledContentHeading>
                    <TextSmall>
                        Please connect to a MetaMask account to view this page
                    </TextSmall>
                    <StyledContentFooter
                        data-db-el="disconnectedwallet-card-content-footer"
                    >
                        <Button
                            variant="offset"
                            color="secundary"
                            isLoading={wallet.isConnecting}
                            disabled={wallet.isConnecting}
                            onClick={() => walletMethods.connectAccount()}
                        >
                            connect wallet
                        </Button>
                    </StyledContentFooter>
                </StyledContent>
                <StyledDisconnectedWalletDecoration 
                    data-db-el="disconnectedwallet-card-decoration"
                >
                    <PowerOffIcon />
                </StyledDisconnectedWalletDecoration>
            </Card>
        </StyledDisconnectedWalletCard>
    );

};

export default DisconnectedWalletCard;