/* import components */
import { Button, Card, StatusIndicator, List } from '../../../common';
import { DisplaySmall } from '../../../../theme';
/* import styles */
import { StyledPool, StyledPoolHeader, StyledPoolBody, StyledPoolLinks, StyledPoolFooter } from './pool.styles';

const Pool = props => {

    const { label, status, data, links } = props;

    const renderLinks = () => {
        if (!links || links.length === 0) {return null}
        return (
            <StyledPoolLinks>
                {links.map((link, i) => {
                    return (
                        <div>{i}</div>
                    );
                })}
            </StyledPoolLinks>
        );
    }

    return (
        <StyledPool>
            <StyledPoolHeader>
                <StatusIndicator status={status} />
                <DisplaySmall
                    color="text"
                >
                    {label}
                </DisplaySmall>
            </StyledPoolHeader>
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
                <Button>
                    Stake
                </Button>
            </StyledPoolFooter>
        </StyledPool>
    );

};

Pool.defaultProps = {

};

export default Pool;