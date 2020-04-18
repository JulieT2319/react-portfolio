import React from 'react'


export default function Card({ title, description, screenshot, repo, deployment }) {

  return (


    <div><div className="col s12 m8 l4 rounded">
      <div className="card medium rounded blue lighten-5">
        <div className="card-image rounded valign-wrapper blue lighten-5">
          <img src={screenshot} className="rounded"
            alt={title + " screenshot"} />
          <span
            className="card-title title-bg center cyan-text text-darken-3 font-xstitch rounded valign-wrapper">{title}</span>
        </div>
        <div className="card-content  blue lighten-5">
          <p>
            {description}
          </p>
        </div>
        <div className="card-action rounded blue lighten-5">
          <a href={repo} className="cyan-text text-darken-2">Repository</a>
          <hr />
          <a href={deployment} className="cyan-text text-darken-2">Deployment</a>
        </div>
      </div>
    </div></div>
  )
}
