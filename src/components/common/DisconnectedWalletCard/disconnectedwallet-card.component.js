import { useContext } from 'react';

/* import components */
import { Button, Card, StatusIndicator } from '../';
import { DisplaySmall, TextSmall } from '../../../theme';
/* import contexts */
import { WalletContext } from '../../../contexts';
/* import styles */
import { StyledDisconnectedWalletCard, StyledDisconnectedWalletDecoration, StyledContent, StyledContentHeading, StyledContentFooter } from './disconnectedwallet-card.styles';
/* import assets */
import { PowerOffIcon } from '../../../assets/icons';

const DisconnectedWalletCard = () => {

    const { walletMethods } = useContext(WalletContext);

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
                                'font-size': '34px'
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
                            color="secundary"
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