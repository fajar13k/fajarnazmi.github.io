import React, { Component } from 'react';
import skillsJson from '../../common/json/skills.json';

export default class Skills extends Component {
  render() {
    return (
      <div className="mt-4 pt-4 flex flex-wrap border-t">
        {
            skillsJson.map((skill) =>
              <div key={skill.skills} className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">{skill.skills}</div>
            )
        }
      </div>
    );
  }
}