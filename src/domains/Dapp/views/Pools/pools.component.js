import React, { useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';

import { Section, DisconnectedWalletCard, Grid, PoolCard } from '@dapp/components';
import POOLS_ROUTES from './pools.routes';
import CONTRACT_ADDRESS from '@constants/contract-address.constant';
import ABI_POOL from '@constants/abi-pool.constant';
import fetcher from '@utils/fetcher';
import useSWR from 'swr';
import ABI_UNI from '@constants/abi-uni.constant';
import { DisplayMedium, DisplaySmall } from '@core/components';
import { formatEther } from '../../../../../node_modules/ethers/lib/utils';
import ABI_LP from '@constants/abi-lp.constant';
import { Spinner } from '@core/components/index';

const Pools = () => {
	const { path } = useRouteMatch();
	const { active, library } = useWeb3React();

	const { data: debaseBridgePoolEnabled, mutate: getDebaseBridgePoolEnabled } = useSWR(
		[ CONTRACT_ADDRESS.debaseBridgePool, 'poolEnabled' ],
		{
			fetcher: fetcher(library, ABI_POOL)
		}
	);

	const { data: initReward, mutate: getInitReward } = useSWR([ CONTRACT_ADDRESS.uwuBusdLpMiningPool, 'initReward' ], {
		fetcher: fetcher(library, ABI_POOL)
	});

	const { data: duration, mutate: getDuration } = useSWR([ CONTRACT_ADDRESS.uwuBusdLpMiningPool, 'duration' ], {
		fetcher: fetcher(library, ABI_POOL)
	});

	// total amount staked by everyone
	const { data: totalStakedBalance, mutate: getTotalStakedBalance } = useSWR(
		[ CONTRACT_ADDRESS.uwuBusdLpMiningPool, 'totalSupply' ],
		{
			fetcher: fetcher(library, ABI_LP)
		}
	);

	const { data: reserves, mutate: getReserves } = useSWR([ CONTRACT_ADDRESS.uwuBusdLp, 'getReserves' ], {
		fetcher: fetcher(library, ABI_UNI)
	});

	const { data: pairSupply, mutate: getPairSupply } = useSWR([ CONTRACT_ADDRESS.uwuBusdLp, 'totalSupply' ], {
		fetcher: fetcher(library, ABI_UNI)
	});

	const { data: debaseDaiBridgePool, mutate: getDebaseDaiBridgePool } = useSWR(
		[ CONTRACT_ADDRESS.debaseDaiBridgePool, 'poolEnabled' ],
		{
			fetcher: fetcher(library, ABI_POOL)
		}
	);

	const { data: uwuBusdLpMiningPool, mutate: getUwUBusdLpMiningPool } = useSWR(
		[ CONTRACT_ADDRESS.uwuBusdLpMiningPool, 'poolEnabled' ],
		{
			fetcher: fetcher(library, ABI_POOL)
		}
	);

	useEffect(
		() => {
			library &&
				library.on('block', () => {
					getDebaseBridgePoolEnabled(undefined, true);
					getDebaseDaiBridgePool(undefined, true);
					getUwUBusdLpMiningPool(undefined, true);
					getTotalStakedBalance(undefined, true);
					getReserves(undefined, true);
					getPairSupply(undefined, true);
					getDuration(undefined, true);
				});
			return () => {
				library && library.removeAllListeners('block');
			};
		},
		[
			library,
			getDebaseBridgePoolEnabled,
			getDebaseDaiBridgePool,
			getUwUBusdLpMiningPool,
			getTotalStakedBalance,
			getReserves,
			getPairSupply,
			getDuration
		]
	);

	const renderPools = () => {
		if (!active) return <DisconnectedWalletCard />;
		return (
			<Grid>
				<PoolCard
					label="UwU/BUSD LP Pool"
					routePath="/pools/uwu-busd-lp-pool"
					isActive={uwuBusdLpMiningPool ? uwuBusdLpMiningPool : false}
				>
					Pool accepts UWU/BUSD lP deposits and in return allows you to mine UwU.
					<br />
					<br />
					This pool will give out a total of 700000 UwU over its life time. With initially giving out 350000
					UwU over a period of 3.5 days. After which the given will half to 175000 UwU given again over a
					period of another 3.5 days.
					<br />
					<br />
					This reward halving process will until the 700000 UwU are distributed.
					<br />
					<DisplayMedium color="secundary">
						{initReward && reserves && duration && pairSupply && totalStakedBalance ? (
							'APR: ' +
							parseFloat(
								parseFloat(formatEther(reserves[1])) /
									parseFloat(formatEther(reserves[0])) *
									365 *
									parseFloat(formatEther(initReward)) /
									3.5 /
									(2 *
										(parseFloat(formatEther(reserves[1])) / parseFloat(formatEther(pairSupply))) *
										parseFloat(formatEther(totalStakedBalance)))
							).toFixed(1) *
								100 +
							'%'
						) : (
							<Spinner size="xsmall" />
						)}
					</DisplayMedium>
				</PoolCard>
				<PoolCard
					label="DEBASE Bridge Pool"
					routePath="/pools/debase-bridge-pool"
					isActive={debaseBridgePoolEnabled ? debaseBridgePoolEnabled : false}
				>
					Pool that bridges DEBASE deposits you have made on the DEBASE bridge on Ethereum. To allow you to
					mine UwU in return.
					<br />
					<br />
					This pool will give out a total of 10000 UwU over its life time. With initially giving out 5000 UwU
					over a period of 3.5 days. After which the given will half to 2500 UwU given again over a period of
					another 3.5 days.
					<br />
					<br />
					This reward halving process will until the 10000 UwU are distributed.
				</PoolCard>
				<PoolCard
					label="DEBASE/DAI LP Bridge Pool"
					routePath="/pools/debase-eth-lp-bridge-pool"
					isActive={debaseDaiBridgePool ? debaseDaiBridgePool : false}
				>
					Pool that bridges DEBASE/DAI LP deposits you have made on the DEBASE/DAI LP bridge on Ethereum. To
					allow you to mine UwU in return.
					<br />
					<br />
					This pool will give out a total of 15000 UwU over its life time. With initially giving out 7500 UwU
					over a period of 3.5 days. After which the given will half to 3750 UwU given again over a period of
					another 3.5 days.
					<br />
					<br />
					This reward halving process will until the 15000 UwU are distributed.
				</PoolCard>
			</Grid>
		);
	};

	return (
		<Switch>
			<Route exact path={path}>
				<Section label="Mining Pools">{renderPools()}</Section>
			</Route>

			{POOLS_ROUTES.map((route, i) => {
				const { label, path, component } = route;
				return (
					<Route key={label + i} path={path}>
						{component}
					</Route>
				);
			})}
		</Switch>
	);
};

export default Pools;
