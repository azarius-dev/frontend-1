import { Fragment, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import useSWR from 'swr';
import { Card, Countdown, Progress, Button, Input, Flexbox, TextSmall } from '@core/components';
import { Section, LabeledCard, Grid } from '@dapp/components';
import { ABI_LP, ABI_SEED, CONTRACT_ADDRESS } from '@constants/index';
import { fetcher } from '@utils/index';
import { formatEther, parseEther } from 'ethers/lib/utils';
import { Contract } from 'ethers/lib/ethers';

const SeedingData = () => {
	const { library, account } = useWeb3React();
	const [ purchaseInputValue, setPurchaseInputValue ] = useState(null);
	const onChangeInputPurchase = (value) => {
		setPurchaseInputValue(value);
	};
	const [ depositLoading, setDepositLoading ] = useState(false);

	const { data: priceAtLaunch, mutate: getPriceAtLaunch } = useSWR([ CONTRACT_ADDRESS.seed, 'priceAtLaunch' ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	const { data: tokenExchangeRate, mutate: getTokenExchangeRate } = useSWR(
		[ CONTRACT_ADDRESS.seed, 'tokenExchangeRate' ],
		{
			fetcher: fetcher(library, ABI_SEED)
		}
	);

	const { data: BNBCap, mutate: getBNBCap } = useSWR([ CONTRACT_ADDRESS.seed, 'BNBCap' ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	const { data: walletBNBCap, mutate: getWalletBNBCap } = useSWR([ CONTRACT_ADDRESS.seed, 'walletBNBCap' ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	const { data: walletCap, mutate: getWalletCap } = useSWR([ CONTRACT_ADDRESS.seed, 'walletCap' ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	const { data: UwUDistribution, mutate: getUwUDistribution } = useSWR([ CONTRACT_ADDRESS.seed, 'UwUDistribution' ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	const { data: seedDuration, mutate: getSeedDuration } = useSWR([ CONTRACT_ADDRESS.seed, 'seedDuration' ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	const { data: seedEndsAt, mutate: getSeedEndsAt } = useSWR([ CONTRACT_ADDRESS.seed, 'seedEndsAt' ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	const { data: seedEnabled, mutate: getSeedEnabled } = useSWR([ CONTRACT_ADDRESS.seed, 'seedEnabled' ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	const { data: remainingUwUDistributionDuration, mutate: getRemainingUwUDistributionDuration } = useSWR(
		[ CONTRACT_ADDRESS.seed, 'remainingUwUDistributionDuration' ],
		{
			fetcher: fetcher(library, ABI_SEED)
		}
	);

	const { data: remainingUwUDistributionEndsAt, mutate: getRemainingUwUDistributionEndsAt } = useSWR(
		[ CONTRACT_ADDRESS.seed, 'remainingUwUDistributionEndsAt' ],
		{
			fetcher: fetcher(library, ABI_SEED)
		}
	);

	const { data: remainingUwUDistributionEnabled, mutate: getRemainingUwUDistributionEnabled } = useSWR(
		[ CONTRACT_ADDRESS.seed, 'remainingUwUDistributionEnabled' ],
		{
			fetcher: fetcher(library, ABI_SEED)
		}
	);

	const { data: BNBDeposited, mutate: getBNBDeposited } = useSWR([ CONTRACT_ADDRESS.seed, 'BNBDeposited' ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	const { data: UwUDistributed, mutate: getUwUDistributed } = useSWR([ CONTRACT_ADDRESS.seed, 'UwUDistributed' ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	const { data: userData, mutate: getUserData } = useSWR([ CONTRACT_ADDRESS.seed, 'Users', account ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	useEffect(
		() => {
			library.on('block', () => {
				getPriceAtLaunch(undefined, true);
				getTokenExchangeRate(undefined, true);
				getBNBCap(undefined, true);
				getWalletBNBCap(undefined, true);
				getWalletCap(undefined, true);
				getUwUDistribution(undefined, true);
				getSeedDuration(undefined, true);
				getSeedEndsAt(undefined, true);
				getSeedEnabled(undefined, true);
				getRemainingUwUDistributionDuration(undefined, true);
				getRemainingUwUDistributionEndsAt(undefined, true);
				getRemainingUwUDistributionEnabled(undefined, true);
				getBNBDeposited(undefined, true);
				getUwUDistributed(undefined, true);
				getUserData(undefined, true);
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
			getWalletCap,
			getUwUDistribution,
			getSeedDuration,
			getSeedEndsAt,
			getSeedEnabled,
			getRemainingUwUDistributionDuration,
			getRemainingUwUDistributionEndsAt,
			getRemainingUwUDistributionEnabled,
			getBNBDeposited,
			getUwUDistributed,
			getUserData
		]
	);

	async function handleDeposit() {
		setDepositLoading(true);
		const poolContract = new Contract(CONTRACT_ADDRESS.seed, ABI_SEED, library.getSigner());
		const tokenContract = new Contract(CONTRACT_ADDRESS.bnb, ABI_LP, library.getSigner());
		try {
			const toStake = parseUnits(stakeAmount, 1);
			let allowance = await tokenContract.allowance(account, poolAddress);
			let transaction;
			if (allowance.lt(toStake)) {
				transaction = await tokenContract.approve(poolAddress, toStake);
				await transaction.wait(1);
			}
			await poolContract.deposit(toStake);
		} catch (error) {
			console.log(error);
		}
		setDepositLoading(false);
	}

	return (
		<Fragment>
			<Section label="general info">
				<Flexbox gap="60px">
					<LabeledCard label="time remaining" gutter={40}>
						{seedEndsAt ? <Countdown endTime={1614992251} /> : null}
					</LabeledCard>
					{BNBDeposited && BNBCap ? (
						<LabeledCard label="total funds collected" gutter={40}>
							<Progress
								currentValue={formatEther(BNBDeposited)}
								totalValue={formatEther(BNBCap)}
								label="bnb"
							/>
						</LabeledCard>
					) : null}
				</Flexbox>
			</Section>
			<Section label="personal data">
				<Grid>
					<LabeledCard label="wallet data" gutter={40}>
						<Flexbox gap="20px">
							{userData ? <TextSmall>{formatEther(userData[0])} UWU</TextSmall> : null}
						</Flexbox>
					</LabeledCard>
					<LabeledCard label="purchase funds" gutter={40}>
						<Flexbox gap="20px">
							{tokenExchangeRate ? (
								<TextSmall>{purchaseInputValue * formatEther(tokenExchangeRate)} UWU</TextSmall>
							) : null}
							<Flexbox gap="15px" direction="horizontal">
								<Input onChange={onChangeInputPurchase} />
								<Button>purchase</Button>
							</Flexbox>
						</Flexbox>
					</LabeledCard>
				</Grid>
			</Section>
		</Fragment>
	);
};

export default SeedingData;
