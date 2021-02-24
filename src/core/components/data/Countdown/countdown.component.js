import { Fragment, useState, useEffect } from 'react';

import { secondsToDhms } from '@utils';
import { DisplaySmall } from '@core/components';
import {
    StyledCountdown,
    StyledUnit,
    StyledTime
} from './countdown.styles';

const Countdown = ({ endDate, onEnd }) => {

    const [ counter, setCounter ] = useState((Date.parse(endDate) - Date.now()) / 1000);

    useEffect(() => {
        let timeoutID;
        if (counter > 0) {
            timeoutID = setTimeout(() => {
                setCounter(counter - 1)
            }, 1000)
        } else onEnd && onEnd()
        return () => {
            clearTimeout(timeoutID);
        }
    }, [counter]);

    return (
        <StyledCountdown>
            {secondsToDhms(counter).map((unit, i) => {
                const { label, value } = unit;
                return (
                    <Fragment>
                        {i !== 0 && <StyledTime>:</StyledTime>}
                        <StyledUnit key={`unit-${i}`}>
                            <StyledTime>{value}</StyledTime>
                            <DisplaySmall color="primary">{label}</DisplaySmall>
                        </StyledUnit>
                    </Fragment>
                );
            })}
        </StyledCountdown>
    );
};

export default Countdown;