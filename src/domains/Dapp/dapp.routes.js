import { ShoppingBagIcon, AccountTreeIcon, TuneIcon } from '@assets/icons';
import { SeedingRound, Pools, Rebase } from '@dapp/views';

const DAPP_ROUTES = [
	{
		label: 'sale',
		path: '/',
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
