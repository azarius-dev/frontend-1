import React from 'react';
import { ThemeProvider } from 'styled-components';

import { THEME_DARK } from '@constants';
import { Dapp } from '@domains';
import { NormalizerStyle, GlobalStyle, FontFaces } from '@styles';

class App extends React.Component {

    render() {

        return (
			<ThemeProvider theme={THEME_DARK}>
				<GlobalStyle />
				<NormalizerStyle />
				<FontFaces />
				<Dapp />
			</ThemeProvider>
        );
    }
}

export default App;