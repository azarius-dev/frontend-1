import { useEffect, useState, useContext } from 'react';
import useSWR from 'swr';
import { useWeb3React } from '@web3-react/core';
import { formatEther } from 'ethers/lib/utils';
import { Contract } from 'ethers/lib/ethers';

import {
	ABI_POOL,
	ABI_LP,
	CONTRACT_ADDRESS
} from '@constants';
import { Card } from '@core/components';
import { Section, Grid } from '@dapp/components';
import { SnackbarManagerContext } from '@dapp/managers';
import { fetcher } from '@utils';

const Dai = ({ poolAddress, label }) => {

	const { library, account } = useWeb3React();
	const [ isClaimLoading, setIsClaimLoading ] = useState(false);
	const { openSnackbar } = useContext(SnackbarManagerContext);

	// Current halving reward
	const { data: initReward, mutate: getInitReward } = useSWR([ poolAddress, 'initReward' ], {
		fetcher: fetcher(library, ABI_POOL)
	});

	// Max earnable reward
	const { data: maxReward, mutate: getMaxReward } = useSWR([ poolAddress, 'maxReward' ], {
		fetcher: fetcher(library, ABI_POOL)
	});

	// claimed rewards
	const { data: rewardDistributed, mutate: getRewardDistributed } = useSWR([ poolAddress, 'rewardDistributed' ], {
		fetcher: fetcher(library, ABI_POOL)
	});

	// timestamp -> show next halving in (days)
	const { data: periodFinish, mutate: getPeriodFinish } = useSWR([ poolAddress, 'periodFinish' ], {
		fetcher: fetcher(library, ABI_POOL)
	});

	// if zero don't show claim button
	const { data: earned, mutate: getEarned } = useSWR([ poolAddress, 'earned', account ], {
		fetcher: fetcher(library, ABI_POOL)
	});

	// value how much a user has staked into pool
	const { data: userStakedBalance, mutate: getUserStakedBalance } = useSWR([ poolAddress, 'balanceOf', account ], {
		fetcher: fetcher(library, ABI_POOL)
	});

	// current wallet balance of token -> use as max value in input field
	const { data: walletBalance, mutate: getWalletBalance } = useSWR([ CONTRACT_ADDRESS.uwuBusdLp, 'balanceOf', account ], {
        fetcher: fetcher(library, ABI_LP)
    });

	// total amount staked by everyone
	const { data: totalStakedBalance, mutate: getTotalStakedBalance } = useSWR([ CONTRACT_ADDRESS.uwuBusdLp, 'balanceOf', poolAddress ], {
        fetcher: fetcher(library, ABI_LP)
    });
	/*const { data: balance, mutate: getBalance } = useSWR([ CONTRACT_ADDRESS.poolAddress, 'totalSupply', ], {
        fetcher: fetcher(library, ABI_POOL)
    });*/

	// APR -> punk will add formula
	// claimable rewards -> earned
	// total staked in pool -> balanceOf -> only show when staking is enabled
	// 

	useEffect(
		() => {
			library.on('block', () => {
				getMaxReward(undefined, true);
				getInitReward(undefined, true);
				getRewardDistributed(undefined, true);
				getPeriodFinish(undefined, true);
				getEarned(undefined, true);
				getUserStakedBalance(undefined, true);
				getWalletBalance(undefined, true);
				getTotalStakedBalance(undefined, true);
			});
			return () => {
				library && library.removeAllListeners('block');
			};
		}, [
			library,
			getMaxReward,
			getInitReward,
			getRewardDistributed,
			getPeriodFinish,
			getEarned,
			getUserStakedBalance,
			getWalletBalance,
			getTotalStakedBalance
		]);

	async function claimReward() {
		setClaimLoading(true);
		const poolContract = new Contract(poolAddress, ABI_POOL, library.getSigner());
		try {
			await poolContract.getReward();
			getEarned(undefined, true);
		} catch (error) {
			console.log(error);
		}
		setClaimLoading(false);
	}

	return (
		<Section label={label}>
			<Grid>
				<Card gutter={30}>{maxReward ? formatEther(maxReward) : '...'}</Card>
				<Card gutter={30}>{initReward ? formatEther(initReward) : '...'}</Card>
				<Card gutter={30}>{rewardDistributed ? formatEther(rewardDistributed) : '...'}</Card>
				<Card gutter={30}>{periodFinish ? periodFinish.toNumber() : '...'}</Card>
				<Card gutter={30}>{/*balanceOf ? formatEther(balanceOf) : '...'*/}</Card>
			</Grid>
		</Section>
	);
};

export default Dai;
