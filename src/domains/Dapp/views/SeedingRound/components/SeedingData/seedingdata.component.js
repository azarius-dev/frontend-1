import { Fragment, useEffect, useState, useContext } from 'react';
import { useWeb3React } from '@web3-react/core';
import { formatEther } from 'ethers/lib/utils';
import { Contract } from 'ethers/lib/ethers';
import useSWR from 'swr';

import { ABI_LP, ABI_SEED, CONTRACT_ADDRESS } from '@constants';
import { fetcher } from '@utils';
import { List, Countdown, Progress, Button, Input, Flexbox, TextMini, DisplayMedium } from '@core/components';
import { Section, LabeledCard, Grid } from '@dapp/components';
import { SnackbarManagerContext } from '@dapp/managers';
import { StyledConversionText } from './seedingdata.styles';
import { parseEther } from 'ethers/lib/utils';

const SeedingData = () => {
	const { library, account } = useWeb3React();
	const [ depositInputValue, setDepositInputValue ] = useState(0);
	const [ isDepositLoading, setIsDepositLoading ] = useState(false);
	const { openSnackbar } = useContext(SnackbarManagerContext);

	const onChangeInputDeposit = (value) => {
		setDepositInputValue(value);
	};

	// $ before, busd after
	const { data: priceAtLaunch, mutate: getPriceAtLaunch } = useSWR([ CONTRACT_ADDRESS.seed, 'priceAtLaunch' ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	// use in input field -> convert bnb to uwu
	const { data: tokenExchangeRate, mutate: getTokenExchangeRate } = useSWR(
		[ CONTRACT_ADDRESS.seed, 'tokenExchangeRate' ],
		{
			fetcher: fetcher(library, ABI_SEED)
		}
	);

	// use as end value in progress bar
	const { data: BNBCap, mutate: getBNBCap } = useSWR([ CONTRACT_ADDRESS.seed, 'BNBCap' ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	// max amount of bnb a user can purchase per wallet
	const { data: walletBNBCap, mutate: getWalletBNBCap } = useSWR([ CONTRACT_ADDRESS.seed, 'walletBNBCap' ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	// label: Seeding for -- UWU at the end
	const { data: totalUwUReward, mutate: getTotalUwUReward } = useSWR([ CONTRACT_ADDRESS.seed, 'totalUwUReward' ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	// timestamp
	const { data: seedEndsAt, mutate: getSeedEndsAt } = useSWR([ CONTRACT_ADDRESS.seed, 'seedEndsAt' ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	// is seeding period active
	const { data: seedEnabled, mutate: getSeedEnabled } = useSWR([ CONTRACT_ADDRESS.seed, 'seedEnabled' ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	// create new countdown when enabled
	const { data: remainingUwUDistributionEndsAt, mutate: getRemainingUwUDistributionEndsAt } = useSWR(
		[ CONTRACT_ADDRESS.seed, 'remainingUwUDistributionEndsAt' ],
		{
			fetcher: fetcher(library, ABI_SEED)
		}
	);

	// detect if distribution countdown needs to be shown
	const { data: remainingUwUDistributionEnabled, mutate: getRemainingUwUDistributionEnabled } = useSWR(
		[ CONTRACT_ADDRESS.seed, 'remainingUwUDistributionEnabled' ],
		{
			fetcher: fetcher(library, ABI_SEED)
		}
	);

	// current value in the progress bar
	const { data: totalBNBDeposited, mutate: getTotalBNBDeposited } = useSWR(
		[ CONTRACT_ADDRESS.seed, 'totalBNBDeposited' ],
		{
			fetcher: fetcher(library, ABI_SEED)
		}
	);

	// add below uwu UwUDistribution
	const { data: totalUwUDistributed, mutate: getTotalUwUDistributed } = useSWR(
		[ CONTRACT_ADDRESS.seed, 'totalUwUDistributed' ],
		{
			fetcher: fetcher(library, ABI_SEED)
		}
	);

	// 3 values, show in wallet data
	const { data: userData, mutate: getUserData } = useSWR([ CONTRACT_ADDRESS.seed, 'Users', account ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	// current bnb balance of user wallet
	const { data: balance, mutate: getBalance } = useSWR([ CONTRACT_ADDRESS.bnb, 'balanceOf', account ], {
		fetcher: fetcher(library, ABI_LP)
	});

	useEffect(
		() => {
			library.on('block', () => {
				getPriceAtLaunch(undefined, true);
				getTokenExchangeRate(undefined, true);
				getBNBCap(undefined, true);
				getWalletBNBCap(undefined, true);
				getTotalUwUReward(undefined, true);
				getSeedEndsAt(undefined, true);
				getSeedEnabled(undefined, true);
				getRemainingUwUDistributionEndsAt(undefined, true);
				getRemainingUwUDistributionEnabled(undefined, true);
				getTotalBNBDeposited(undefined, true);
				getTotalUwUDistributed(undefined, true);
				getUserData(undefined, true);
				getBalance(undefined, true);
			});
			return () => {
				library && library.removeAllListeners('block');
			};
		},
		[
			library,
			getPriceAtLaunch,
			getTokenExchangeRate,
			getBNBCap,
			getWalletBNBCap,
			getTotalUwUReward,
			getSeedEndsAt,
			getSeedEnabled,
			getRemainingUwUDistributionEndsAt,
			getRemainingUwUDistributionEnabled,
			getTotalBNBDeposited,
			getTotalUwUDistributed,
			getUserData,
			getBalance
		]
	);

	const seedingListData = [
		{
			label: 'UwU/BNB Fixed BNB price',
			value: priceAtLaunch ? parseFloat(formatEther(priceAtLaunch)).toFixed(4) * 1 : '...',
			tooltip: '**update**'
		},
		{
			label: 'Total UwU distributed',
			value:
				totalUwUReward && totalUwUDistributed
					? `${formatEther(totalUwUDistributed) * 1} / ${formatEther(totalUwUReward) * 1}`
					: '...',
			tooltip: '**update**'
		}
	];

	const walletListData = [
		{
			label: 'BNB Balance',
			value: balance ? parseFloat(formatEther(balance)).toFixed(4) * 1 : '...',
			tooltip: '**update**'
		},
		{
			label: 'BNB Deposited',
			value:
				userData && walletBNBCap
					? parseFloat(formatEther(userData[0])).toFixed(4) * 1 +
						'/' +
						parseFloat(formatEther(walletBNBCap)).toFixed(4) * 1
					: '...',
			tooltip: '**update**'
		},
		{
			label: 'Total UwW Purchased',
			value: userData ? parseFloat(formatEther(userData[1])).toFixed(4) * 1 : '...',
			tooltip: '**update**'
		},
		{
			label: 'UwU (Unlocked)',
			value: userData ? parseFloat(formatEther(userData[2])).toFixed(4) * 1 : '...',
			tooltip: '**update**'
		},
		{
			label: 'UwU (Locked)',
			value: userData ? parseFloat(formatEther(userData[3])).toFixed(4) * 1 : '...',
			tooltip: '**update**'
		},
		{
			label: 'UwU Airdropped In LP',
			value: userData ? parseFloat(formatEther(userData[4])).toFixed(4) * 1 : '...',
			tooltip: '**update**'
		}
	];

	async function handleMaxBNB(balance, deposited, walletCap) {
		// create formula to calculate max amount of bnb a user can purchase with the input field
		if (balance.gt(walletCap)) {
			setDepositInputValue(formatEther(walletCap.sub(deposited)));
		} else {
			setDepositInputValue(formatEther(balance.sub(deposited)));
		}
	}

	async function handleDeposit(balance) {
		setIsDepositLoading(true);
		const poolContract = new Contract(CONTRACT_ADDRESS.seed, ABI_SEED, library.getSigner());
		const tokenContract = new Contract(CONTRACT_ADDRESS.bnb, ABI_LP, library.getSigner());
		try {
			const toStake = parseEther(depositInputValue);
			let allowance = await tokenContract.allowance(account, CONTRACT_ADDRESS.seed);
			let transaction;
			if (allowance.lt(balance)) {
				transaction = await tokenContract.approve(CONTRACT_ADDRESS.seed, balance, { gasPrice: 20000000000 });
				await transaction.wait(1);
			}
			transaction = await poolContract.deposit(toStake, { gasPrice: 20000000000 });
			await transaction.wait(1);
			openSnackbar({
				message: 'BNB deposited',
				status: 'success'
			});
		} catch (error) {
			openSnackbar({
				message: 'BNB deposit has failed',
				status: 'error'
			});
		}
		setIsDepositLoading(false);
	}

	return (
		<Fragment>
			<Section label="seeding info">
				<Flexbox gap="60px">
					<LabeledCard label="general" gutter={0}>
						<List data={seedingListData} />
					</LabeledCard>
					<LabeledCard label="seed time remaining">
						{seedEnabled && seedEndsAt ? (
							<Countdown timestamp={seedEndsAt} message="Seed round has ended" />
						) : (
							<DisplayMedium color="secundary">Seeding has not started yet</DisplayMedium>
						)}
					</LabeledCard>

					{totalBNBDeposited &&
					BNBCap && (
						<LabeledCard label="total funds collected">
							<Progress
								currentValue={parseFloat(formatEther(totalBNBDeposited)).toFixed(2) * 1}
								totalValue={parseFloat(formatEther(BNBCap)).toFixed(2) * 1}
								label="bnb"
							/>
						</LabeledCard>
					)}

					{remainingUwUDistributionEnabled &&
					remainingUwUDistributionEndsAt && (
						<LabeledCard label="locked uwu distribution period">
							<Countdown
								timestamp={remainingUwUDistributionEndsAt}
								message="locked UwU has been distribution"
							/>
						</LabeledCard>
					)}
				</Flexbox>
			</Section>
			<Section label="personal data">
				<Grid>
					<LabeledCard label="deposit BNB funds" gutter={40} info="** update info **">
						<Flexbox gap="20px">
							<Flexbox gap="15px" direction="horizontal">
								<Input
									value={depositInputValue}
									placeholder="Enter funds"
									onChange={onChangeInputDeposit}
								/>
								{balance &&
								userData &&
								userData[0] &&
								walletBNBCap && (
									<Button
										color="primary"
										onClick={() => handleMaxBNB(balance, userData[0], walletBNBCap)}
									>
										max
									</Button>
								)}
							</Flexbox>

							{tokenExchangeRate && (
								<StyledConversionText>
									<TextMini>
										converts to{' '}
										{depositInputValue * parseFloat(formatEther(tokenExchangeRate)).toFixed(4)} UwU
									</TextMini>
								</StyledConversionText>
							)}
							{balance && (
								<Button
									isLoading={isDepositLoading}
									isDisabled={
										remainingUwUDistributionEnabled ? remainingUwUDistributionEnabled : false
									}
									onClick={() => handleDeposit(balance)}
								>
									deposit
								</Button>
							)}
						</Flexbox>
					</LabeledCard>
					<LabeledCard label="uwu bank" gutter={0}>
						<List
							data={
								remainingUwUDistributionEnabled ? (
									walletListData
								) : (
									walletListData.filter(
										(ele) =>
											ele.label == 'BNB Balance' ||
											ele.label == 'BNB Deposited' ||
											ele.label == 'Total UwW Purchased'
									)
								)
							}
						/>
					</LabeledCard>
				</Grid>
			</Section>
		</Fragment>
	);
};

export default SeedingData;
