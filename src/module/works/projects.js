import React, { Component } from 'react';
import projectsJson from '../../common/json/projects.json';

export default class Projects extends Component {
  render() {

    const bgImg = (src) => ({
      backgroundImage: 'url(' + require(`../../assets/img/${src}`) + ')'
    })

    return (
      <div>
        {
          projectsJson.map((project, i) =>
          <section key={i} className="mt-8">
            <div className="max-w-5xl mx-auto px-6 md:px-8">
              <div className="lg:flex lg:justify-center">
                <div className="bg-white lg:flex lg:max-w-5xl sm:shadow-lg lg:rounded-lg">
                  <div className="lg:w-1/2">
                    <div className="h-64 bg-cover lg:rounded-lg lg:h-full" style=
                    {
                      project.image == null ? bgImg("no-image.jpg") : bgImg(project.image)
                    } />
                  </div>
                  <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                    <h2 className="text-3xl text-gray-800 font-bold">{project.title} <span className="inline bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{project.year}</span></h2>
                    <p className="mt-4 text-gray-600 text-justify">{project.description}</p>
                    <div className="mt-8">
                      {
                        project.detailLink == null ? "" : <a href={project.detailLink} className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">More Details</a>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          )
        }
      </div>
    );
  }
}