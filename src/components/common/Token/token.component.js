import { debaseLogoPNG, degovLogoPNG, daiLogoPNG, placeholderTokenPNG } from '../../../assets/img';

/* import styles */
import { StyledToken } from './token.styles';

const Token = props => {

    const { type } = props;

    switch(type) {
        case 'debase': return (
            <StyledToken 
                title="Debase"
                src={debaseLogoPNG}
                alt="Debase"
            />
        )
        case 'degov': return (
            <StyledToken 
                title="Degov"
                src={degovLogoPNG}
                alt="Degov"
            />
        )
        case 'dai': return (
            <StyledToken 
                title="Dai"
                src={daiLogoPNG}
                alt="Dai"
            />
        )
        default: return (
            <StyledToken 
                src={placeholderTokenPNG}
            />
        )
    }

};

export default Token;