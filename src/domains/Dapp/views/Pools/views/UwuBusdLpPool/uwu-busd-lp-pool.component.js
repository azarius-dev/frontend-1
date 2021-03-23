import { Fragment } from 'react';
import { useWeb3React } from '@web3-react/core';

import { CONTRACT_ADDRESS } from '@constants';
import { Section, Grid, PoolStake, DisconnectedWalletCard } from '@dapp/components';

const UwuBusdLpPool = () => {
	const { active } = useWeb3React();

	return (
		<Fragment>
			<Section label="UwU/BUSD LP Pool" info="**update**">
				{!active ? (
					<DisconnectedWalletCard />
				) : (
					<Grid>
						<PoolStake
							type="mining"
							poolAddress={CONTRACT_ADDRESS.uwuBusdLpMiningPool}
							lpAddress={CONTRACT_ADDRESS.uwuBusdLp}
							stakeText="UwU/BUSD LP"
						/>
					</Grid>
				)}
			</Section>
		</Fragment>
	);
};

export default UwuBusdLpPool;
