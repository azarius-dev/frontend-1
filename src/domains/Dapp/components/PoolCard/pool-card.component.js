import { useContext } from 'react';
import _ from 'lodash';

/* import components */
import { Button, IconButton, Card, StatusIndicator, List, Tooltip } from 'components/common';
import { DisplaySmall } from 'theme';
/* import contexts */
import { SidepanelContext } from 'contexts';
/* import utils */
import { getIcon } from './pool-card.utils';
/* import styles */
import { StyledPool, StyledPoolHeader, StyledTitleWrapper, StyledSubtitle, StyledInfo, StyledPoolBody, StyledPoolCard, StyledPoolLinks, StyledPoolLists, StyledHighlightData, StyledPoolAnchor, StyledPoolFooter } from './pool-card.styles';
/* import assets */
import { HelpIcon } from 'assets/icons';

const PoolCard = props => {

    const { title, subtitle, tooltip, status, data, highlightData, links, sidepanelContent } = props;

    const { handleSidepanel } = useContext(SidepanelContext);

    const renderTooltip = () => {
        if (!tooltip || tooltip === '') {return null}
        return (
            <StyledInfo>
                <Tooltip
                    message={tooltip}
                    followCursor={true}
                >
                    <HelpIcon />
                </Tooltip>
            </StyledInfo>
        );
    };
    const renderSubtitle = () => {
        if (!subtitle) {return null}
        return (
            <StyledSubtitle>
                {subtitle}
            </StyledSubtitle>
        );
    };
    const renderHeader = () => {
        return (
            <StyledPoolHeader>
                <Tooltip
                    message={status}
                    followCursor={true}
                >
                    <StatusIndicator
                        status={status}
                    />
                </Tooltip>
                <StyledTitleWrapper>
                    <DisplaySmall
                        color="text"
                    >
                        {title}
                    </DisplaySmall>
                    {renderSubtitle()}
                </StyledTitleWrapper>
                {renderTooltip()}
            </StyledPoolHeader>
        );
    };
    const renderLists = () => {
        if (!data || data.length === 0) {return null}
        const localData = _.cloneDeep(data);
        const splicedData = [];
        while(localData.length > 0) {
            splicedData.push(localData.splice(0,6));
        }
        return splicedData.map((listData, i) => {
            return (
                <List 
                    key={i}
                    alternateRows={false}
                    data={listData}
                />
            );
        });
    };
    const renderHighlightData = () => {
        if (!highlightData || highlightData === 0) {return null}
        return (
            <StyledHighlightData>
                <List
                    alternateRows={false}
                    data={highlightData}
                />
            </StyledHighlightData>
        );
    };
    const renderLinks = () => {
        if (!links || links.length === 0) {return null}
        return (
            <StyledPoolLinks>
                {links.map((link, i) => {
                    const { icon, url } = link;
                    return (
                        <IconButton
                            key={i}
                            color="primary"
                            size="medium"
                            edge="rounded"
                        >
                            <StyledPoolAnchor
                                target="_blank"
                                href={url}
                            >
                                {getIcon(icon)}
                            </StyledPoolAnchor>
                        </IconButton>
                    );
                })}
            </StyledPoolLinks>
        );
    };
    const renderSidePanelContent = () => {
        if (!sidepanelContent) return null;
        return sidepanelContent;
    };

    return (
        <StyledPool>
            {renderHeader()}
            <StyledPoolBody>
                <StyledPoolCard>
                    <Card
                        status={status}
                        color="primary"
                        gutter={1}
                    >
                        <StyledPoolLists>
                            {renderLists()}
                        </StyledPoolLists>
                        {renderHighlightData()}
                    </Card>
                </StyledPoolCard>
                {renderLinks()}
            </StyledPoolBody>
            <StyledPoolFooter>
                <Button 
                    variant="offset"
                    color="primary"
                    onClick={() => handleSidepanel({
                        headerContent: renderHeader(),
                        bodyContent: renderSidePanelContent(),
                        color: 'secundary'
                    })}
                >
                    stake
                </Button>
            </StyledPoolFooter>
        </StyledPool>
    );

};

PoolCard.defaultProps = {

};

export default PoolCard;