import React, { Component } from 'react';
import AboutWork from './about-work';
import WorkPortfolio from './work-portfolio';
import Projects from './projects';

export default class Works extends Component {
  render() {
    return (
      <main className="flex flex-col flex-1 w-full mx-auto mb-20 md:mb-6">
        <AboutWork />
        <WorkPortfolio />
        <Projects />
      </main>
    );
  }
}