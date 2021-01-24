import { useState } from 'react';
import _ from 'lodash';

/* import styles */
import { StyledGraph, StyledGraphSVG, StyledPolygon } from './graph.styles';

const Graph = props => {

    const tempData = [
        [
            1606194459851,
            4.95649174447229
        ],
        [
            1606198369390,
            6.09320421239168
        ],
        [
            1606201708373,
            6.020626969220956
        ],
        [
            1606205312004,
            6.446056632215242
        ],
        [
            1606208950501,
            6.213337266217819
        ],
        [
            1606212484435,
            6.13205188542659
        ],
        [
            1606216095547,
            6.074592290202291
        ],
        [
            1606219728467,
            6.528636874812071
        ],
        [
            1606223309360,
            6.466301790771123
        ],
        [
            1606226861286,
            6.779190877953329
        ],
        [
            1606230555678,
            6.281068885175047
        ],
        [
            1606234080988,
            6.281625804860917
        ],
        [
            1606237719774,
            5.852974572510909
        ],
        [
            1606241318845,
            5.829686571622844
        ],
        [
            1606244908322,
            5.812549086055222
        ],
        [
            1606248553833,
            5.857171020004505
        ],
        [
            1606252151098,
            5.828754875792967
        ],
        [
            1606255737422,
            5.804386984492597
        ],
        [
            1606259329246,
            5.348939990003125
        ],
        [
            1606262934620,
            5.190250542810313
        ],
        [
            1606266516239,
            5.174854876377959
        ],
        [
            1606270250239,
            5.2502126638265
        ]
    ]

    const [ activeLineX, setActiveLineX ] = useState(null);

    const renderPoints = () => {
        const data = tempData;
        const minValue = 0;
        const maxValue = _.maxBy(data, arr => {return arr[1]});
        const width = 500;
        const height = 400;
        const points = data.map((el, i) => {
            return [
                width / data.length * i,
                height / data.length * i
            ];
        });
        return points;
    };

    return (
        <StyledGraph>
            {/*<StyledActiveLineContainer>
                <StyledActiveLine>
                    <StyledActiveDot />
                </StyledActiveLine>
            </StyledActiveLineContainer>*/}
            <StyledGraphSVG viewbox="0 0 500 400" height="400" width="500">
                <StyledPolygon points={renderPoints()} />
            </StyledGraphSVG>
        </StyledGraph>
    );

};

export default Graph;