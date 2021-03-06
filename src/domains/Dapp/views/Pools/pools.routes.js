import { DebaseBridgePool, DebaseEthLpBridgePool, UwuBusdLpPool } from './views';

const POOLS_ROUTES = [
	{
		label: 'Debase Bridge Pool',
		path: '/pools/debase-bridge-pool',
		component: <DebaseBridgePool />
	},
	{
		label: 'Debase/Eth LP Bridge Pool',
		path: '/pools/debase-eth-lp-bridge-pool',
		component: <DebaseEthLpBridgePool />
	},
	{
		label: 'UwU/Busd LP Pool',
		path: '/pools/uwu-busd-lp-pool',
		component: <UwuBusdLpPool />
	}
];

export default POOLS_ROUTES;
