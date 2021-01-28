/* import components */
import { Card, Graph } from '../../../common';
import { DisplaySmall } from '../../../../theme';
/* import styles */
import { StyledChart, StyledChartHeader, StyledChartBody } from './chart.styles';

const Chart = props => {

    const { label, data, example } = props;

    return (
        <StyledChart>
            <StyledChartHeader>
                <DisplaySmall
                    color="text"
                >
                    {label}
                </DisplaySmall>
            </StyledChartHeader>
            <StyledChartBody>
                <Card
                    status="idle"
                    color="primary"
                    gutter={20}
                >
                    <Graph example={example} />
                </Card>
            </StyledChartBody>
        </StyledChart>
    );

};

Chart.defaultProps = {

};

export default Chart;