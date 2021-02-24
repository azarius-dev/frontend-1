import { useContext } from 'react';

import { CloseIcon } from '@assets';
import { IconButton } from '@core/components';

import { SnackbarContext } from './snackbar.context';
import { StyledSnackbar, StyledCloseAction } from './snackbar.styles';

const Snackbar = props => {

    const { id, message, status, position, isClosable } = props;

    const { handleSnackbarQueue } = useContext(SnackbarContext);

    const renderCloseAction = () => {
        if (!isClosable) {return null}
        return (
            <StyledCloseAction>
                <IconButton
                    size="small"
                    edge="rounded"
                    onClick={() => console.log('is bugged')}
                >
                    <CloseIcon />
                </IconButton>
            </StyledCloseAction>
        );
    };

    return (
        <StyledSnackbar
            status={status}
        >
            {message}
            {renderCloseAction()}
        </StyledSnackbar>
    );
};

export default Snackbar;