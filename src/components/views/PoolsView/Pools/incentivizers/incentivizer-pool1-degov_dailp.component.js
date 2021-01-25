import useSWR from 'swr';
import { formatEther } from 'ethers/lib/utils';
import { useWeb3React } from '@web3-react/core';
import { contractAddress, poolAbi, fetcher } from '../../../../../utils';

/* import components */
import { Pool } from '../../../../common';

const IncentivizerPool1 = () => {
    
    const contract = contractAddress.degovDaiLpPool;
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
        return parseFloat(formatEther(currentReward)).toFixed(6)
    };
    const getTotalClaimed = () => {
        if (!getRewardDistributed) {return '/'}
        return parseFloat(formatEther(getRewardDistributed)).toFixed(2)
    };

    /* static data */
    const linkData = [
        {
            icon: 'contract',
            url: 'https://etherscan.io/address/0xaB68de2a9d9A733F3c4CFE52Af7Fc4f6aa015637'
        },
        {
            icon: 'link',
            url: 'https://info.uniswap.org/pair/0xE98f89a2B3AeCDBE2118202826478Eb02434459A'
        }
    ];
    const listData = [
        ['Total reward', '25,000', 'degov'],
        ['Halving period', '1 week'],
        ['Halving reward', getHalvingReward(), 'degov'],
        ['Total claimed', getTotalClaimed(), 'degov'],
        ['TVL', '$894,241'],
        ['APY', '80%'],
    ];

    return (
        <Pool 
            title="Pool 1"
            subtitle="Debase / Dai-lp"
            info=""
            status="active"
            data={listData}
            links={linkData}
            sidepanelContent=""
        />
    );
};

export default IncentivizerPool1;