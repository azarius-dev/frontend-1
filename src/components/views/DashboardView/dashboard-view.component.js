/* import components */
import { Card, Spinner } from '../../common';
import { Section } from '../../layout';
import Chart from './Chart/chart.component';
/* import styles */
import { StyledDashboardView, StyledChartsGrid } from './dashboard-view.styles';

const DashboardView = ()  => {

    return (
        <StyledDashboardView>
            <Section
				color="secundary"
                label="charts"
			>
                <StyledChartsGrid>
                    <Chart 
                        label="Marketcap"
                    />
                </StyledChartsGrid>
			</Section>
            <Section
				color="secundary"
                label="live stats"
			>
                <Card
                    gutter={40}
                    color="primary"
                >
                    <Spinner size="medium" />
                </Card>
			</Section>
        </StyledDashboardView>
    );

};

export default DashboardView;