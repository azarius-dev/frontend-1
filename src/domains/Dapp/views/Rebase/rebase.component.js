import { useWeb3React } from '@domains/Dapp/views/Rebase/@web3-react/core';

/* import components */
import { Section, DisconnectedWalletCard } from '@domains/Dapp/views/Rebase/@domains/Dapp/views/Dashboard/components/layout';
import RebaseVariables from './components/rebase-variables.component';
/* import styles */
import { StyledRebaseView } from './rebase.styles';

const RebaseView = ()  => {

	const { active } = useWeb3React();

	/* conditional renders */
	const renderVariables = () => {
		if (!active) return <DisconnectedWalletCard />
		return <RebaseVariables />
	};

    return (
        <StyledRebaseView
			data-db-el="view-rebase"
		>
			<Section
				color="secundary"
				label="Variables"
			>
				{renderVariables()}
			</Section>
        </StyledRebaseView>
    );

};

export default RebaseView;