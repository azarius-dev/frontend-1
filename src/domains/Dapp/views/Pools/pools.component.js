import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';

import { CONTRACT_ADDRESS } from '@constants';
import { Section, DisconnectedWalletCard, Grid, MiningPoolCard } from '@dapp/components';
import POOLS_ROUTES from './pools.routes';

const Pools = () => {
	const { path } = useRouteMatch();
	const { active } = useWeb3React();

	const renderPools = () => {
		if (!active) return <DisconnectedWalletCard />;
		return (
			<Grid>
				<MiningPoolCard
					label="DEBASE Bridge Pool"
					type="bridge"
					tooltip="tooltip info"
					poolAddress={CONTRACT_ADDRESS.debaseBridgePool}
					stakeText="DEBASE"
				/>
				<MiningPoolCard
					label="DEBASE/DAI Lp Bridge Pool"
					type="bridge"
					tooltip="Lorem ipsum dolor sit amet, consectetur adipiscin"
					poolAddress={CONTRACT_ADDRESS.debaseDaiBridgePool}
					stakeText="Debase/Dai Lp"
				/>
				<MiningPoolCard
					label="UwU/BUSD Lp Pool"
					type="mining"
					tooltip="Lorem ipsum dolor sit amet, consectetur adipiscin"
					poolAddress={CONTRACT_ADDRESS.uwuBusdLpMiningPool}
					lpAddress={CONTRACT_ADDRESS.uwuBusdLp}
					stakeText="UwU/BUSD Lp"
				/>
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
