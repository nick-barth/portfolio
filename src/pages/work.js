import React from "react"
import { graphql } from "gatsby"
import Project from "../components/project"

import Seperator from "../components/seperator"

export default props => {
  const projects = [
    {
      title: "CentralApp",
      description: "Online presense solutions for brick and mortor retail",
      location: "Brussels",
      img: props.data.centralApp.childImageSharp.fluid,
    },
    {
      title: "Deedmob",
      description: "Empowering volunteers and volunteer organisations",
      location: "Amsterdam",
      img: props.data.centralApp.childImageSharp.fluid,
    },
    {
      title: "Code Kingdoms",
      description: "Teaching kids to code via minecraft",
      location: "London",
      img: props.data.centralApp.childImageSharp.fluid,
    },
    {
      title: "Nxchange",
      description: "A fully regulated stock exchange as a service",
      location: "Brussels",
      img: props.data.centralApp.childImageSharp.fluid,
    },
    {
      title: "X Counters",
      description:
        "A suite of eight websites for promoting video game infrastructure",
      location: "Earth",
      img: props.data.centralApp.childImageSharp.fluid,
    },
    {
      title: "Poop Log",
      description: "errr... its a poop log",
      location: "Buffalo",
      img: props.data.centralApp.childImageSharp.fluid,
    },
  ]

  return (
    <div className="work">
      <div className="work__content">
        <div className="work__header">Selected Work</div>
        <Seperator />
        <div className="work__description">
          SPAs, templating engines, static sites, static site generators,
          complex dashboards, data visualisations, CMS, servers, APIs,
          databases, I've done it all, and I'd do it all again.
        </div>
      </div>
      <div className="work__projects">
        {projects.map(project => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    centralApp: file(relativePath: { eq: "centralapp.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
