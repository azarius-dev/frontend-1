import { Fragment, useEffect, useState, useContext } from 'react';
import { useWeb3React } from '@web3-react/core';
import { formatEther, parseUnits } from 'ethers/lib/utils';
import { Contract } from 'ethers/lib/ethers';
import useSWR from 'swr';

import { ABI_LP, ABI_SEED, CONTRACT_ADDRESS } from '@constants';
import { fetcher } from '@utils';
import { List, Countdown, Progress, Button, Input, Flexbox, TextMini, DisplayMedium } from '@core/components';
import { Section, LabeledCard, Grid } from '@dapp/components';
import { SnackbarManagerContext } from '@dapp/managers';
import { StyledConversionText } from './seedingdata.styles';
import { parseEther } from '../../../../../../../node_modules/ethers/lib/utils';

const SeedingData = () => {
	const { library, account } = useWeb3React();
	const [ depositInputValue, setDepositInputValue ] = useState('');
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
			label: 'Fixed BnB Price',
			value: priceAtLaunch ? parseFloat(formatEther(priceAtLaunch)).toFixed(4) * 1 : '...',
			tooltip: '**update**'
		},
		{
			label: 'Total UwU distributed',
			value:
				totalUwUReward && totalUwUDistributed
					? `${formatEther(totalUwUDistributed)} / ${formatEther(totalUwUReward)}`
					: '...',
			tooltip: '**update**'
		}
	];

	const walletListData = [
		{
			label: 'BNB Balance',
			value: balance ? parseFloat(formatEther(balance)).toFixed(4) : '...',
			tooltip: '**update**'
		},
		{
			label: 'BNB Deposited',
			value: userData
				? parseFloat(formatEther(userData[0])).toFixed(4) +
					'/' +
					parseFloat(formatEther(walletBNBCap)).toFixed(4)
				: '...',
			tooltip: '**update**'
		},
		{
			label: 'UwU (Unlocked)',
			value: userData ? parseFloat(formatEther(userData[1])).toFixed(4) : '...',
			tooltip: '**update**'
		},
		{
			label: 'UwU (Locked)',
			value: userData ? parseFloat(formatEther(userData[2])).toFixed(4) : '...',
			tooltip: '**update**'
		},
		{
			label: 'UwU Bonded In Lp',
			value: userData ? parseFloat(formatEther(userData[4])).toFixed(4) : '...',
			tooltip: '**update**'
		},
		{
			label: 'UwU Claimed',
			value: userData ? parseFloat(formatEther(userData[3])).toFixed(4) : '...',
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

	async function handleDeposit() {
		setIsDepositLoading(true);
		const poolContract = new Contract(CONTRACT_ADDRESS.seed, ABI_SEED, library.getSigner());
		const tokenContract = new Contract(CONTRACT_ADDRESS.bnb, ABI_LP, library.getSigner());
		try {
			const toStake = parseEther(depositInputValue);
			let allowance = await tokenContract.allowance(account, CONTRACT_ADDRESS.seed);
			let transaction;
			if (allowance.lt(toStake)) {
				transaction = await tokenContract.approve(CONTRACT_ADDRESS.seed, toStake);
				await transaction.wait(1);
			}
			transaction = await poolContract.deposit(toStake);
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
						{seedEnabled && seedEndsAt ? Date.now() > seedEndsAt.toNumber() * 1000 ? (
							<DisplayMedium color="secundary">Seed round has ended</DisplayMedium>
						) : (
							<Countdown timestamp={seedEndsAt} message="Seeding ended" />
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
							{Date.now() > remainingUwUDistributionEndsAt.toNumber() * 1000 ? (
								<DisplayMedium color="secundary">locked UwU has been distribution</DisplayMedium>
							) : (
								<Countdown
									timestamp={remainingUwUDistributionEndsAt}
									message="locked UwU has been distribution"
								/>
							)}
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

							<Button
								isLoading={isDepositLoading}
								isDisabled={remainingUwUDistributionEnabled ? remainingUwUDistributionEnabled : false}
								onClick={handleDeposit}
							>
								deposit
							</Button>
						</Flexbox>
					</LabeledCard>
					<LabeledCard label="wallet balance" gutter={0}>
						<List data={walletListData} />
					</LabeledCard>
				</Grid>
			</Section>
		</Fragment>
	);
};

export default SeedingData;
