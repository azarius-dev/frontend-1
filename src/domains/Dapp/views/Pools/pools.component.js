import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';

import { Section, DisconnectedWalletCard, Grid, PoolCard } from '@dapp/components';
import POOLS_ROUTES from './pools.routes';

const Pools = () => {
	const { path } = useRouteMatch();
	const { active } = useWeb3React();

	const renderPools = () => {
		if (!active) return <DisconnectedWalletCard />;
		return (
			<Grid>
				<PoolCard label="DEBASE Bridge Pool" routePath="/pools/debase-bridge-pool" isActive>
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
				<PoolCard label="DEBASE/DAI LP Bridge Pool" routePath="/pools/debase-eth-lp-bridge-pool" isActive>
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
				<PoolCard label="UwU/BUSD LP Pool" routePath="/pools/uwu-busd-lp-pool" isActive>
					Pool accepts UWU/BUSD lP deposits and in return allows you to mine UwU.
					<br />
					<br />
					This pool will give out a total of 700000 UwU over its life time. With initially giving out 350000
					UwU over a period of 3.5 days. After which the given will half to 175000 UwU given again over a
					period of another 3.5 days.
					<br />
					<br />
					This reward halving process will until the 700000 UwU are distributed.
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
