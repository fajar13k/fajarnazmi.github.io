import React, { Component } from 'react';

export default class AboutWork extends Component {
	render() {
		return (
			<section className="mt-10">
				<div className="max-w-5xl mx-auto px-6 md:px-8">
					<h2 className="text-5xl text-gray-700 font-bold">Work</h2>
					<div className="flex items-center justify-between my-4 border-b-2 border-gray-200" />
					<div className="flex flex-wrap">
						<p className="max-w-full text-justify pr-12 text-xl text-gray-700">I've been doing design freelance here and there since 2018 mostly Branding and Logo Design, Illustration, Event Planning, and Vector. I'm currently lecturer's assistant of many lecturers in my Uni including; Basic Programming, Advanced Programming, Web Technology and Basic Web Programming, Web Design, NoSQL Database Programming. When I'm involved in client projects I'm mostly designing your icons and layouts so you can surf it smooooooooooothly.</p>
					</div>
				</div>
			</section>
		);
	}
}