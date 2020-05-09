import React, { Component } from 'react';
import AboutComponent from '../../module/about/about';
import { Helmet } from 'react-helmet';

export default class AboutPage extends Component {
	render() {
		return (
			<AboutComponent>
				<Helmet>
					<title>Home</title>
				</Helmet>
			</AboutComponent>
		);
	}
}