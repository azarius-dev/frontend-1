import { useWeb3React } from '@web3-react/core';

/* import components */
import { IncentivizerPool1, IncentivizerPool2, IncentivizerPool3 } from './Pools/incentivizers';
import { Section } from '../../layout';
import { DisconnectedWalletCard } from '../../common';
/* import styles */
import { StyledPoolsView, StyledPoolsGrid } from './pools-view.styles';

const PoolsView = ()  => {

    const { active } = useWeb3React();

    const renderStabilizerPools = () => {
        if (!active) {return <DisconnectedWalletCard />}
        return (
            <StyledPoolsGrid>

            </StyledPoolsGrid>
        )
    };

    const renderIncentivizerPools = () => {
        if (!active) {return <DisconnectedWalletCard />}
        return (
            <StyledPoolsGrid>
                <IncentivizerPool1 />
                
            </StyledPoolsGrid>
        );
    };

    return (
        <StyledPoolsView>
            <Section
                color="secundary"
                label="Incentivizers"
            >
                {renderIncentivizerPools()}
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