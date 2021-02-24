import { Fragment } from 'react';

import { Card, Countdown, Progress, Button, Input, Flexbox } from '@core/components';
import { Section, LabeledCard, Grid } from '@dapp/components';

const SeedingRound = () => {

    return (
        <Fragment>
            <Section label="general info">
                <Flexbox gap="60px">
                    <LabeledCard
                        label="time remaining"
                        gutter={40}
                    >
                        <Countdown endDate="2021-06-20" />
                    </LabeledCard>
                    <LabeledCard
                        label="total funds collected"
                        gutter={40}
                    >
                        <Progress
                            currentValue={513}
                            totalValue={2000}
                            label="eth"
                        />
                    </LabeledCard>
                </Flexbox>
            </Section>
            <Section label="personal data">
                <Grid>
                    <LabeledCard
                        label="wallet data"
                        gutter={40}
                    >
                        
                    </LabeledCard>
                    <LabeledCard
                        label="purchase funds"
                        gutter={40}
                    >
                        <Flexbox
                            gap="15px"
                            direction="horizontal"
                        >
                            <Input />
                            <Button>purchase</Button>
                        </Flexbox>
                    </LabeledCard>
                </Grid>
            </Section>
        </Fragment>
    );
};

export default SeedingRound;