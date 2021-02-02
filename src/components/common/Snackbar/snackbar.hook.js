import { useState, useEffect } from 'react';
import _ from 'lodash';

export default () => {

    const [ snackbarOptions, setSnackbarOptions ] = useState({});
    const [ snackbarQueue, setSnackbarQueue ] = useState([]);
    const [ lastSnackbar, setLastSnackbar ] = useState(null);

    const defaultOptions = {
        maxQueue: 4
    };

    const defaultData = {
        delay: 3000,
        message: '',
        status: 'error',
        position: 'top-right',
        isClosable: true
    };

    const handleSnackbarOptions = options => {
        const localSnackbarOptions = Object.assign({}, defaultOptions, options);
        setSnackbarOptions(localSnackbarOptions);
    };

    const handleSnackbarQueue = data => {
        if (!data) { setSnackbarQueue([]) }
        const { maxQueue } = snackbarOptions;
        /*if (data.id) {
            const index = snackbarQueue.findIndex(snackbar => snackbar.id === lastSnackbar.id);
            if (index < 0) {return}
            //snackbarQueue.splice(index, 1);
            //return setSnackbarQueue(snackbarQueue);
        } else {
            data.id = new Date();
        }*/
        data.id = new Date();
        const localSnackbarQueue = _.cloneDeep(snackbarQueue);
        const localSnackbarData = Object.assign({}, defaultData, data);
        localSnackbarQueue.push(localSnackbarData);
        if (localSnackbarQueue.length > maxQueue) {
            localSnackbarQueue.shift();
        }
        setSnackbarQueue(localSnackbarQueue);
        setLastSnackbar(localSnackbarData);
    };

    useEffect(() => {
        if (!snackbarQueue || snackbarQueue.length === 0 || !lastSnackbar) {return}
        setTimeout(() => {
            const index = snackbarQueue.findIndex(snackbar => snackbar.id === lastSnackbar.id);
            if (index < 0) {return}
            snackbarQueue.splice(index, 1);
            setSnackbarQueue(snackbarQueue);
        }, lastSnackbar.delay);
    }, [lastSnackbar]);

    return { snackbarQueue, handleSnackbarOptions, handleSnackbarQueue };
};