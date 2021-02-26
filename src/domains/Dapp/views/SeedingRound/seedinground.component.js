import { Fragment, useState } from 'react';

import { Card, Countdown, Progress, Button, Input, Flexbox, TextSmall } from '@core/components';
import { Section, LabeledCard, Grid } from '@dapp/components';

const SeedingRound = () => {

    const [ purchaseInputValue, setPurchaseInputValue ] = useState(null);

    const onChangeInputPurchase = value => {
        setPurchaseInputValue(value);
    };

    return (
        <Fragment>
            <Section label="general info">
                <Flexbox gap="60px">
                    <LabeledCard
                        label="time remaining"
                        gutter={40}
                    >
                        <Countdown endDate="2021-04-20" />
                    </LabeledCard>
                    <LabeledCard
                        label="total funds collected"
                        gutter={40}
                    >
                        <Progress
                            currentValue={513}
                            totalValue={2000}
                            label="bnb"
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
                        <Flexbox gap="20px">
                            <TextSmall>{purchaseInputValue * .3} UWU</TextSmall>
                            <Flexbox
                                gap="15px"
                                direction="horizontal"
                            >
                                <Input 
                                    onChange={onChangeInputPurchase}
                                />
                                <Button>purchase</Button>
                            </Flexbox>
                        </Flexbox>
                    </LabeledCard>
                </Grid>
            </Section>
        </Fragment>
    );
};

export default SeedingRound;