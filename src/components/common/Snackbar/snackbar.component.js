import { useContext } from 'react';

/* import components */
import { IconButton } from '../';
/* import context */
import { SnackbarContext } from './snackbar.context';
/* import styles */
import { StyledSnackbar, StyledCloseAction } from './snackbar.styles';
/* import assets */
import { CloseIcon } from '../../../assets/icons';

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