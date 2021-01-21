import useSWR from 'swr';
import { useWeb3React } from '@web3-react/core';
import { formatEther } from 'ethers/lib/utils';
import { Contract } from 'ethers';

/* import components */
import { Button, Card } from '../../common';
import { DisplayMedium } from '../../../theme';
import { Section } from '../../layout';
/* import styles */
import { StyledRebaseView } from './rebase-view.styles';
/* import utils */
import { contractAddress, orchestratorAbi, debasePolicyAbi, uniAbi, fetcher } from '../../../utils';

const RebaseView = ()  => {

    const { library } = useWeb3React();

	const { data: priceTargetRate } = useSWR([contractAddress.debasePolicy, 'priceTargetRate'], {
		fetcher: fetcher(library, debasePolicyAbi)
	});

	const { data: upperDeviationThreshold } = useSWR([contractAddress.debasePolicy, 'upperDeviationThreshold'], {
		fetcher: fetcher(library, debasePolicyAbi)
	});

	const { data: lowerDeviationThreshold } = useSWR([contractAddress.debasePolicy, 'lowerDeviationThreshold'], {
		fetcher: fetcher(library, debasePolicyAbi)
	});

	const { data: useDefaultRebaseLag } = useSWR([contractAddress.debasePolicy, 'useDefaultRebaseLag'], {
		fetcher: fetcher(library, debasePolicyAbi)
	});

	const { data: defaultPositiveRebaseLag } = useSWR([contractAddress.debasePolicy, 'defaultPositiveRebaseLag'], {
		fetcher: fetcher(library, debasePolicyAbi)
	});

	const { data: defaultNegativeRebaseLag } = useSWR([contractAddress.debasePolicy, 'defaultNegativeRebaseLag'], {
		fetcher: fetcher(library, debasePolicyAbi)
	});

	const { data: minRebaseTimeIntervalSec } = useSWR([contractAddress.debasePolicy, 'minRebaseTimeIntervalSec'], {
		fetcher: fetcher(library, debasePolicyAbi)
	});

	const { data: lastRebaseTimestampSec } = useSWR([contractAddress.debasePolicy, 'lastRebaseTimestampSec'], {
		fetcher: fetcher(library, debasePolicyAbi)
	});

	const { data: rebaseWindowOffsetSec } = useSWR([contractAddress.debasePolicy, 'rebaseWindowOffsetSec'], {
		fetcher: fetcher(library, debasePolicyAbi)
	});

	const { data: rebaseWindowLengthSec } = useSWR([contractAddress.debasePolicy, 'rebaseWindowLengthSec'], {
		fetcher: fetcher(library, debasePolicyAbi)
	});

	const { data: reserves } = useSWR([contractAddress.debaseDaiLp, 'getReserves'], {
		fetcher: fetcher(library, uniAbi)
	});

    async function handleRebase() {
		const orchestratorContract = new Contract(contractAddress.orchestrator, orchestratorAbi, library.getSigner());
		try {
			await orchestratorContract.rebase();
			alert('Rebase successfully executed', 'is-success');
		} catch (error) {
			alert('Rebase failed, please try again', 'is-danger');
		}
	}

	const paramsData = [
		{
			label: 'Target Price',
			value: priceTargetRate ? parseFloat(formatEther(priceTargetRate)) : '...',
			toolTip: 'The target price in dai debase must meet'
		},
		{
			label: 'Price Upper Deviation',
			value:
				upperDeviationThreshold && priceTargetRate
					? parseFloat(formatEther(upperDeviationThreshold)) + parseFloat(formatEther(priceTargetRate))
					: '...',
			toolTip: 'The positive deviation from the target price within not to rebase'
		},
		{
			label: 'Price Lower Deviation',
			value: lowerDeviationThreshold
				? parseFloat(formatEther(priceTargetRate)) - parseFloat(formatEther(lowerDeviationThreshold))
				: '...',
			toolTip: 'The negative deviation from the target price within not to rebase'
		},
		{
			label: 'Rebase Time Period',
			value: minRebaseTimeIntervalSec
				? ((minRebaseTimeIntervalSec.toNumber()) / (60 * 60)).toString() + ' Hours'
				: '...',
			toolTip: 'Time period after which a rebase can occur'
		},
		{
			label: 'Rebase Offset',
			value: rebaseWindowOffsetSec ? rebaseWindowOffsetSec.toNumber() : '...',
			toolTip: 'The number of seconds from the beginning of the rebase interval, where the rebase window begins'
		},
		{
			label: 'Rebase Window',
			value: rebaseWindowLengthSec ? rebaseWindowLengthSec.toNumber() : '...',
			toolTip: 'The length of time within which a rebase can occur'
		},
		{
			label: 'Use default Lag',
			value: useDefaultRebaseLag !== undefined ? (useDefaultRebaseLag ? 'True' : 'False') : '...',
			toolTip: 'Flag to allow usage of default supply smoothing'
		},
		{
			label: 'Default Upper lag',
			value: defaultPositiveRebaseLag ? defaultPositiveRebaseLag.toNumber() : '...',
			toolTip: 'Default supply smoothing to use for positive supply changes'
		},
		{
			label: 'Default Lower lag',
			value: defaultNegativeRebaseLag ? defaultNegativeRebaseLag.toNumber() : '...',
			toolTip: 'Default supply smoothing to use for negative supply changes'
		}
	];

	const liveData = [
		{
			label: 'Current Price',
			value: reserves
				? parseFloat(parseFloat(formatEther(reserves[0])) / parseFloat(formatEther(reserves[1]))).toFixed(2)
				: '...',
			toolTip: 'Current market price of debase in relation to dai'
		},
		/*{
			label: 'Last Rebase',
			value: lastRebaseTimestampSec
				? lastRebaseTimestampSec.toNumber() === 0
					? "Hasn't Happened"
					: DateTime.fromSeconds(lastRebaseTimestampSec.toNumber()).toRelative({ round: false })
				: '...',
			toolTip: 'Time since the last rebase happened'
		}*/
	];
	
    return (
        <StyledRebaseView>
			<Section
				color="secundary"
			>

			</Section>
        </StyledRebaseView>
    );

};

export default RebaseView;