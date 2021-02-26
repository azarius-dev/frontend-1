import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';

import { TextSmall, DisplaySmall } from '@core/components';
import { Section, DisconnectedWalletCard, Grid, PoolCard } from '@dapp/components';
//import { StyledPools } from './pools.styles';
import POOLS_ROUTES from './pools.routes';

const Pools = ()  => {

    const { path } = useRouteMatch();
    const { active } = useWeb3React();

    const renderPools = () => {
        if (!active) return <DisconnectedWalletCard />
        return (
            <Grid>
                <PoolCard
                    label="pool example"
                    info="tooltip info"
                    routePath="/pools/pool1"
                    isActive
                >
                    <TextSmall>
                        Lorem ipsum dolor sit amet, consectetur adipiscin
                    </TextSmall>
                    <DisplaySmall color="secundary">
                        APR: 360% - example
                    </DisplaySmall>
                </PoolCard>
                <PoolCard
                    label="pool example"
                    info="tooltip info"
                    routePath="/pools/pool2"
                    isActive
                >
                    <TextSmall>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </TextSmall>
                    <DisplaySmall color="secundary">
                        APR: 360% - example
                    </DisplaySmall>
                </PoolCard>
                <PoolCard
                    label="pool example"
                    info="tooltip info"
                    routePath="/pools/pool3"
                >
                    <TextSmall>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </TextSmall>
                    <DisplaySmall color="secundary">
                        APR: 360% - example
                    </DisplaySmall>
                </PoolCard>
            </Grid>
        );
    };

    return (
        <Switch>
            <Route exact path={path}>
                <Section label="Pool category?">
                    {renderPools()}
                </Section>
            </Route>

            {POOLS_ROUTES.map((route, i) => {
                const { label, path, component } = route;
                return (
                    <Route
                        key={label + i}
                        path={path}
                    >
                        {component}
                    </Route>
                );
            })}

        </Switch>
    );

};

export default Pools;