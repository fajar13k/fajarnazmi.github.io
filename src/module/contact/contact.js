import React, { Component } from 'react';
import Skills from './skills';
import Socials from './socials';
import profilePict from '../../assets/img/fajar.jpg';

export default class Contact extends Component {
  render() {
    return (
      <main className="flex flex-col flex-1 w-full mx-auto mb-20 md:mb-6">
        <section className="md:mt-10">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <h1 className="text-5xl text-gray-700 font-bold">Contacting</h1>
            <div className="flex items-center justify-between my-4 border-b-2 border-gray-200" />
            <div className="flex flex-wrap">
              <p className="max-w-xl md:w-3/4 pr-8 text-xl text-justify text-gray-700">There are many platforms that I registered on, but please refer to these that I specify inside the card with my name on it. Let's work and collab together, develop something new, solve your problem, and bring all those new customers to your business!</p>
              <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden mt-4">
								<img className="w-full h-56 object-cover object-center" src={ profilePict } alt="avatar" />
								<div className="flex items-center px-6 py-3 bg-gray-900">
									<svg className="h-6 w-6 text-white fill-current" viewBox="0 0 512 512">
										<path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z"/>
									</svg>
									<h1 className="mx-3 text-white font-semibold text-lg">Open for Opportunities</h1>
								</div>
								<div className="py-4 px-6">
									<h1 className="text-2xl font-semibold text-gray-800">Fajar Nazmi Fadillah</h1>
									<Skills />
									<Socials />
								</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}