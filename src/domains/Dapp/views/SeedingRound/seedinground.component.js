import { Fragment, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import useSWR from 'swr';
import { Card, Countdown, Progress, Button, Input, Flexbox, TextSmall } from '@core/components';
import { Section, LabeledCard, Grid } from '@dapp/components';
import { ABI_SEED, CONTRACT_ADDRESS } from '@constants/index';
import { fetcher } from '@utils/index';

const SeedingRound = () => {
	const { library, account } = useWeb3React();
	const [ purchaseInputValue, setPurchaseInputValue ] = useState(null);
	const onChangeInputPurchase = (value) => {
		setPurchaseInputValue(value);
	};

	const { data: priceAtLaunch, mutate: getPriceAtLaunch } = useSWR([ CONTRACT_ADDRESS.seed, 'priceAtLaunch' ], {
		fetcher: fetcher(library, ABI_SEED)
	});

	useEffect(
		() => {
			library.on('block', () => {
				getPriceAtLaunch(undefined, true);
			});
			return () => {
				library.removeAllListeners('block');
			};
		},
		[ library, getPriceAtLaunch ]
	);

	console.log(priceAtLaunch);

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
