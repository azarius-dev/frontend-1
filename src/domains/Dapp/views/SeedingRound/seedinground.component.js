import { Fragment } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Section, DisconnectedWalletCard } from '@dapp/components';
import { SeedingData } from './components';

const SeedingRound = () => {
	const { active } = useWeb3React();

	const renderSeedingData = () => {
		if (!active) {
			return (
				<Fragment>
					<Section>
						<DisconnectedWalletCard />
					</Section>
				</Fragment>
			);
		}
		return <SeedingData />;
	};

	return renderSeedingData();
};

export default SeedingRound;
