import { useState } from 'react';

/* import components */
import { Card, Graph, Tabs, Tab } from '@domains/Dapp/views/Dashboard/domains/Dapp/layout/Sidepanel/domains/Dapp/layout/PoolStake/domains/Dapp/views/DashboardView/components/common';
import { DisplaySmall } from 'domains/Dapp/layout/Sidebar/SidebarLogo/domains/Dapp/layout/Sidebar/SidebarLogo/domains/Dapp/layout/Sidepanel/domains/Dapp/layout/PoolStake/theme';
/* import styles */
import { StyledTabbedChartCard, StyledCardHeader, StyledHeaderCurrentValue } from './tabbed-chart-card.styles';

const TabbedChartCard = props => {

    const { label, symbol, info, status, color, gutter, minHeight, isLoading, activeParts, defaultTabKey, tabsData } = props;

    const [ currentValueY, setCurrentValueY ] = useState(null);

    const onChangeValueY = value => {
        setCurrentValueY(value);
    };

    const renderTabs = () => {
        if (!tabsData || tabsData.length === 0) {return null}
        return (
            <Tabs
                defaultTab={defaultTabKey}
                horizontal
                outlined
            >
                {tabsData.map((tab, i) => {
                    const { tabKey, labelX, labelY, graphData } = tab;
                    return (
                        <Tab
                            key={tabKey}
                            eventKey={tabKey}
                            label={tabKey}
                        >
                            <Graph 
                                labelX={labelX}
                                labelY={labelY}
                                symbol={symbol}
                                onChangeValueY={onChangeValueY}
                                data={graphData}
                            />
                        </Tab>
                    );
                })}
            </Tabs>
        );
    };

    return (
        <StyledTabbedChartCard>
            <StyledCardHeader>
                <DisplaySmall>
                    {label}
                </DisplaySmall>
                <StyledHeaderCurrentValue>
                    {currentValueY !== null && currentValueY !== undefined ? currentValueY.toFixed(2) : ''}
                    {symbol}
                </StyledHeaderCurrentValue>
            </StyledCardHeader>
            <Card
                isLoading={isLoading}
                status={status}
                color={color}
                gutter={gutter}
                minHeight={minHeight}
                activeParts={activeParts}
            >
                {renderTabs()}
            </Card>
        </StyledTabbedChartCard>
    );

};

export default TabbedChartCard;