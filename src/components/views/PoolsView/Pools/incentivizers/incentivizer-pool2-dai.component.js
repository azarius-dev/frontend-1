import useSWR from 'swr';
import { formatEther } from 'ethers/lib/utils';
import { useWeb3React } from '@web3-react/core';
import { contractAddress, poolAbi, fetcher } from '../../../../../utils';

/* import components */
import { Pool } from '../../../../common';

const IncentivizerPool2 = () => {
    
    const contract = contractAddress.debaseDaiPool;
    const { library } = useWeb3React();

    /* fetch data */
	const { data: currentReward } = useSWR([contract, 'initReward'], {
		fetcher: fetcher(library, poolAbi)
	});
	const { data: getRewardDistributed } = useSWR([contract, 'rewardDistributed'], {
		fetcher: fetcher(library, poolAbi)
	});

    /* calculate data */
    const getHalvingReward = () => {
        if (!currentReward) {return '/'}
        return parseFloat(formatEther(currentReward)).toFixed(2)
    };
    const getTotalClaimed = () => {
        if (!getRewardDistributed) {return '/'}
        return parseFloat(formatEther(getRewardDistributed)).toFixed(2)
    };

    /* static data */
    const linkData = [
        {
            icon: 'contract',
            url: 'https://etherscan.io/address/0xf5cB771023706Ca566eA6128b88e03A262737479'
        },
        {
            icon: 'link',
            url: 'https://app.uniswap.org/#/swap?inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f&outputCurrency=ETH'
        }
    ];
    const listData = [
        ['Total reward', '10,000', 'debase'],
        ['Halving period', '1 day'],
        ['Halving reward', getHalvingReward(), 'debase'],
        ['Total claimed', getTotalClaimed(), 'debase'],
        ['TVL', '$0'],
        ['APY', '0%'],
    ];

    return (
        <Pool 
            title="Pool 2"
            subtitle="Debase / Dai-lp"
            info=""
            status="inactive"
            data={listData}
            links={linkData}
            sidepanelContent=""
        />
    );
};

export default IncentivizerPool2;