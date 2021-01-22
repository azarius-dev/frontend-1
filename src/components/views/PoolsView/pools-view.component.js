import { useWeb3React } from '@web3-react/core';

/* import components */
import Pool from './Pool/pool.component';
import { Section } from '../../layout';
import { DisconnectedWalletCard } from '../../common';
/* import assets */
import { ExchangeIcon, SchoolIcon, ContentCopyIcon } from '../../../assets/icons';
/* import styles */
import { StyledPoolsView, StyledPoolsGrid } from './pools-view.styles';

const PoolsView = ()  => {

    const { active } = useWeb3React();

    const tempPoolData = [
        ['Reward', '0.06%'],
        ['Block duration', '44.800 blocks'],
        ['Pool enabled', 'True'],
        ['Pool Lp Limit Enabled', 'True'],
        ['User Lp Limit Enabled', 'True'],
        ['Example', 'True'],
        ['Example', 'False'],
    ];

    const tempLinksData = [
        {
            icon: <ExchangeIcon />,
            url:'',
            tooltip: ''
        },
        {
            icon: <SchoolIcon />,
            url:'',
            tooltip: ''
        },
        {
            icon: <ContentCopyIcon />,
            url:'',
            tooltip: ''
        }
    ];

    const renderStabilizerPools = () => {
        if (!active) {return <DisconnectedWalletCard />}
        return (
            <StyledPoolsGrid>
                <Pool 
                    label="stabilizer pool 1"
                    status="active"
                    data={tempPoolData}
                    links={tempLinksData}
                />
                <Pool 
                    label="stabilizer pool 2"
                    status="inactive"
                    data={tempPoolData}
                    links={tempLinksData}
                />
            </StyledPoolsGrid>
        )
    };

    const renderIncentivizerPools = () => {
        if (!active) {return <DisconnectedWalletCard />}
        return (
            <StyledPoolsGrid>
                <Pool 
                    label="pool 1"
                    status="active"
                    data={tempPoolData}
                    links={tempLinksData}
                />
                <Pool 
                    label="pool 2"
                    status="inactive"
                    data={tempPoolData}
                    links={tempLinksData}
                />
                <Pool 
                    label="pool 3"
                    status="inactive"
                    data={tempPoolData}
                    links={tempLinksData}
                />
            </StyledPoolsGrid>
        )
    };

    return (
        <StyledPoolsView>
            <Section
                color="secundary"
                label="Stabilizers"
            >
                {renderStabilizerPools()}
            </Section>
            <Section
                color="secundary"
                label="Incentivizers"
            >
                {renderIncentivizerPools()}
            </Section>
        </StyledPoolsView>
    );

};

export default PoolsView;