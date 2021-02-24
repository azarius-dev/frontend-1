import {
    DashboardIcon,
    TuneIcon,
    AccountTreeIcon
} from '@assets';
import {
    Dashboard,
    Pools,
    Rebase,
    Roadmap,
    Faq
} from '@dapp/views';

const DAPP_ROUTES = [
    {
        label: 'dashboard',
        path: '/',
        icon: <DashboardIcon />,
        component: <Dashboard />
    },
    {
        label: 'pools',
        path: '/pools',
        icon: <AccountTreeIcon />,
        component: <Pools />,
        subroutes: [
            {
                label: 'debug1',
                path: '/pools/debug1',
                component: <div>debu1g</div>
            },
            {
                label: 'debug2',
                path: '/pools/debug2',
                component: <div>debu2g</div>
            }
        ]
    },
    {
        label: 'rebase',
        path: '/rebase',
        icon: <TuneIcon />,
        component: <Rebase />
    },
    {
        label: 'dev',
        path: '/dev',
        icon: <TuneIcon />,
        component: <Faq />
    }
];

export default DAPP_ROUTES;