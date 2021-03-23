import { DashboardIcon, ShoppingBagIcon, AccountTreeIcon, TuneIcon } from '@assets/icons';
import { Dashboard, SeedingRound, Pools, Rebase } from '@dapp/views';

const DAPP_ROUTES = [
	{
		label: 'dashboard',
		path: '/',
		icon: <DashboardIcon />,
		component: <Dashboard />
	},
	{
		label: 'sale',
		path: '/sale',
		icon: <ShoppingBagIcon />,
		component: <SeedingRound />
	},
	{
		label: 'pools',
		path: '/pools',
		icon: <AccountTreeIcon />,
		component: <Pools />
	}/*,
	{
		label: 'rebase',
		path: '/rebase',
		icon: <TuneIcon />,
		component: <Rebase />
	}*/
];

export default DAPP_ROUTES;
