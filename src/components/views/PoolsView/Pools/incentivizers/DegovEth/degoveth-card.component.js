import useSWR from 'swr';
import { formatEther } from 'ethers/lib/utils';
import { useWeb3React } from '@web3-react/core';
import { contractAddress, fetcher, incentivizerAbi, lpAbi } from 'utils';

/* import components */
import { Spinner } from 'components/common';
import { PoolCard } from 'components/layout';
import DegovEthStake from './degoveth-stake.component';

const DegovEthCard = () => {
    
    const contract = contractAddress.debaseDaiPool;
    const { library } = useWeb3React();

    /* static data */
    const poolTooltip = 'Incentivizes holding Degov Eth LP by giving debase as a continuous reward';
    const poolInfo = '';

    /* fetch pool data */
    const { data: rewardPercentage } = useSWR([ contractAddress.degovEthPool, 'rewardPercentage' ], {
		fetcher: fetcher(library, incentivizerAbi)
	});
	const { data: blockDuration } = useSWR([ contractAddress.degovEthPool, 'blockDuration' ], {
		fetcher: fetcher(library, incentivizerAbi)
	});
	const { data: poolEnabled } = useSWR([ contractAddress.degovEthPool, 'poolEnabled' ], {
		fetcher: fetcher(library, incentivizerAbi)
	});
	const { data: poolLpLimit } = useSWR([ contractAddress.degovEthPool, 'poolLpLimit' ], {
		fetcher: fetcher(library, incentivizerAbi)
	});
	const { data: enablePoolLpLimit } = useSWR([ contractAddress.degovEthPool, 'enablePoolLpLimit' ], {
		fetcher: fetcher(library, incentivizerAbi)
	});
	const { data: userLpLimit } = useSWR([ contractAddress.degovEthPool, 'userLpLimit' ], {
		fetcher: fetcher(library, incentivizerAbi)
	});
	const { data: enableUserLpLimit } = useSWR([ contractAddress.degovEthPool, 'enableUserLpLimit' ], {
		fetcher: fetcher(library, incentivizerAbi)
	});
	const { data: totalSupply } = useSWR([ contractAddress.degovEthPool, 'totalSupply' ], {
		fetcher: fetcher(library, incentivizerAbi)
	});
	const { data: balance } = useSWR([ contractAddress.debase, 'balanceOf', contractAddress.degovEthPool ], {
		fetcher: fetcher(library, lpAbi)
	});

    /* calculate data */
    

    /* list data */
    const linkData = [
        {
            icon: 'contract',
            url: 'https://etherscan.io/address/0x4789519821ae0f49d95203b1a2ed805141bf0dae'
        },
        {
            icon: 'exchange',
            url: 'https://app.uniswap.org/#/add/ETH/0x469E66e06fEc34839E5eB1273ba85A119B8D702F'
        }
    ];
    const listData = [
        {
            label: 'Reward',
            value: rewardPercentage ? parseFloat(formatEther(rewardPercentage)).toFixed(4) * 100 + ' %' : '...',
            tooltip: 'Percentage of stabilizer rewards contract requested as reward per reward duration'
        },
        {
            label: 'Block Duration',
            value: blockDuration ? blockDuration + ' Blocks' : '...',
            tooltip: 'Period within which pool reward is distributed'
        },
        {
            label: 'Pool Enabled',
            value: poolEnabled !== undefined ? (poolEnabled ? 'True' : 'False') : '...',
            tooltip: 'Pool staking/withdraw usage status'
        },
        {
            label: 'Pool Lp Limit Enabled',
            value: enablePoolLpLimit !== undefined ? (enablePoolLpLimit ? 'True' : 'False') : '...',
            tooltip: 'Pool staking/withdraw usage status'
        },
        {
            label: 'User Lp Limit Enabled',
            value: enableUserLpLimit !== undefined ? (enableUserLpLimit ? 'True' : 'False') : '...',
            tooltip: 'Pool staking/withdraw usage status'
        },
        {
            label: 'User Lp Limit',
            value: userLpLimit ? formatEther(userLpLimit) + ' LP' : '...',
            tooltip: 'LP limit per wallet'
        },
        {
            label: 'Total Pool Limit',
            value: poolLpLimit && totalSupply ? parseFloat(formatEther(totalSupply)).toFixed(2) + ' / ' + formatEther(poolLpLimit) + ' LP' : '...',
            tooltip: 'Total LP limit per pool'
        },
        {
            label: 'Current Pool Reward',
            value: balance ? parseFloat(formatEther(balance)) : '...',
            tooltip: 'Current pool rewards available'
        }
    ];
    const highlightData = [];

    return (
        <PoolCard 
            title="Pool 4"
            subtitle="Degov Eth"
            tooltip={poolTooltip}
            status={poolEnabled ? 'active' : 'inactive'}
            data={listData}
            highlightData={highlightData}
            links={linkData}
            sidepanelContent={<DegovEthStake info={poolInfo} />}
        />
    );
};

export default DegovEthCard;