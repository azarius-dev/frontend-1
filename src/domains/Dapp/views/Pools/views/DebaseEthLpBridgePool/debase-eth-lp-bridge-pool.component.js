import { Fragment } from 'react';
import { useWeb3React } from '@web3-react/core';

import { CONTRACT_ADDRESS } from '@constants';
import { Section, Grid, PoolStake, DisconnectedWalletCard } from '@dapp/components';

const DebaseEthLpBridgePool = () => {

    const { active } = useWeb3React();

    return (
        <Fragment>
            <Section
                label="DEBASE/DAI Lp Bridge Pool"
                info="**update**"
            >

                {!active
                    ? <DisconnectedWalletCard />
                    : (
                        <Grid>
                            <PoolStake
                                type="bridge"
                                poolAddress={CONTRACT_ADDRESS.debaseDaiBridgePool}
                                stakeText="Debase/Dai Lp"
                            />
                        </Grid>
                    )
                }
                
            </Section>
        </Fragment>
    );

};

export default DebaseEthLpBridgePool;