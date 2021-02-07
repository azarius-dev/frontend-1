import { useState, useContext } from 'react';

import useSWR from 'swr';
import { useWeb3React } from '@web3-react/core';
import { formatEther } from 'ethers/lib/utils';
import { Contract } from 'ethers';

/* import components */
import { Button, List, LabeledCard, Spinner } from 'components/common';
/* import context */
import { SnackbarContext } from '../../common';
/* import styles */
import { StyledVariablesGrid, StyledRebaseGridItem } from './rebase-view.styles';
/* import utils */
import { contractAddress, orchestratorAbi, debasePolicyAbi, uniAbi, fetcher, calcDateDifference } from 'utils';

const RebaseVariables = ()  => {

	const { library } = useWeb3React();
	
	const [ rebaseLoading, setRebaseLoading ] = useState(false);

	const { handleSnackbarQueue } = useContext(SnackbarContext);

	/* fetch rebase data */
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
	const { data: rebaseWindowOffsetSec } = useSWR([contractAddress.debasePolicy, 'rebaseWindowOffsetSec'], {
		fetcher: fetcher(library, debasePolicyAbi)
	});
	const { data: rebaseWindowLengthSec } = useSWR([contractAddress.debasePolicy, 'rebaseWindowLengthSec'], {
		fetcher: fetcher(library, debasePolicyAbi)
	});

	const { data: reserves } = useSWR([contractAddress.debaseDaiLp, 'getReserves'], {
		fetcher: fetcher(library, uniAbi)
	});
	const { data: lastRebaseTimestampSec } = useSWR([contractAddress.debasePolicy, 'lastRebaseTimestampSec'], {
		fetcher: fetcher(library, debasePolicyAbi)
	});

	/* list data */
	const rebaseParamsListData = [
		{
			label: 'Target price',
			value: priceTargetRate ? parseFloat(formatEther(priceTargetRate)) : <Spinner size="xsmall" />,
			valueType: 'dai',
			tooltip: 'The target price in dai debase must meet'
		},
		{
			label: 'Price upper deviation',
			value: upperDeviationThreshold && priceTargetRate ? parseFloat(formatEther(upperDeviationThreshold)) + parseFloat(formatEther(priceTargetRate)) : <Spinner size="xsmall" />,
			valueType: 'dai',
			tooltip: 'The positive deviation from the target price within not to rebase'
		},
		{
			label: 'Price lower deviation',
			value: lowerDeviationThreshold && priceTargetRate ? parseFloat(formatEther(priceTargetRate)) - parseFloat(formatEther(lowerDeviationThreshold)) : <Spinner size="xsmall" />,
			valueType: 'dai',
			tooltip: 'The negative deviation from the target price within not to rebase'
		},
		{
			label: 'Rebase time period',
			value: minRebaseTimeIntervalSec ? (minRebaseTimeIntervalSec.toNumber() / (60 * 60)).toString() + ' Hours' : <Spinner size="xsmall" />,
			valueType: '',
			tooltip: 'Time period after which a rebase can occur'
		},
		{
			label: 'Rebase offset',
			value: rebaseWindowOffsetSec ? rebaseWindowOffsetSec.toNumber() : <Spinner size="xsmall" />,
			valueType: '',
			tooltip: 'The number of seconds from the beginning of the rebase interval, where the rebase window begins'
		},
		{
			label: 'Rebase window',
			value: rebaseWindowLengthSec ? rebaseWindowLengthSec.toNumber() : <Spinner size="xsmall" />,
			valueType: '',
			tooltip: 'The length of time within which a rebase can occur'
		},
		{
			label: 'Use default lag',
			value: useDefaultRebaseLag !== undefined ? (useDefaultRebaseLag ? 'True' : 'False') : <Spinner size="xsmall" />,
			valueType: '',
			tooltip: 'Flag to allow usage of default supply smoothing'
		},
		{
			label: 'Default upper lag',
			value: defaultPositiveRebaseLag ? defaultPositiveRebaseLag.toNumber() : <Spinner size="xsmall" />,
			valueType: '',
			tooltip: 'Default supply smoothing to use for positive supply changes'
		},
		{
			label: 'Default lower lag',
			value: defaultNegativeRebaseLag ? defaultNegativeRebaseLag.toNumber() : <Spinner size="xsmall" />,
			valueType: '',
			tooltip: 'Default supply smoothing to use for negative supply changes'
		}
	];

	const liveData = [
		{
			label: 'Current price',
			value: reserves ? parseFloat(parseFloat(formatEther(reserves[0])) / parseFloat(formatEther(reserves[1]))).toFixed(2) : <Spinner size="xsmall" />,
			valueType: 'dai',
			tooltip: 'Current market price of debase in relation to dai'
		},
		{
			label: 'Last rebase',
			value: lastRebaseTimestampSec ? calcDateDifference(new Date(lastRebaseTimestampSec.toNumber() * 1000), new Date()).toFixed(2) + ' day(s) ago' : <Spinner size="xsmall" />,
			valueType: '',
			tooltip: 'Time since the last rebase happened'
		}
	];

	const onClickFireRebase = async e => {
		setRebaseLoading(true);
		const orchestratorContract = new Contract(contractAddress.orchestrator, orchestratorAbi, library.getSigner());
		try {
			await orchestratorContract.rebase();
			handleSnackbarQueue({
				id: 'fire-rebase-button',
				message: 'Rebase successfully executed',
				status: 'success'
			});
		} catch (error) {
			handleSnackbarQueue({
				id: 'fire-rebase-button',
				message: 'Rebase failed, please try again',
				status: 'error'
			});
		}
		setRebaseLoading(false);
	};

    return (
        <StyledVariablesGrid>
			<StyledRebaseGridItem>
				<LabeledCard
					isLoading={false}
					label="current data"
					color="primary"
				>
					<List data={liveData} />
				</LabeledCard>
				<Button
					variant="offset"
					color="primary"
					isLoading={rebaseLoading}
					disabled={rebaseLoading}
					onClick={e => onClickFireRebase(e)}
				>
					fire rebase
				</Button>
			</StyledRebaseGridItem>
            <LabeledCard
                isLoading={false}
                label="rebasing parameters"
                color="primary"
            >
                <List data={rebaseParamsListData} />
            </LabeledCard>
        </StyledVariablesGrid>
    );

};

export default RebaseVariables;