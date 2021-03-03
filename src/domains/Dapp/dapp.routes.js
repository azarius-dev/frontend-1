import { DashboardIcon, AccountTreeIcon, TuneIcon } from '@assets';
import { SeedingRound, Pools, Rebase } from '@dapp/views';

const DAPP_ROUTES = [
	{
		label: 'seeding',
		path: '/',
		icon: <DashboardIcon />,
		component: <SeedingRound />
	},
	{
		label: 'pools',
		path: '/pools',
		icon: <AccountTreeIcon />,
		component: <Pools />
	},
	{
		label: 'rebase',
		path: '/rebase',
		icon: <TuneIcon />,
		component: <Rebase />
	}
];

export default DAPP_ROUTES;
