import React from 'react';
import { CustomPicker } from 'react-color';
import { Saturation, Hue, EditableInput } from 'react-color/lib/components/common';

/* import styles */
import { StyledColorPicker, StyledSaturationBlock, StyledHueSlider } from './colorpicker.styles';

class ColorPicker extends React.Component {

    state = {
        hsl: {
            h: 0,
            s: 0,
            l: 0
        },
        hsv: {
            h: 0,
            s: 0,
            v: 0
        },
        hex: 'aaaaaa'
    };

    onChange = (color, event) => {
        console.log(color);
        this.setState({color});
    }

    onChangeComplete = (color, event) => {
        console.log('end ' + color);
    }

    render() {

        return (
            <StyledColorPicker>
                <StyledSaturationBlock>
                    <Saturation 
                        {...this.props}
                        onChange={this.onChange}
                    />
                </StyledSaturationBlock>
                <StyledHueSlider>
                    <Hue 
                        {...this.props}
                        onChange={this.onChange}
                    />
                </StyledHueSlider>
                <EditableInput />
            </StyledColorPicker>
        );
    }
}

export default CustomPicker(ColorPicker);