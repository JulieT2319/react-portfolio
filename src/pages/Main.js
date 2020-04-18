import React, { Component } from 'react';
import Card from "../components/Card"
import { projects } from '../utils/projects'
export default class Main extends Component {

  state = {

  }

  render() {
    return (
      <div className="center container">
        <div class="row">
          {projects.map(project => (
            <Card
              title={project.title}
              description={project.description}
              screenshot={project.screenshot}
              repo={project.repo}
              deployment={project.deployment}
            />
          )
          )
          }
        </div>
      </div>
    )
  }
}

