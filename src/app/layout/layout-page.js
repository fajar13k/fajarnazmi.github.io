import React, { Component } from 'react';
import { Router, Route, Switch, } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import history from '../../common/history';
import Header from './header';
import Footer from './footer';
import BottomNav from './bottom-nav';
import AboutPage from '../about/about-page';
import HomePage from '../home/home-page';
import WorksPage from '../works/works-page';
import ContactPage from '../contact/contact-page';
import { DEV_ENV, PROD_ENV } from '../../common/route-utils';

class LayoutPage extends Component {
	render() {
		const envVar = 'PROD_ENV';
		const env = envVar === 'DEV_ENV' ? DEV_ENV : PROD_ENV;
		return (
			<Router history={history}>
				<Helmet defaultTitle="Fajar Nazmi" />
				<div className="flex flex-col min-h-screen antialiased">
					<Header env={env} />
					<Switch>
						<Route exact path={env} component={HomePage} />
						<Route path={`${env}about`} component={AboutPage} />
						<Route path={`${env}works`} component={WorksPage} />
						<Route path={`${env}contact`} component={ContactPage} />
					</Switch>
					<BottomNav />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default LayoutPage;