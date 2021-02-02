import { useWeb3React } from '@web3-react/core';

/* import components */
import { DisconnectedWalletCard } from '../../common';
import { Section } from '../../layout';
import RebaseVariables from './rebase-variables.component';
/* import context */
import { SnackbarContext, Tooltip } from '../../common';
/* import styles */
import { StyledRebaseView } from './rebase-view.styles';

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
				info="Lorem ipsum"
			>
				{renderVariables()}
			</Section>
        </StyledRebaseView>
    );

};

export default RebaseView;