/* import styles */
import { StyledList, StyledListItem, StyledItemLabel, StyledItemValue } from './list.styles';

const List = props => {

    const { data } = props;

    const renderListItems = () => {
        return data.map((item, i) => {
            const [ label, value ] = item;
            return (
                <StyledListItem
                    key={i}
                >
                    <StyledItemLabel>
                        {label}
                    </StyledItemLabel>
                    <StyledItemValue>
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