import { useEffect, useState, useContext } from 'react';
import useSWR from 'swr';
import { useWeb3React } from '@web3-react/core';
import { formatEther, parseUnits } from 'ethers/lib/utils';
import { Contract } from 'ethers/lib/ethers';

import { ABI_POOL, ABI_LP } from '@constants';
import { fetcher, calcDateDifference } from '@utils';
import { Card, List, Button, Input, Flexbox, Spinner } from '@core/components';
import { PoolCard } from '@dapp/components';
import { SnackbarManagerContext } from '@dapp/managers';
import { StyledMiningPoolCard, StyledCardInner, StyledAprText } from './mining-poolcard.styles';
import { parseEther } from 'ethers/lib/utils';

const MiningPoolCard = ({ label, type, tooltip, poolAddress, lpAddress }) => {
	const { library, account } = useWeb3React();

	const [ isStakeLoading, setIsStakeLoading ] = useState(false);
	const [ isUnstakeLoading, setIsUnstakeLoading ] = useState(false);
	const [ isClaimLoading, setIsClaimLoading ] = useState(false);

	const [ isStakingActive, setIsStakingActive ] = useState(false);
	const [ isUnstakingActive, setIsUnstakingActive ] = useState(false);

	const [ stakeInputValue, setStakeInputValue ] = useState('');
	const [ unstakeInputValue, setUnstakeInputValue ] = useState('');

	const { openSnackbar } = useContext(SnackbarManagerContext);

	// Current halving reward
	const { data: initReward, mutate: getInitReward } = useSWR([ poolAddress, 'initReward' ], {
		fetcher: fetcher(library, ABI_POOL)
	});

	const { data: poolEnabled, mutate: getPoolEnabled } = useSWR([ poolAddress, 'poolEnabled' ], {
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

	const { data: duration, mutate: getDuration } = useSWR([ poolAddress, 'duration' ], {
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
	const { data: walletBalance, mutate: getWalletBalance } = useSWR([ lpAddress, 'balanceOf', account ], {
		fetcher: fetcher(library, ABI_LP)
	});
	// total amount staked by everyone
	const { data: totalStakedBalance, mutate: getTotalStakedBalance } = useSWR([ poolAddress, 'totalSupply' ], {
		fetcher: fetcher(library, ABI_LP)
	});

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
				getPoolEnabled(undefined, true);
				getDuration(undefined, true);
			});
			return () => {
				library && library.removeAllListeners('block');
			};
		},
		[
			library,
			getMaxReward,
			getInitReward,
			getRewardDistributed,
			getPeriodFinish,
			getEarned,
			getPoolEnabled,
			getUserStakedBalance,
			getWalletBalance,
			getTotalStakedBalance,
			getDuration
		]
	);

	// List data arrays
	const poolListData = [
		{
			label: 'Total staked',
			value: totalStakedBalance ? (
				parseFloat(formatEther(totalStakedBalance)).toFixed(4)
			) : (
				<Spinner size="xsmall" />
			),
			tooltip: '**update**'
		},
		{
			label: 'Pool Rewards',
			value: maxReward ? parseFloat(formatEther(maxReward)).toFixed(2) : <Spinner size="xsmall" />,
			tooltip: '**update**'
		},
		{
			label: 'Rewards Claimed',
			value: rewardDistributed ? (
				parseFloat(formatEther(rewardDistributed)).toFixed(2)
			) : (
				<Spinner size="xsmall" />
			),
			tooltip: '**update**'
		},
		{
			label: 'Halving period',
			value: duration ? (
				parseFloat(duration.toNumber() / 60 * 60).toFixed(2) * 1 + ' Hours'
			) : (
				<Spinner size="xsmall" />
			),
			tooltip: '**update**'
		},
		{
			label: 'Halving reward',
			value: initReward ? parseFloat(formatEther(initReward)).toFixed(4) : <Spinner size="xsmall" />,
			tooltip: '**update**'
		},
		{
			label: 'Next halving in',
			value:
				poolEnabled && periodFinish ? (
					calcDateDifference(new Date(periodFinish.toNumber() * 1000), new Date()).toFixed(2) + ' day(s)'
				) : (
					<Spinner size="xsmall" />
				),
			valueType: '',
			tooltip: 'Time since the last rebase happened'
		}
	];
	const userListData = [
		{
			label: 'Earned reward',
			value: earned ? parseFloat(formatEther(earned)).toFixed(4) : <Spinner size="xsmall" />,
			tooltip: '**update**'
		},
		{
			label: 'Staked balance',
			value: userStakedBalance ? (
				parseFloat(formatEther(userStakedBalance)).toFixed(4)
			) : (
				<Spinner size="xsmall" />
			),
			tooltip: '**update**'
		},
		{
			label: 'Wallet balance',
			value: walletBalance ? parseFloat(formatEther(walletBalance)).toFixed(4) : <Spinner size="xsmall" />,
			tooltip: '**update**'
		}
	];
	const aprListData = [
		{
			label: 'APR',
			value: '0 %',
			tooltip: '**update**'
		}
	];

	// functions
	async function handleStake() {
		if (!isStakingActive) return setIsStakingActive(true);
		setIsStakeLoading(true);
		const poolContract = new Contract(poolAddress, ABI_POOL, library.getSigner());
		const tokenContract = new Contract(lpAddress, ABI_LP, library.getSigner());
		try {
			const toStake = parseEther(stakeInputValue);
			let allowance = await tokenContract.allowance(account, poolAddress);
			let transaction;
			if (allowance.lt(toStake)) {
				transaction = await tokenContract.approve(poolAddress, toStake);
				await transaction.wait(1);
			}
			console.log(toStake);
			transaction = await poolContract.stake(toStake);
			await transaction.wait(1);
			openSnackbar({
				message: 'Staking success',
				status: 'success'
			});
		} catch (error) {
			openSnackbar({
				message: 'Staking failed',
				status: 'error'
			});
		}
		setIsStakeLoading(false);
	}
	async function handleUnstake() {
		if (!isUnstakingActive) return setIsUnstakingActive(true);
		setIsUnstakeLoading(true);
		const poolContract = new Contract(poolAddress, ABI_POOL, library.getSigner());
		try {
			const toWithdraw = parseEther(unstakeInputValue);
			let transaction = await poolContract.withdraw(toWithdraw);
			await transaction.wait(1);
			openSnackbar({
				message: 'Unstaking success',
				status: 'success'
			});
		} catch (error) {
			openSnackbar({
				message: 'Unstaking failed',
				status: 'error'
			});
		}
		setIsUnstakeLoading(false);
	}
	async function handleClaim() {
		setIsClaimLoading(true);
		const poolContract = new Contract(poolAddress, ABI_POOL, library.getSigner());
		try {
			await poolContract.getReward();
			getEarned(undefined, true);
			openSnackbar({
				message: 'Claimed reward',
				status: 'success'
			});
		} catch (error) {
			openSnackbar({
				message: 'Claiming reward failed',
				status: 'error'
			});
		}
		setIsClaimLoading(false);
	}
	const handleMaxStake = () => {
		setStakeInputValue(formatEther(walletBalance));
	};
	const handleMaxUnstake = () => {
		setUnstakeInputValue(formatEther(userStakedBalance));
	};
	const onChangeStakeInput = (value) => {
		setStakeInputValue(value);
	};
	const onChangeUnstakeInput = (value) => {
		setUnstakeInputValue(value);
	};

	return (
		<StyledMiningPoolCard>
			<PoolCard label={label} info={tooltip} isActive={poolEnabled !== undefined ? poolEnabled : false}>
				<StyledCardInner>
					<List data={poolListData} />
					<List
						color="primary"
						data={
							type === 'bridge' ? (
								userListData.filter((ele) => ele.label !== 'Wallet balance')
							) : (
								userListData
							)
						}
					/>
					<List color="secundary" data={aprListData} />
				</StyledCardInner>
			</PoolCard>

			{poolEnabled && (
				<Card gutter={20}>
					{isStakingActive &&
					type === 'mining' && (
						<Flexbox direction="horizontal" gap="10px">
							<Input value={stakeInputValue} placeholder="Stake amount" onChange={onChangeStakeInput} />
							<Button color="primary" onClick={handleMaxStake}>
								max
							</Button>
						</Flexbox>
					)}

					{type === 'mining' && (
						<Button isLoading={isStakeLoading} onClick={handleStake}>
							stake
						</Button>
					)}

					{isUnstakingActive &&
					type === 'mining' && (
						<Flexbox direction="horizontal" gap="10px">
							<Input
								value={unstakeInputValue}
								placeholder="Unstake amount"
								onChange={onChangeUnstakeInput}
							/>
							<Button color="primary" onClick={handleMaxUnstake}>
								max
							</Button>
						</Flexbox>
					)}

					{type === 'mining' && (
						<Button isLoading={isUnstakeLoading} onClick={handleUnstake}>
							unstake
						</Button>
					)}

					<Button isLoading={isClaimLoading} onClick={handleClaim}>
						claim reward
					</Button>
				</Card>
			)}
		</StyledMiningPoolCard>
	);
};

export default MiningPoolCard;
