import ABI_POOL from '@constants/abi-pool.constant';
import { Card } from '@core/components';
import { Section, Grid } from '@dapp/components';
import fetcher from '@utils/fetcher';
import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { formatEther } from 'ethers/lib/utils';
import { Contract } from 'ethers/lib/ethers';

const Dai = ({ poolAddress, label }) => {
	const { library, account } = useWeb3React();
	const [ claimLoading, setClaimLoading ] = useState(false);

	const { data: initReward, mutate: getInitReward } = useSWR([ poolAddress, 'initReward' ], {
		fetcher: fetcher(library, ABI_POOL)
	});

	const { data: maxReward, mutate: getMaxReward } = useSWR([ poolAddress, 'maxReward' ], {
		fetcher: fetcher(library, ABI_POOL)
	});

	const { data: rewardDistributed, mutate: getRewardDistributed } = useSWR([ poolAddress, 'rewardDistributed' ], {
		fetcher: fetcher(library, ABI_POOL)
	});
	const { data: periodFinish, mutate: getPeriodFinish } = useSWR([ poolAddress, 'periodFinish' ], {
		fetcher: fetcher(library, ABI_POOL)
	});

	const { data: rewardRate, mutate: getRewardRate } = useSWR([ poolAddress, 'rewardRate' ], {
		fetcher: fetcher(library, ABI_POOL)
	});

	const { data: earned, mutate: getEarned } = useSWR([ poolAddress, 'earned', account ], {
		fetcher: fetcher(library, ABI_POOL)
	});

	const { data: balanceOf, mutate: getBalanceOf } = useSWR([ poolAddress, 'balanceOf', account ], {
		fetcher: fetcher(library, ABI_POOL)
	});

	useEffect(
		() => {
			library.on('block', () => {
				getMaxReward(undefined, true);
				getInitReward(undefined, true);
				getRewardDistributed(undefined, true);
				getPeriodFinish(undefined, true);
				getRewardRate(undefined, true);
				getBalanceOf(undefined, true);
				getEarned(undefined, true);
			});
			return () => {
				library && library.removeAllListeners('block');
			};
		},
		[ library, getMaxReward, getInitReward, getRewardDistributed, getPeriodFinish, getRewardRate, getBalanceOf ]
	);

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
				<Card gutter={30}>{balanceOf ? formatEther(balanceOf) : '...'}</Card>
			</Grid>
		</Section>
	);
};

export default Dai;
