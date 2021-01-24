import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import _ from 'lodash';

import { ethers } from 'ethers';
import { getWeb3ReactContext, UnsupportedChainIdError } from '@web3-react/core';
import { InjectedConnector, NoEthereumProviderError, UserRejectedRequestError } from '@web3-react/injected-connector';

/* import components */
import { BaseLayout, SideBar, Navigation } from './components/layout';
import { DashboardView, RebaseView, PoolsView } from './components/views';
/* import contexts */
import { UIContext, WalletContext } from './contexts';
import { ThemeProvider } from 'styled-components';
/* import styles */
import { GlobalStyle, NormalizerStyle, FontFaces, BackgroundDots, BackgroundGradient, BackgroundDecoration, darktheme } from './theme';
/* import assets */
import { DashboardIcon, TuneIcon, AccountTreeIcon } from './assets/icons';

const injectedConnector = new InjectedConnector({ supportedChainIds: [1] });

/* component declaration */
class App extends React.Component {

	static contextType = getWeb3ReactContext();

	/* GLOBAL STATE */
	state = {
		ui: {
			theme: 'dark',
			activeRoute: {}
		},

		pools: []
	}

	/* UI LOGIC */
	changeActiveRoute = data => {
		const prevState = _.cloneDeep(this.state);
		const { ui } = prevState;
		ui.activeRoute = data;
		this.setState({ ui });
	};

	/* WALLET LOGIC */
	connectAccount = () => {
		this.context.activate(injectedConnector);
	}

	/* coming soon -> not available in current metamask api */
	disconnectAccount = () => {
		this.context.deactivate();
	}
	/* coming soon -> not available in current metamask api */
	switchAccount = () => {

	}

	/* ROUTER RENDERS */
	renderSidebar = () => {
		return (
			<SideBar>
				<Navigation
					data={[
						{
							id: 'dashboard-view',
							label: 'Overview',
							icon: <DashboardIcon />,
							link: '/'
						},
						{
							id: 'rebase-view',
							label: 'Rebase',
							icon: <TuneIcon />,
							link: '/rebase'
						},
						{
							id: 'pools-view',
							label: 'Pools',
							icon: <AccountTreeIcon />,
							link: '/pools'
						}
					]}
				/>
			</SideBar>
		);
	}
	renderViews = () => {
		return (
			<Switch>
				<Route path='/rebase'>
					<RebaseView />
				</Route>
				<Route path='/pools'>
					<PoolsView />
				</Route>
				<Route path='/'>
					<DashboardView />
				</Route>
			</Switch>
		);
	}

	/* LIFECYCLE */
	componentDidMount() {

		/* detect MetaMask account connection */
		/* if already connected, auto activate */
		const ethereum = window.ethereum;
		if (ethereum && ethereum.isMetaMask) {
			ethereum
				.request({ method: 'eth_accounts' })
				.then(data => {
					if (data.length !== 0) {
						this.connectAccount();
					}
				});
		}
	}

	/* COMPONENT RETURN RENDER */
	render() {

		const { ui } = this.state;

		const uiMethods = {
			changeActiveRoute: this.changeActiveRoute
		};

		const walletMethods = {
			connectAccount: this.connectAccount,
			disconnectAccount: this.disconnectAccount,
			switchAccount: this.switchAccount
		};

		return (
			<ThemeProvider theme={ darktheme }>
				<GlobalStyle />
				<NormalizerStyle />
				<FontFaces />
				<BackgroundDecoration />
				<BackgroundGradient />
				<BackgroundDots 
					size={1}
					distance={45}
				/>
				<UIContext.Provider value={{ ui, uiMethods }}>
					<WalletContext.Provider value={{ walletMethods }}>
						<Router>
							<BaseLayout sidebar={this.renderSidebar()}>
								{this.renderViews()}
							</BaseLayout>
						</Router>
					</WalletContext.Provider>
				</UIContext.Provider>
			</ThemeProvider>
		);
	}

}

export default App;