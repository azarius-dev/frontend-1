import {
    DashboardIcon,
    TuneIcon,
    AccountTreeIcon
} from '@assets';
import {
    SeedingRound
} from '@dapp/views';

const DAPP_ROUTES = [
    {
        label: 'seeding',
        path: '/',
        icon: <DashboardIcon />,
        component: <SeedingRound />
    }
];

export default DAPP_ROUTES;