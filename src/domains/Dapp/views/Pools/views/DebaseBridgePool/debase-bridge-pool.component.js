import { Fragment } from 'react';
import { useWeb3React } from '@web3-react/core';

import { CONTRACT_ADDRESS } from '@constants';
import { Section, Grid, PoolStake, DisconnectedWalletCard } from '@dapp/components';

const DebaseBridgePool = () => {

    const { active } = useWeb3React();

    return (
        <Fragment>
            <Section
                label="Debase Bridge Pool"
                info="**update**"
            >

                {!active
                    ? <DisconnectedWalletCard />
                    : (
                        <Grid>
                            <PoolStake
                                type="bridge"
                                poolAddress={CONTRACT_ADDRESS.debaseBridgePool}
                                stakeText="DEBASE"
                            />
                        </Grid>
                    )
                }
                
            </Section>
        </Fragment>
    );

};

export default DebaseBridgePool;