import React from 'react';
import { useWeb3React } from '@web3-react/core';

/* import components */
import { Section, DisconnectedWalletCard } from 'components/layout';
import { DegovDailpCard, DaiCard, DebaseDailpCard, DegovEthCard, DM88Card } from './Pools/incentivizers';
import { ThresholdCounterCard, ThresholdCounterV2Card } from './Pools/stabilizers';
/* import styles */
import { StyledPoolsView, StyledGridsWrapper, StyledPoolsGrid } from './pools-view.styles';

const PoolsView = ()  => {

    const { active } = useWeb3React();

    const renderIncentivizerPools = () => {
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
    };

    return (
        <StyledPoolsView>
            <Section
                color="secundary"
                label="Incentivizers"
            >
                <StyledGridsWrapper>
                    {renderIncentivizerPools()}
                </StyledGridsWrapper>
            </Section>
            <Section
                color="secundary"
                label="Stabilizers"
            >
                {renderStabilizerPools()}
            </Section>
        </StyledPoolsView>
    );

};

export default PoolsView;