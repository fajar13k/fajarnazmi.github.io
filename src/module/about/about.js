import React, { Component } from 'react';
import AboutMe from './about-me';
import AboutLikes from './about-likes';
import AboutDislike from './about-dislike';

export default class About extends Component {
	render() {
		return (
			<main className="flex flex-col flex-1 w-full mx-auto mb-20 md:mb-6">
				<AboutMe />
				<AboutLikes />
				<AboutDislike />
			</main>
		);
	}
}
