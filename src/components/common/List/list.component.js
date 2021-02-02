/* import components */
import { Token, Tooltip } from '../';
/* import styles */
import { StyledList, StyledListItem, StyledItemLabel, StyledItemValue } from './list.styles';

const List = props => {

    const { data } = props;

    const renderListItems = () => {
        return data.map((item, i) => {
            const [ label, value, currency, tooltip ] = item;
            return (
                <StyledListItem
                    key={i}
                >   
                    <Tooltip
                        key={i}
                        message={tooltip}
                        followCursor={true}
                    >
                        <StyledItemLabel>
                            {label}
                        </StyledItemLabel>
                    </Tooltip>
                    <StyledItemValue>
                        {currency && currency !== '' ? <Token type={currency} /> : ''}
                        {value}
                    </StyledItemValue>
                </StyledListItem>
            );
        });
    };

    if (data && data.length !== 0) {
        return (
            <StyledList>
                {renderListItems()}
            </StyledList>
        );
    } else return null;

};

export default List;