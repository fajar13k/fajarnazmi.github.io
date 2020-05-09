import React, { Component } from 'react';
import profilePict from '../../assets/img/fajar.jpg';

export default class AboutMe extends Component {
	render() {
		return (
			<section className="md:mt-10">
				<div className="max-w-5xl mx-auto px-6 md:px-8">
					<h1 className="text-5xl text-gray-700 font-bold">About Me</h1>
					<div className="flex items-center justify-between my-4 border-b-2 border-gray-200" />
					<div className="flex flex-wrap">
						<p className="max-w-full md:w-3/4 pr-12 text-xl text-gray-700 text-justify">I'm a shy curious mind person with lots of interest. I like to immerse myself into one topic, but quickly jump to the next when I get bored. Learning something new gives me the most satisfaction and is a common pattern in my life. I'm taking Information Technology major in <strong>Bandung, Indonesia</strong> and still, live there today.</p>
						<img alt="fajar-shot" className="h-full md:w-1/4 w-3/4 rounded-lg shadow mt-4" src={ profilePict } />
					</div>
				</div>
			</section>
		);
	}
}