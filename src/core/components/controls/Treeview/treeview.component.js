import React, { useState, useRef, useEffect } from 'react';

import { CaretDownIcon, CaretRightIcon } from '@icons';
import { StyledTreeView, StyledTreeItem, StyledTreeItemContent, StyledTreeList, StyledIcon } from './treeview.styles';

const renderChildrenWithProps = (children, reverse, props) => {
    if (!children) {return null}
    const childrenClone = Array.isArray(children) ? [...children] : [children];
    if (reverse) {childrenClone.reverse()}
    return (childrenClone.map(child => {
        return React.cloneElement(child, {key: child.props.id, ...props}, child.props.children);
    }));
};

const TreeView = props => {

    const {
        reverseOrder,
        onToggleItem,
        onSelectItem,
        onHoverItem,
        expanded,
        selected,
        hovered,
        children
    } = props;

    const [ expandedIds, setExpandedIds ] = useState(expanded || []);
    const [ selectedIds, setSelectedIds ] = useState(selected || []);
    const [ hoverId, setHoverId ] = useState(hovered || null);
    const treeViewRef = useRef(null);

    const onToggle = toggleId => {
        if (onToggleItem) {onToggleItem()}
        const index = expandedIds.indexOf(toggleId);
        const localIds = expandedIds;
        if (index === -1) {
            localIds.push(toggleId);
        } else {
            localIds.splice(index, 1);
        }
        setExpandedIds(localIds);
    };

    const onSelect = id => {
        if (onSelectItem) {onSelectItem()}
        setSelectedIds([id]);
    };

    const onHover = id => {
        if (onHoverItem) {onHoverItem()}
        setHoverId(id);
    };

    return (
        <StyledTreeView ref={treeViewRef}>
            <TreeList>
                {renderChildrenWithProps(children, reverseOrder, { indentLevel: 0, expanded: expandedIds, selected: selectedIds, hovered: hoverId, onToggle: onToggle, onSelect: onSelect, onHover: onHover,  ...props})}
            </TreeList>
        </StyledTreeView>
    );
};

export const TreeItem = props => {

    const { id, content, indentLevel, children, ...other } = props;
    const { indent, reverseOrder, expanded, selected, hovered, onToggle, onSelect, onHover } = other;

    other.indentLevel = indentLevel + 1;

    const onMouseDownItem = e => {
        onSelect(id);
    };

    const onClickIcon = e => {
        onToggle(id);
    };

    const renderIcon = () => {
        if (!children) {return null}
        return (
            <StyledIcon onClick={e => onClickIcon(e)}>
                {expanded.includes(id) ? <CaretDownIcon /> : <CaretRightIcon />}
            </StyledIcon>
        );
    };

    const renderChildren = () => {
        if (!children || !expanded.includes(id)) {return null}
        return (
            <TreeList>
                {renderChildrenWithProps(children, reverseOrder, other)}
            </TreeList>
        );
    };

    return (
        <React.Fragment>
            <StyledTreeItem
                selected={selected.includes(id)}
                hovered={hovered === id}
                onMouseDown={e => onMouseDownItem(e)}
                onMouseEnter={() => onHover(id)}
                onMouseLeave={() => onHover(null)}
            >
                <StyledTreeItemContent style={{ paddingLeft: indent * indentLevel }}>
                    {renderIcon()}
                    {content}
                </StyledTreeItemContent>
            </StyledTreeItem>
            {renderChildren()}
        </React.Fragment>
    );
}

export const TreeList = props => {
    
    const { children } = props;

    return (
        <StyledTreeList>
            {children}
        </StyledTreeList>
    );
};

export default TreeView;