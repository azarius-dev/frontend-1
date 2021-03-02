import { DashboardIcon, AccountTreeIcon } from '@assets';
import { SeedingRound, Pools } from '@dapp/views';

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
	}
];

export default DAPP_ROUTES;
