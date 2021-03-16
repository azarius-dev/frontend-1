import { Fragment, useEffect, useState, useContext } from 'react';
import { useWeb3React } from '@web3-react/core';
import { formatEther, parseUnits } from 'ethers/lib/utils';
import { Contract } from 'ethers/lib/ethers';
import useSWR from 'swr';

import {
	ABI_LP,
	ABI_SEED,
	CONTRACT_ADDRESS
} from '@constants';
import { fetcher } from '@utils';
import {
	List,
	Countdown,
	Progress,
	Button,
	Input,
	Flexbox,
	TextMini,
	DisplayMedium
} from '@core/components';
import {
	Section,
	LabeledCard,
	Grid
} from '@dapp/components';
import { SnackbarManagerContext } from '@dapp/managers';
import { StyledConversionText } from './seedingdata.styles';

const SeedingData = () => {

	const { library, account } = useWeb3React();
	const [ depositInputValue, setDepositInputValue ] = useState('');
	const [ isDepositLoading, setIsDepositLoading ] = useState(false);
	const { openSnackbar } = useContext(SnackbarManagerContext);

	const onChangeInputDeposit = value => {
		setDepositInputValue(value);
	};

	// $ before, busd after
	const { data: priceAtLaunch, mutate: getPriceAtLaunch } = useSWR([ CONTRACT_ADDRESS.seed, 'priceAtLaunch' ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	// use in input field -> convert bnb to uwu
	const { data: tokenExchangeRate, mutate: getTokenExchangeRate } = useSWR([ CONTRACT_ADDRESS.seed, 'tokenExchangeRate' ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	// use as end value in progress bar
	const { data: BNBCap, mutate: getBNBCap } = useSWR([ CONTRACT_ADDRESS.seed, 'BNBCap' ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	// max amount of bnb a user can purchase per wallet
	const { data: walletBNBCap, mutate: getWalletBNBCap } = useSWR([ CONTRACT_ADDRESS.seed, 'walletBNBCap' ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	// label: Seeding for -- UWU at the end
	const { data: UwUDistribution, mutate: getUwUDistribution } = useSWR([ CONTRACT_ADDRESS.seed, 'UwUDistribution' ], {
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
	const { data: remainingUwUDistributionEndsAt, mutate: getRemainingUwUDistributionEndsAt } = useSWR([ CONTRACT_ADDRESS.seed, 'remainingUwUDistributionEndsAt' ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	// detect if distribution countdown needs to be shown
	const { data: remainingUwUDistributionEnabled, mutate: getRemainingUwUDistributionEnabled } = useSWR([ CONTRACT_ADDRESS.seed, 'remainingUwUDistributionEnabled' ], {
		fetcher: fetcher(library, ABI_SEED)
	});
	
	// current value in the progress bar
	const { data: BNBDeposited, mutate: getBNBDeposited } = useSWR([ CONTRACT_ADDRESS.seed, 'BNBDeposited' ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	// add below uwu UwUDistribution
	const { data: UwUDistributed, mutate: getUwUDistributed } = useSWR([ CONTRACT_ADDRESS.seed, 'UwUDistributed' ], {
		fetcher: fetcher(library, ABI_SEED)
	});

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
				getUwUDistribution(undefined, true);
				getSeedEndsAt(undefined, true);
				getSeedEnabled(undefined, true);
				getRemainingUwUDistributionEndsAt(undefined, true);
				getRemainingUwUDistributionEnabled(undefined, true);
				getBNBDeposited(undefined, true);
				getUwUDistributed(undefined, true);
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
			getUwUDistribution,
			getSeedEndsAt,
			getSeedEnabled,
			getRemainingUwUDistributionEndsAt,
			getRemainingUwUDistributionEnabled,
			getBNBDeposited,
			getUwUDistributed,
			getUserData,
			getBalance
		]
	);
	
	const seedingListData = [
		{
			label: 'Price at launch',
			value: priceAtLaunch ? formatEther(priceAtLaunch) : '...',
			tooltip: '**update**'
		},
		{
			label: 'Max BNB seeding per user',
			value: walletBNBCap ? formatEther(walletBNBCap) : '...',
			tooltip: '**update**'
		},
		{
			label: 'UwU distributed',
			value: UwUDistribution && UwUDistributed ? `${formatEther(UwUDistributed)} / ${formatEther(UwUDistribution)}` : '...',
			tooltip: '**update**'
		},

	];

	const walletListData = [
		{
			label: 'BNB wallet balance',
			value: balance ? formatEther(balance) : '...',
			tooltip: '**update**'
		},
		{
			label: 'BNB Deposited',
			value: userData && userData[0] ? formatEther(userData[0]) : '...',
			tooltip: '**update**'
		},
		{
			label: 'UwU Deposited',
			value: userData && userData[1] ? formatEther(userData[1]) : '...',
			tooltip: '**update**'
		},
		{
			label: 'Lp sent',
			value: userData && userData[2] ? formatEther(userData[2]) : '...',
			tooltip: '**update**'
		}
	];

	async function handleMaxBNB() {
		// create formula to calculate max amount of bnb a user can purchase with the input field
		setDepositInputValue(formatEther(balance));
	}

	async function handleDeposit() {
		setIsDepositLoading(true);
		const poolContract = new Contract(CONTRACT_ADDRESS.seed, ABI_SEED, library.getSigner());
		const tokenContract = new Contract(CONTRACT_ADDRESS.bnb, ABI_LP, library.getSigner());
		try {
			const toStake = parseUnits(depositInputValue, 1);
			let allowance = await tokenContract.allowance(account, CONTRACT_ADDRESS.seed);
			let transaction;
			if (allowance.lt(toStake)) {
				transaction = await tokenContract.approve(CONTRACT_ADDRESS.seed, toStake);
				await transaction.wait(1);
			}
			await poolContract.deposit(toStake);
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
					<LabeledCard
						label="general"
						gutter={0}
					>
						<List
							data={seedingListData}
						/>
					</LabeledCard>
					<LabeledCard label="time remaining">

						{seedEnabled && seedEndsAt ? (
							<Countdown
								timestamp={seedEndsAt}
								message="Seeding ended"
							/>
						) : <DisplayMedium color="secundary">Seeding has not started yet</DisplayMedium>}

					</LabeledCard>

					{remainingUwUDistributionEnabled && remainingUwUDistributionEndsAt && (
						<LabeledCard label="uwu distribution time remaining">
								<Countdown
									timestamp={remainingUwUDistributionEndsAt}
									message="UwU distribution has ended"
								/>
						</LabeledCard>
					)}
					
					{BNBDeposited && BNBCap && (
						<LabeledCard label="total funds collected">
							<Progress
								currentValue={formatEther(BNBDeposited)}
								totalValue={formatEther(BNBCap)}
								label="bnb"
							/>
						</LabeledCard>
					)}

				</Flexbox>
			</Section>
			<Section label="personal data">
				<Grid>
					<LabeledCard
						label="deposit BNB funds"
						gutter={40}
						info="** update info **"
					>
						<Flexbox gap="20px">

							<Flexbox gap="15px" direction="horizontal">
								<Input
									value={depositInputValue}
									placeholder="Enter funds"
									onChange={onChangeInputDeposit}
								/>
								<Button
									color="primary"
									onClick={handleMaxBNB}
								>
									max
								</Button>
							</Flexbox>
							
							{tokenExchangeRate && (
								<StyledConversionText>
									<TextMini>
										converts to {depositInputValue * formatEther(tokenExchangeRate)} UwU
									</TextMini>
								</StyledConversionText>
							)}

							<Button
								isLoading={isDepositLoading}
								onClick={handleDeposit}
							>
								deposit
							</Button>

						</Flexbox>
					</LabeledCard>
					<LabeledCard
						label="wallet balance"
						gutter={0}
					>
						<List 
							data={walletListData}
						/>
					</LabeledCard>
				</Grid>
			</Section>
		</Fragment>
	);
};

export default SeedingData;
