import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import _ from 'lodash';

import { ethers } from 'ethers';
import { Web3ReactProvider } from '@web3-react/core';

/* import components */
import { BaseLayout, SideBar, Navigation } from './components/layout';
import { DashboardView, RebaseView, PoolsView } from './components/views';
/* import contexts */
import { UIContext } from './contexts';
/* import styles */
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, NormalizerStyle, BackgroundDots, BackgroundGradient, darktheme } from './theme';
/* import assets */
import { DashboardIcon, ExtensionIcon } from './assets/icons';

const getLibrary = provider => {
	const library = new ethers.providers.Web3Provider(provider);
	library.pollingInterval = 12000;
	return library;
};

/* component declaration */
class App extends React.Component {

	/* GLOBAL STATE */
	state = {
		ui: {
			theme: 'dark',
			activeRoute: {}
		}
	}

	/* UI LOGIC */
	changeActiveRoute = data => {
		const prevState = _.cloneDeep(this.state);
		const { ui } = prevState;
		ui.activeRoute = data;
		this.setState({ ui });
	};
	/* WALLET LOGIC */


	/* LIFECYCLE */

	/* CONDITIONAL RENDERS */

	/* ROUTER RENDERS */
	renderSidebar = () => {
		return (
			<SideBar>
				<Navigation
					data={[
						{
							id: 'dashboard-view',
							label: 'Dashboard',
							icon: <DashboardIcon />,
							link: '/'
						},
						{
							id: 'rebase-view',
							label: 'Rebase',
							icon: <ExtensionIcon />,
							link: '/rebase'
						},
						{
							id: 'pools-view',
							label: 'Pools',
							icon: <ExtensionIcon />,
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

	/* COMPONENT RETURN RENDER */
	render() {

		const { ui } = this.state;

		const uiMethods = {
			changeActiveRoute: this.changeActiveRoute
		};

		return (
			<Web3ReactProvider getLibrary={getLibrary}>
				<ThemeProvider theme={ darktheme }>
					<GlobalStyle />
					<NormalizerStyle />
					<BackgroundGradient />
					<BackgroundDots 
						size={2}
						distance={45}
					/>
					<UIContext.Provider value={{ ui, uiMethods }}>
						<Router>
							<BaseLayout sidebar={this.renderSidebar()}>
								{this.renderViews()}
							</BaseLayout>
						</Router>
					</UIContext.Provider>
				</ThemeProvider>
			</Web3ReactProvider>
		);
	}

}

export default App;