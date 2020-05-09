import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<section className="mt-10 mb-10 md:block hidden">
				<div className="max-w-5xl mx-auto px-6 md:px-8">
					<footer className="flex justify-between items-center">
						<div>
							<span className="opacity-50 text-base">© 2020 Fajar Nazmi Fadillah</span>
						</div>
						<div>
							<p className="opacity-50 text-base">Made with<span role="img" aria-label="love"> 💖 </span> - <a href="https://tailwindcss.com/" className="opacity-75 text-base hover:opacity-100 border-b-2 border-blue-500">Tailwind</a> and <a href="https://reactjs.org/" className="opacity-75 text-base hover:opacity-100 border-b-2 border-blue-500">React</a></p>
						</div>
					</footer>
				</div>
			</section>
		);
	}
}