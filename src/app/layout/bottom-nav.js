import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BottomNav extends Component {
	render() {
		return (
			<div className="w-full">
				<section id="bottom-navigation" className="lg:hidden md:block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
					<div id="tabs" className="flex justify-between">
						<Link className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1" to="/">
							<svg width="25" height="25" viewBox="0 0 42 42" className="inline-block mb-1">
								<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
									<path d="M21.0847458,3.38674884 C17.8305085,7.08474576 17.8305085,10.7827427 21.0847458,14.4807396 C24.3389831,18.1787365 24.3389831,22.5701079 21.0847458,27.6548536 L21.0847458,42 L8.06779661,41.3066256 L6,38.5331279 L6,26.2681048 L6,17.2542373 L8.88135593,12.4006163 L21.0847458,2 L21.0847458,3.38674884 Z" fill="currentColor" fillOpacity="0.1"></path>
									<path d="M11,8 L33,8 L11,8 Z M39,17 L39,36 C39,39.3137085 36.3137085,42 33,42 L11,42 C7.6862915,42 5,39.3137085 5,36 L5,17 L7,17 L7,36 C7,38.209139 8.790861,40 11,40 L33,40 C35.209139,40 37,38.209139 37,36 L37,17 L39,17 Z" fill="currentColor"></path>
									<path d="M22,27 C25.3137085,27 28,29.6862915 28,33 L28,41 L16,41 L16,33 C16,29.6862915 18.6862915,27 22,27 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"></path>
									<rect fill="currentColor" transform="translate(32.000000, 11.313708) scale(-1, 1) rotate(-45.000000) translate(-32.000000, -11.313708) " x="17" y="10.3137085" width="30" height="2" rx="1"></rect>
									<rect fill="currentColor" transform="translate(12.000000, 11.313708) rotate(-45.000000) translate(-12.000000, -11.313708) " x="-3" y="10.3137085" width="30" height="2" rx="1"></rect>
								</g>
							</svg>
							<span className="tab tab-home block text-xs">Home</span>
						</Link>
						<Link className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1" to="/about">
							<svg width="25" height="25" viewBox="0 0 25 25" className="inline-block mb-1">
								<path d="M11.85,11.56a5.59,5.59,0,0,0,4.09-1.69,5.59,5.59,0,0,0,1.69-4.09,5.59,5.59,0,0,0-1.69-4.09A5.59,5.59,0,0,0,11.85,0,5.59,5.59,0,0,0,7.76,1.69,5.59,5.59,0,0,0,6.07,5.78,5.59,5.59,0,0,0,7.76,9.87,5.6,5.6,0,0,0,11.85,11.56ZM8.76,2.69a4.18,4.18,0,0,1,3.09-1.28,4.18,4.18,0,0,1,3.09,1.28,4.18,4.18,0,0,1,1.28,3.09,4.18,4.18,0,0,1-1.28,3.09,4.18,4.18,0,0,1-3.09,1.28A4.18,4.18,0,0,1,8.76,8.87,4.18,4.18,0,0,1,7.47,5.78,4.18,4.18,0,0,1,8.76,2.69Z" fill="currentColor" fillOpacity="1" />
								<path d="M22,18.45a14.28,14.28,0,0,0-.19-1.52,12,12,0,0,0-.37-1.52A7.53,7.53,0,0,0,20.77,14a5.36,5.36,0,0,0-.95-1.23,4.17,4.17,0,0,0-1.36-.85,4.69,4.69,0,0,0-1.73-.31,1.76,1.76,0,0,0-.94.4l-1,.63a5.61,5.61,0,0,1-1.27.56,4.92,4.92,0,0,1-3.1,0,5.59,5.59,0,0,1-1.27-.56l-1-.63a1.76,1.76,0,0,0-.94-.4,4.69,4.69,0,0,0-1.73.31,4.16,4.16,0,0,0-1.36.85A5.36,5.36,0,0,0,3.23,14a7.55,7.55,0,0,0-.63,1.42,12,12,0,0,0-.37,1.52A14.18,14.18,0,0,0,2,18.46c0,.46,0,.94,0,1.42a4,4,0,0,0,1.18,3,4.26,4.26,0,0,0,3,1.11H17.78a4.26,4.26,0,0,0,3-1.11,4,4,0,0,0,1.18-3C22,19.39,22,18.91,22,18.45Zm-2.1,3.41a2.87,2.87,0,0,1-2.08.72H6.22a2.87,2.87,0,0,1-2.08-.72,2.6,2.6,0,0,1-.75-2c0-.45,0-.89,0-1.32a12.79,12.79,0,0,1,.18-1.37,10.56,10.56,0,0,1,.33-1.34,6.14,6.14,0,0,1,.51-1.16,4,4,0,0,1,.69-.91,2.76,2.76,0,0,1,.9-.56A3.24,3.24,0,0,1,7.16,13l.28.17,1,.64a7,7,0,0,0,1.59.71,6.32,6.32,0,0,0,4,0,7,7,0,0,0,1.59-.71l1-.64.28-.17a3.24,3.24,0,0,1,1.11.21,2.77,2.77,0,0,1,.9.56,4,4,0,0,1,.69.91,6.12,6.12,0,0,1,.51,1.16,10.54,10.54,0,0,1,.33,1.34,12.9,12.9,0,0,1,.18,1.37h0c0,.42,0,.87,0,1.32A2.6,2.6,0,0,1,19.86,21.87Z" fill="currentColor" fillOpacity="1" />
							</svg>
							<span className="tab tab-about block text-xs">About</span>
						</Link>
						<Link to="/works" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
							<svg width="25" height="25" viewBox="0 0 25 25" className="inline-block mb-1">
								<path d="M22,5H17V4a2,2,0,0,0-2-2H9A2,2,0,0,0,7,4V5H2A2,2,0,0,0,0,7V20a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V7A2,2,0,0,0,22,5ZM8,4A1,1,0,0,1,9,3h6a1,1,0,0,1,1,1V5H8ZM23,20a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V12.72A2,2,0,0,0,2,13h8v1.5a.5.5,0,0,0,.5.5h3a.5.5,0,0,0,.5-.5V13h8a2,2,0,0,0,1-.28V20ZM11,14V12h2v2Zm12-3a1,1,0,0,1-1,1H14v-.5a.5.5,0,0,0-.5-.5h-3a.5.5,0,0,0-.5.5V12H2a1,1,0,0,1-1-1V7A1,1,0,0,1,2,6H22a1,1,0,0,1,1,1Z" fill="currentColor" fillOpacity="1" />
							</svg>
							<span className="tab tab-works block text-xs">Works</span>
						</Link>
						<Link to="/contact" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
							<svg width="25" height="25" viewBox="0 0 25 25" className="inline-block mb-1">
								<path d="M22.07,15.75a13.63,13.63,0,0,1-4.28-.68,1.88,1.88,0,0,0-1.9.4l-2.7,2a14.91,14.91,0,0,1-6.71-6.7l2-2.63a1.94,1.94,0,0,0,.48-2,13.65,13.65,0,0,1-.68-4.29A1.93,1.93,0,0,0,6.33,0H1.93A1.93,1.93,0,0,0,0,1.93,22.1,22.1,0,0,0,22.07,24,1.93,1.93,0,0,0,24,22.07v-4.4A1.93,1.93,0,0,0,22.07,15.75Zm.59,6.32a.59.59,0,0,1-.59.59A20.76,20.76,0,0,1,1.33,1.93a.59.59,0,0,1,.59-.59H6.33a.59.59,0,0,1,.59.59,15,15,0,0,0,.75,4.69.66.66,0,0,1-.21.68l-2.29,3a.67.67,0,0,0-.06.7A16.55,16.55,0,0,0,13,18.89a.66.66,0,0,0,.71-.06l3.1-2.35a.59.59,0,0,1,.6-.14,15,15,0,0,0,4.7.75.59.59,0,0,1,.59.59Z" fill="currentColor" fillOpacity="1" />
							</svg>
							<span className="tab tab-contact block text-xs">Contact</span>
						</Link>
					</div>
				</section>
			</div>
		);
	}
}