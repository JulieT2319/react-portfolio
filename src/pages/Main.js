import React, { Component } from 'react';
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { projects } from '../utils/projects';
import M from "materialize-css";

export default class Main extends Component {

  state = {

  }
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <Navbar />
        <main className="center container">
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
        </main>
      </div>
    )
  }
}

