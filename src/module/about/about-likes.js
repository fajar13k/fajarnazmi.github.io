import React, { Component } from 'react';
import likesJson from '../../common/json/likes.json';

export default class AboutLikes extends Component {
	render() {
		return (
			<section className="mt-10">
				<div className="max-w-5xl mx-auto px-6 md:px-8">
					<h2 className="text-4xl block"><span role="img" aria-label="likes">😁</span></h2>
					<div className="flex items-center justify-between my-4 border-b-2 border-gray-200" />
					<div className="-my-2">
						{
							likesJson.map((like) =>
								<span key={like.likes} className="text-sm md:text-xl text-gray-600 inline-block border border-neutral-200 rounded py-2 px-4 ml-2 mt-2">{like.likes}</span>
							)
						}
					</div>
				</div>
			</section>
		);
	}
}