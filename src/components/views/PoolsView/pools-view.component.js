/* import components */
import Pool from './Pool/pool.component';
import { Section } from '../../layout';

/* import styles */
import { StyledPoolsView, StyledPoolsGrid } from './pools-view.styles';

const PoolsView = ()  => {

    const tempPoolData = [
        ['Reward', '0.06%'],
        ['Block duration', '44.800 blocks'],
        ['Pool enabled', 'True'],
        ['Pool Lp Limit Enabled', 'True'],
        ['User Lp Limit Enabled', 'True'],
        ['Example', 'True'],
        ['Example', 'False'],
    ];

    const tempLinksData = [
        {
            icon: '',
            url:'',
            tooltip: ''
        },
        {
            icon: '',
            url:'',
            tooltip: ''
        },
        {
            icon: '',
            url:'',
            tooltip: ''
        }
    ];

    return (
        <StyledPoolsView>
            <Section
                color="secundary"
                label="Stabilizers"
            >
                <StyledPoolsGrid>
                    <Pool 
                        label="Threshold counter"
                        status="active"
                        data={tempPoolData}
                        links={tempLinksData}
                    />
                    <Pool 
                        label="Threshold counter"
                        status="idle"
                        data={tempPoolData}
                        links={tempLinksData}
                    />
                    <Pool 
                        label="Threshold counter"
                        status="inactive"
                        data={tempPoolData}
                        links={tempLinksData}
                    />
                </StyledPoolsGrid>
            </Section>
            <Section
                color="secundary"
                label="Incentivizers"
            >
                <StyledPoolsGrid>
                    <Pool 
                        label="Pool 1"
                        status="active"
                        data={tempPoolData}
                        links={tempLinksData}
                    />
                    <Pool 
                        label="Threshold counter"
                        status="active"
                        data={tempPoolData}
                        links={tempLinksData}
                    />
                    <Pool 
                        label="Threshold counter"
                        status="active"
                        data={tempPoolData}
                        links={tempLinksData}
                    />
                </StyledPoolsGrid>
            </Section>
        </StyledPoolsView>
    );

};

export default PoolsView;