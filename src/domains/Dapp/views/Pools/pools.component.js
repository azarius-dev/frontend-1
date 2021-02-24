import React, { Fragment } from 'react';
import { useWeb3React } from '@web3-react/core';

import { Section, DisconnectedWalletCard, Grid } from '@dapp/components';
/*import { DegovDailpCard, DaiCard, DebaseDailpCard, DegovEthCard, DM88Card } from './Pools/incentivizers';
import { ThresholdCounterCard, ThresholdCounterV2Card } from './Pools/stabilizers';*/
import { StyledPools } from './pools.styles';

const Pools = ()  => {

    const { active } = useWeb3React();

    /*const renderIncentivizerPools = () => {
        if (!active) return <DisconnectedWalletCard />;
        return (
            <React.Fragment>
                <StyledPoolsGrid
                    minWidthCol="340px"
                >
                    <DegovDailpCard />
                    <DaiCard />
                    <DebaseDailpCard />
                </StyledPoolsGrid>
                <StyledPoolsGrid
                    minWidthCol="680px"
                >
                    <DegovEthCard />
                    <DM88Card />
                </StyledPoolsGrid>
            </React.Fragment>
        );
    };
    const renderStabilizerPools = () => {
        if (!active) {return <DisconnectedWalletCard />}
        return (
            <StyledPoolsGrid
                minWidthCol="680px"
            >
                <ThresholdCounterCard />
                <ThresholdCounterV2Card />
            </StyledPoolsGrid>
        )
    };*/

    return (
        <Fragment>
            <Section label="Incentivizers">
                <DisconnectedWalletCard />
            </Section>
            <Section label="Stabilizers">
                <DisconnectedWalletCard />
            </Section>
        </Fragment>
    );

};

export default Pools;