import { useEffect } from 'react';

import useSWR from 'swr';
import { formatEther, formatUnits, parseEther, parseUnits } from 'ethers/lib/utils';
import { useWeb3React } from '@web3-react/core';
import { contractAddress, poolAbi, lpAbi, fetcher } from '../../../../../utils';

/* import components */
import { Pool, LabeledCard, List } from '../../../../common';

const IncentivizerPool1 = () => {
    
    const contract = contractAddress.degovDaiLpPool;
    const { library, account } = useWeb3React();

    const rewardTokenAddress = contractAddress.debase;
    const stakeTokenAddress = contractAddress.dai;
    const poolAddress = contractAddress.debaseDaiPool;
    const percents = false;

    /* fetch pool data */
	const { data: currentReward } = useSWR([contract, 'initReward'], {
		fetcher: fetcher(library, poolAbi)
	});
	const { data: getRewardDistributed } = useSWR([contract, 'rewardDistributed'], {
		fetcher: fetcher(library, poolAbi)
    });

    /* fetch stake data */
    const { data: rewardTokenBalance, mutate: getRewardTokenBalance } = useSWR([ rewardTokenAddress, 'balanceOf', account ], {
        fetcher: fetcher(library, lpAbi)
    });
    const { data: tokenBalance, mutate: getTokenBalance } = useSWR([ stakeTokenAddress, 'balanceOf', account ], {
		fetcher: fetcher(library, lpAbi)
    });
    const { data: tokenSupply, mutate: getTokenSupply } = useSWR([ rewardTokenAddress, 'totalSupply' ], {
		fetcher: fetcher(library, lpAbi)
    });
    const { data: stakeBalance, mutate: getStakeBalance } = useSWR([ poolAddress, 'balanceOf', account ], {
		fetcher: fetcher(library, poolAbi)
    });
    const { data: rewardBalance, mutate: getRewardBalance } = useSWR([ poolAddress, 'earned', account ], {
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

    /* list data */
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
    const stakingCardListData = [
        ['Balance', rewardBalance !== undefined ? parseFloat(formatEther(rewardTokenBalance)).toFixed(8) * 1 + ' Degov' : '0 Degov', 'degov'],
        ['Claimable', percents ? rewardBalance !== undefined && tokenSupply !== undefined ? parseFloat(formatEther(rewardBalance.mul(tokenSupply).div(parseEther('1')))).toFixed(8) * 1 : '0' : rewardBalance !== undefined ? parseFloat(formatEther(rewardBalance)).toFixed(8) * 1 : '0', 'degov'],
        ['To stake', rewardBalance !== undefined ? parseFloat(formatEther(rewardTokenBalance)).toFixed(8) * 1 : '0', 'placeholder'],
        ['To stake', rewardBalance !== undefined ? parseFloat(formatEther(rewardTokenBalance)).toFixed(8) * 1 : '0', 'placeholder'],
    ];

    const renderSidepanelContent = () => {
        return (
            <LabeledCard
                label="Debase / Dai-lp"
                color="secundary"
            >
                <List data={stakingCardListData} />
            </LabeledCard>
        );
    };
    const renderSidepanelFooter = () => {
        return (
            <div>footer</div>
        );
    };

    return (
        <Pool 
            title="Pool 1"
            subtitle="Debase / Dai-lp"
            info=""
            tooltip=""
            status="active"
            data={listData}
            links={linkData}
            sidepanelContent={renderSidepanelContent()}
            sidepanelFooter={renderSidepanelFooter()}
        />
    );
};

export default IncentivizerPool1;