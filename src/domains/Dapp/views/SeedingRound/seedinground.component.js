import { Fragment, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import useSWR from 'swr';
import { Card, Countdown, Progress, Button, Input, Flexbox, TextSmall } from '@core/components';
import { Section, LabeledCard, Grid } from '@dapp/components';
import { ABI_SEED, CONTRACT_ADDRESS } from '@constants/index';
import { fetcher } from '@utils/index';
import { DisconnectedWalletCard } from '@dapp/components/index';

const SeedingRound = () => {
	const { library, account, active } = useWeb3React();
	const [ purchaseInputValue, setPurchaseInputValue ] = useState(null);
	const onChangeInputPurchase = (value) => {
		setPurchaseInputValue(value);
	};

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

	useEffect(
		() => {
			library &&
				library.on('block', () => {
					getPriceAtLaunch(undefined, true);
					getTokenExchangeRate(undefined, true);
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
			getUwUDistributed
		]
	);

	console.log(priceAtLaunch, tokenExchangeRate);

	return (
		<Fragment>
			<Section label="general info">
				<Flexbox gap="60px">
					<LabeledCard label="time remaining" gutter={40}>
						<Countdown endDate="2021-04-20" />
					</LabeledCard>
					<LabeledCard label="total funds collected" gutter={40}>
						<Progress currentValue={513} totalValue={2000} label="bnb" />
					</LabeledCard>
				</Flexbox>
			</Section>
			<Section label="personal data">
				<Grid>
					<LabeledCard label="wallet data" gutter={40} />
					<LabeledCard label="purchase funds" gutter={40}>
						<Flexbox gap="20px">
							<TextSmall>{purchaseInputValue * 0.3} UWU</TextSmall>
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

export default SeedingRound;
