import React, { useEffect, useContext } from 'react';

/* import components */
import Snackbar from './snackbar.component';
/* import context */
import { WalletContext } from '@dapp/contexts';
/* import hooks */
import useSnackbar from './snackbar.hook';
/* import styles */
import { StyledSnackbarContainer } from './snackbar.styles';

/* create context */
const SnackbarContext = React.createContext({});

const SnackbarProvider = ({ maxQueue, children }) => {

    const { snackbarQueue, handleSnackbarOptions, handleSnackbarQueue } = useSnackbar();

    const { wallet } = useContext(WalletContext);
    const { isUnsupportedChainIdError, isNoEthereumProviderError, isUserRejectedRequestError } = wallet;

    const renderSnackbarQueue = () => {
        if (!snackbarQueue || snackbarQueue.length === 0) {return null}
        return (
            <StyledSnackbarContainer>
                {snackbarQueue.map((snackbar, i) => {
                    const { id, message, status, position, isClosable } = snackbar;
                    return (
                        <Snackbar
                            key={id}
                            id={id}
                            message={message}
                            status={status}
                            position={position}
                            isClosable={isClosable}
                        />
                    );
                })}
            </StyledSnackbarContainer>
        );
    };

    useEffect(() => {
        handleSnackbarOptions({
            maxQueue: maxQueue
        });
    }, [maxQueue]);
    useEffect(() => {
        if (isUnsupportedChainIdError) {
            handleSnackbarQueue({
                message: 'Please connect to main ethereum network',
                status: 'error'
            });
        }
        if (isNoEthereumProviderError) {
            handleSnackbarQueue({
                message: 'Metamask not found, please install the extension',
                status: 'error'
            });
        }
        if (isUserRejectedRequestError) {
            handleSnackbarQueue({
                message: 'Declined Metamask account connection',
                status: 'error'
            });
        }
    }, [isUnsupportedChainIdError, isNoEthereumProviderError, isUserRejectedRequestError]);

    return (
        <SnackbarContext.Provider value={{ snackbarQueue, handleSnackbarQueue }}>
            {children}
            {renderSnackbarQueue()}
        </SnackbarContext.Provider>
    );
};

export { SnackbarContext, SnackbarProvider };