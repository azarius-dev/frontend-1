// import the pool page view here
import { Dai } from './views';

const POOLS_ROUTES = [
	{
		label: 'pool1',
		path: '/pools/pool1',
		component: <Dai />
	},
	{
		label: 'pool2',
		path: '/pools/pool2',
		component: <div>pool example 2</div>
	},
	{
		label: 'pool3',
		path: '/pools/pool3',
		component: <div>pool example 3</div>
	}
];

export default POOLS_ROUTES;
