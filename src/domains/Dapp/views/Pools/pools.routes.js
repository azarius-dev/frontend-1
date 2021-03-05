// import the pool page view here
import { BscMining, EthBridge } from './views';

const POOLS_ROUTES = [
	{
		label: 'Debase Bridge',
		path: '/pools/debase-bridge-pool',
		component: <EthBridge />
	},
	{
		label: 'Debase Eth LP Bridge',
		path: '/pools/debase-eth-lp-bridge-pool',
		component: <EthBridge />
	},
	{
		label: 'UwU Busd Lp Pool',
		path: '/pools/uwu-busd-lp-pool',
		component: <BscMining />
	}
];

export default POOLS_ROUTES;
