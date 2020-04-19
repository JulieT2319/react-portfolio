import React from 'react'
import Card from "../components/Card";
import { projects } from '../utils/projects';


export default function Portfolio() {

  return (
    <div class="row" >
      {
        projects.map(project => (
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
    </div >
  )
}