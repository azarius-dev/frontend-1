import { DashboardIcon, TuneIcon, AccountTreeIcon } from '@assets';
import { Dashboard, Pools, Rebase } from '@dapp/views';

const dappRoutes = Object.freeze({
    DASHBOARD: {
        label: 'dashboard',
        path: '/',
        icon: DashboardIcon,
        component: Dashboard
    },
    POOLS: {
        name: 'pools',
        path: '/pools',
        icon: AccountTreeIcon,
        component: Pools,
        subroutes: {
            DEBUG1: {
                name: 'debug1',
                path: '/pools/debug1',
                component: <div>debu1g</div>
            },
            DEBUG2: {
                name: 'debug2',
                path: '/pools/debug2',
                component: <div>debu2g</div>
            }
        }
    },
    REBASE: {
        name: 'rebase',
        path: '/rebase',
        icon: TuneIcon,
        component: Rebase
    }
});

export default dappRoutes;