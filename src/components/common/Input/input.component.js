import React, { useState, useEffect, useRef } from 'react';

import { StyledInputContainer, StyledInput, StyledAdornment } from './input.styles';

const Input = props => {

    const { id, type, value, status, min, max, placeholder, size, adornments, forceLowerCase, forceRemoveSpecialChars, isFocused, onFocus, onChange, onBlur, style } = props;

    const [ localValue, setLocalValue ] = useState(value);
    const inputRef = useRef(null);

    /*const forceNumberRange = value => {
        if (type !== 'number') { return value }
        if (value < min) {return min}
        if (value > max) {return max}
    };*/

    const onChangeValue = e => {
        let value = e.target.value;

        if (type === 'text') {
            if (forceLowerCase) {value = value.toLowerCase()}
            if (forceRemoveSpecialChars) {value = value.replace(/[^a-zA-Z0-9]/g, "-")}
        }

        setLocalValue(value);
        if (onChange) { onChange(value) }
    };

    const onEnterKeyDown = e => {
        if (e.key !== 'Enter' || !inputRef.current) {return}
        inputRef.current.blur();
    };

    const onInputFocus = e => {
        if (onFocus) {onFocus(localValue)}
        document.addEventListener('keydown', onEnterKeyDown);
    };

    const onInputBlur = () => {
        if (type === 'number' && localValue === '') {
            if (onBlur) {onBlur(min)}
            setLocalValue(min);
            return;
        }
        document.removeEventListener('keydown', onEnterKeyDown);
        if (onBlur) {onBlur(localValue)}
    };

    const renderAdornment = (type, size) => {
        if (!['leftOut', 'leftIn', 'rightIn', 'rightOut'].includes(type) || !adornments || !adornments[type]) {return null}
        return (
            <StyledAdornment 
                type={type}
                size={size}
            >
                {adornments[type]}
            </StyledAdornment>
        );
    };

    useEffect(() => {
        if (isFocused) {inputRef.current.focus()}
        if (!isFocused) {inputRef.current.blur()}
    }, [isFocused]);

    useEffect(() => {
        setLocalValue(value);
    }, [value]);

    return(
        <StyledInputContainer
            style={style}
        >   
            {renderAdornment('leftOut', size)}
            {renderAdornment('leftIn', size)}
            <StyledInput 
                ref={inputRef}
                id={id}
                value={localValue}
                placeholder={placeholder}
                type={type}
                min={min}
                max={max}
                onFocus={ e => onInputFocus(e) }
                onChange={ e => onChangeValue(e) }
                onBlur={onInputBlur}
                size={size}
            />
            {renderAdornment('rightIn', size)}
            {renderAdornment('rightOut', size)}
        </StyledInputContainer>
    );
};

Input.defaultProps = {
    id: Date.now(),
    type: 'text',
    placeholder: 'placeholder',
    min: 0,
    max: 100000,
    size: 'small',
    onFocus: () => null,
    onChange: () => null,
};

export default Input;