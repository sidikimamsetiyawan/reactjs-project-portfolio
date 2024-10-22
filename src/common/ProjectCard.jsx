import React from 'react'

function ProjectCard( { src, link }) {
  return (
    <a href={link} target="_blank">
        <img className="hover" src={src} alt="Viber Logo" />
        <h3>Viberr</h3>
        <p>Streaming App</p>
    </a>
  )
}

export default ProjectCard