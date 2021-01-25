/* import components */
import { Token } from '../';
/* import styles */
import { StyledList, StyledListItem, StyledItemLabel, StyledItemValue } from './list.styles';

const List = props => {

    const { data } = props;

    const renderListItems = () => {
        return data.map((item, i) => {
            const [ label, value, currency ] = item;
            return (
                <StyledListItem
                    key={i}
                >
                    <StyledItemLabel>
                        {label}
                    </StyledItemLabel>
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