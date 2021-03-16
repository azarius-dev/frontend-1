import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
	NormalizerStyle,
	GlobalStyle,
	FontFaces,
	THEME_DARK
} from '@theme';
import { RootContext } from 'contexts';
import { Dapp } from 'domains';

class App extends React.Component {

    render() {

        return (
			<ThemeProvider theme={THEME_DARK}>
				<GlobalStyle />
				<NormalizerStyle />
				<FontFaces />
				<RootContext.Provider value={this.props}>
					<Dapp />
				</RootContext.Provider>
			</ThemeProvider>
        );
    }
}

export default App;