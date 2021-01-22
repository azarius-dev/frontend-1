/* import components */
import { Card } from '../../common';
import { Section } from '../../layout';
/* import styles */
import { StyledDashboardView } from './dashboard-view.styles';

const DashboardView = ()  => {

    return (
        <StyledDashboardView>
            <Section
				color="secundary"
                label="live stats"
			>
                <Card
                    gutter={40}
                    color="primary"
                >
                    test
                </Card>
			</Section>
            <Section
				color="secundary"
                label="charts"
			>
                <Card
                    gutter={40}
                    color="primary"
                >
                    charts
                </Card>
			</Section>
        </StyledDashboardView>
    );

};

export default DashboardView;