import { useContext } from 'react';

/* import components */
import { Button, IconButton, Card, StatusIndicator, List, Tooltip } from '..';
import { DisplaySmall } from '../../../theme';
/* import contexts */
import { SidepanelContext } from '../../../contexts';
/* import utils */
import { getIcon } from './pool.utils';
/* import styles */
import { StyledPool, StyledPoolHeader, StyledTitleWrapper, StyledSubtitle, StyledInfo, StyledPoolBody, StyledPoolCard, StyledPoolLinks, StyledPoolAnchor, StyledPoolFooter } from './pool.styles';
/* import assets */
import { HelpIcon } from '../../../assets/icons';

const Pool = props => {

    const { title, subtitle, info, tooltip, status, data, links, sidepanelContent, sidepanelFooter } = props;

    const { handleSidepanel } = useContext(SidepanelContext);

    const renderTooltip = () => {
        if (!tooltip || tooltip === '') {return null}
        return (
            <StyledInfo>
                <Tooltip
                    message={tooltip}
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
                <StatusIndicator status={status} />
                <StyledTitleWrapper>
                    <DisplaySmall
                        color="text"
                    >
                        {title}
                    </DisplaySmall>
                    <StyledSubtitle>
                        {renderSubtitle()}
                    </StyledSubtitle>
                </StyledTitleWrapper>
                {renderTooltip()}
            </StyledPoolHeader>
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
    const renderSidepanelContent = () => {
        if (!sidepanelContent) {return null}
        return sidepanelContent;
    };
    const renderSidepanelFooter= () => {
        if (!sidepanelFooter) {return null}
        return sidepanelFooter;
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
                        <List data={data} />
                    </Card>
                </StyledPoolCard>
                {renderLinks()}
            </StyledPoolBody>
            <StyledPoolFooter>
                <Button
                    color={status === 'active' ? 'secundary' : 'primary'}
                    onClick={() => handleSidepanel({
                        color: 'primary',
                        title: title,
                        hasBackdrop: true,
                        detectOutsideClick: true,
                        bodyContent: renderSidepanelContent(),
                        footerContent: renderSidepanelFooter()
                    })}
                >
                    {status === 'active' ? 'stake' : 'withdraw'}
                </Button>
            </StyledPoolFooter>
        </StyledPool>
    );

};

Pool.defaultProps = {

};

export default Pool;