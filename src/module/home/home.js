import React, { Component } from 'react';

export default class Home extends Component {
	render() {
		return (
			<main className="flex flex-col flex-1 w-full mx-auto mb-20 md:mb-6">
				<section className="mt-10">
					<div className="max-w-5xl mx-auto px-6 md:px-8">
						<p className="text-gray-600 text-4xl">Hello!<span role="img" aria-label="hello"> 👋</span></p>
						<h2 className="text-4xl md:text-6xl text-gray-700 leading-tight font-bold mb-8 border-b-0">
							I'm Fajar Nazmi Fadillah. Some Indonesian Design Nerd.
						</h2>
						<a href="mailto:fajar.fj13@gmail.com" className="inline-flex items-center justify-center py-3 px-6 rounded-lg font-bold text-xl text-white h-full bg-blue-500 hover:bg-blue-600">
							<div className="mr-2 h-8 w-6">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 36" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path className="a" d="M7.95,35.4h6.64A6.1,6.1,0,0,0,20,32l5.79-11.12a1.61,1.61,0,0,0-.31-1.18l-.3-.25a3.47,3.47,0,0,0-2.6-.92A3.53,3.53,0,0,0,20,19.87l-.69.84h0V8.35a2.68,2.68,0,0,0-2.6-2.73,2.63,2.63,0,0,0-1.51.51h0V5.18a2.63,2.63,0,0,0-2.56-2.72h0a2.64,2.64,0,0,0-2.56,2.32h0a2.48,2.48,0,0,0-1.53-.53A2.66,2.66,0,0,0,5.94,7V9.71h0a2.45,2.45,0,0,0-1.51-.48h0A2.65,2.65,0,0,0,1.8,11.95c0,3.9,0,10.77,0,16.92A6.35,6.35,0,0,0,7.95,35.4ZM2.88,12a1.57,1.57,0,0,1,1.5-1.63h0a1.56,1.56,0,0,1,1.51,1.62V19a.56.56,0,0,0,.51.56A.54.54,0,0,0,7,19.07V7A1.57,1.57,0,0,1,8.52,5.33,1.57,1.57,0,0,1,10,7V19.05a.56.56,0,0,0,.51.56.54.54,0,0,0,.58-.54V5.18a1.59,1.59,0,0,1,1.52-1.64h0a1.58,1.58,0,0,1,1.5,1.64V8.28s0,.05,0,.08,0,0,0,0c0,1.37,0,2.86,0,4.28,0,3.29,0,6.13,0,6.4a.54.54,0,1,0,1.08,0c0-.28,0-3.11,0-6.4,0-1.45,0-3,0-4.38a1.51,1.51,0,1,1,3,.06V22.24a.54.54,0,0,0,1,.34l1.66-2a2.46,2.46,0,0,1,1.73-.92,2.4,2.4,0,0,1,1.8.65l0,0h0a.45.45,0,0,1,.11.56L19,31.53a5,5,0,0,1-4.42,2.78H7.95a5.27,5.27,0,0,1-5.06-5.44C2.88,22.72,2.87,15.85,2.88,12Z"/></svg>
							</div>
							Hire Me
						</a>
					</div>
				</section>
			</main>
		);
	}
}