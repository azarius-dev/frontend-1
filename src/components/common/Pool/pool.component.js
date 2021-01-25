import { useContext } from 'react';

/* import components */
import { Button, IconButton, Card, StatusIndicator, List } from '..';
import { DisplaySmall } from '../../../theme';
/* import contexts */
import { SidepanelContext } from '../../../contexts';
/* import utils */
import { getIcon } from './pool.utils';
/* import styles */
import { StyledPool, StyledPoolHeader, StyledPoolBody, StyledPoolLinks, StyledPoolAnchor, StyledPoolFooter } from './pool.styles';

const Pool = props => {

    const { title, subtitle, info, status, data, links, sidepanelContent } = props;

    const { handleSidepanel } = useContext(SidepanelContext);

    const renderHeader = size => {
        return (
            <StyledPoolHeader>
                <StatusIndicator status={status} />
                <DisplaySmall
                    color="text"
                >
                    {title}
                </DisplaySmall>
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

    return (
        <StyledPool>
            {renderHeader()}
            <StyledPoolBody>
                <Card
                    status={status}
                    color="primary"
                    gutter={1}
                >
                    <List data={data} />
                </Card>
                {renderLinks()}
            </StyledPoolBody>
            <StyledPoolFooter>
                <Button
                    color={status === 'active' ? 'secundary' : 'primary'}
                    onClick={() => handleSidepanel({
                        color: status === 'active' ? 'secundary' : 'primary',
                        title: renderHeader(),
                        hasBackdrop: true,
                        detectOutsideClick: true,
                        bodyContent: sidepanelContent
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