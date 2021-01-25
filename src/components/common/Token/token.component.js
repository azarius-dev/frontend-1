import { debaseLogo, degovLogo, daiLogo, emptyLogo } from '../../../assets/img';

/* import styles */
import { StyledToken } from './token.styles';

const Token = props => {

    const { type } = props;

    switch(type) {
        case 'debase': return (
            <StyledToken 
                title="Debase"
                src={debaseLogo}
                alt="Debase"
            />
        )
        case 'degov': return (
            <StyledToken 
                title="Degov"
                src={degovLogo}
                alt="Degov"
            />
        )
        case 'dai': return (
            <StyledToken 
                title="Dai"
                src={daiLogo}
                alt="Dai"
            />
        )
        default: return (
            <StyledToken 
                src={emptyLogo}
            />
        )
    }

};

export default Token;