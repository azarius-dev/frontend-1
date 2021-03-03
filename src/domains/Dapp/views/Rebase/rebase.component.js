import { Fragment } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Section } from '@dapp/components';

const Rebase = () => {

	const { library, account } = useWeb3React();

	return (
		<Fragment>
			<Section
                label="variables"
                info="**update this**"
            >
			</Section>
		</Fragment>
	);
};

export default Rebase;
