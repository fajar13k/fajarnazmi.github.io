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

class LayoutPage extends Component {
	render() {
		return (
			<Router history={history}>
				<Helmet defaultTitle="Fajar Nazmi" />
				<div className="flex flex-col min-h-screen antialiased">
					<Header />
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/about" component={AboutPage} />
						<Route path="/works" component={WorksPage} />
						<Route path="/contact" component={ContactPage} />
					</Switch>
					<BottomNav />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default LayoutPage;