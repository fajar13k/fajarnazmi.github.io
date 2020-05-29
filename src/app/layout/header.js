import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
		const {env} = this.props;
		return(
			<header className="hidden lg:block">
				<section className="mt-10">
					<div className="max-w-5xl mx-auto px-6 md:px-8">
						<div className="mt-10">
							<a href="/" aria-current="page">
								<span className="text-4xl text-gray-700 font-bold">Fajar Nazmi Fadillah</span>
							</a>
							</div>
							<div className="flex items-center justify-between pb-6 my-6 border-b-2 border-blue-400">
							<nav className="-ml-4">
								<Link to={env} className="px-4 py-2 mr-2 text-2xl text-gray-700 rounded hover:bg-gray-300">Home</Link>
								<Link to={`${env}about`} className="px-4 py-2 mr-2 text-2xl text-gray-700 rounded hover:bg-gray-300">About</Link>
								<Link to={`${env}works`} className="px-4 py-2 mr-2 text-2xl text-gray-700 rounded hover:bg-gray-300">Works</Link>
								<Link to={`${env}contact`} className="px-4 py-2 mr-2 text-2xl text-gray-700 rounded hover:bg-gray-300">Contact</Link>
							</nav>
						</div>
					</div>
				</section>
			</header>
		);
	}
}