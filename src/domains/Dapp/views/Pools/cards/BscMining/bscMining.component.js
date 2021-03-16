import ABI_LP from '@constants/abi-lp.constant';
import ABI_POOL from '@constants/abi-pool.constant';
import { Card } from '@core/components';
import { Section, Grid } from '@dapp/components';
import fetcher from '@utils/fetcher';
import { useWeb3React } from '@web3-react/core';
import useSWR from 'swr';
import { parseUnits, formatEther } from 'ethers/lib/utils';
import { Contract } from 'ethers/lib/ethers';
import { useEffect, useState } from 'react';

const Dai = ({ poolAddress, label, lpAddress }) => {
	const { library, account } = useWeb3React();

	const [ stakingLoading, setStakingLoading ] = useState(false);
	const [ withdrawLoading, setWithdrawLoading ] = useState(false);
	const [ claimLoading, setClaimLoading ] = useState(false);
	const [ claimUnstakeLoading, setClaimUnstakeLoading ] = useState(false);
	const [ stakeAmount, setStakeAmount ] = useState(null);
	const [ withdrawAmount, setWithdrawAmount ] = useState(null);

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

	async function handleStake() {
		setStakingLoading(true);
		const poolContract = new Contract(poolAddress, ABI_POOL, library.getSigner());
		const tokenContract = new Contract(lpAddress, ABI_LP, library.getSigner());
		try {
			const toStake = parseUnits(stakeAmount, 1);
			let allowance = await tokenContract.allowance(account, poolAddress);
			let transaction;
			if (allowance.lt(toStake)) {
				transaction = await tokenContract.approve(poolAddress, toStake);
				await transaction.wait(1);
			}
			await poolContract.stake(toStake);
		} catch (error) {
			console.log(error);
		}
		setStakingLoading(false);
	}

	async function handleWithdraw() {
		setWithdrawLoading(true);
		const poolContract = new Contract(poolAddress, ABI_POOL, library.getSigner());
		try {
			const toWithdraw = parseUnits(withdrawAmount, 1);
			let transaction = await poolContract.withdraw(toWithdraw);
			await transaction.wait(1);
		} catch (error) {
			console.log(error);
		}
		setWithdrawLoading(false);
	}

	async function claimReward() {
		setClaimLoading(true);
		const poolContract = new Contract(poolAddress, ABI_POOL, library.getSigner());
		try {
			const transaction = await poolContract.getReward();
			await transaction.wait(1);
		} catch (error) {
			console.log(error);
		}
		setClaimLoading(false);
	}

	async function claimRewardThenUnstake() {
		setClaimUnstakeLoading(true);
		const poolContract = new Contract(poolAddress, ABI_POOL, library.getSigner());
		try {
			const transaction = await poolContract.exit();
			await transaction.wait(1);
		} catch (error) {
			console.log(error);
		}
		setClaimUnstakeLoading(false);
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
