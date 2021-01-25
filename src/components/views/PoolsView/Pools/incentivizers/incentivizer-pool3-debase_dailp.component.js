import useSWR from 'swr';
import { formatEther } from 'ethers/lib/utils';
import { useWeb3React } from '@web3-react/core';
import { contractAddress, poolAbi, fetcher } from '../../../../../utils';

/* import components */
import { Pool } from '../../../../common';

const IncentivizerPool2 = () => {
    
    const contract = contractAddress.debaseDaiLpPool;
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
            url: 'https://etherscan.io/address/0xF4168cc431e9a8310e595dB9F7E2564cC96F5D51'
        },
        {
            icon: 'link',
            url: 'https://info.uniswap.org/pair/0xE98f89a2B3AeCDBE2118202826478Eb02434459A'
        }
    ];
    const listData = [
        ['Total reward', '20,000', 'debase'],
        ['Halving period', '1 day'],
        ['Halving reward', getHalvingReward(), 'debase'],
        ['Total claimed', getTotalClaimed(), 'debase'],
        ['TVL', '$0'],
        ['APY', '0%'],
    ];

    return (
        <Pool 
            title="Pool 3"
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