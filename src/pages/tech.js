import React from "react"
import { graphql } from "gatsby"
import Technology from "../components/technology"

import Seperator from "../components/seperator"

export default props => {
  const essentials = [
    {
      title: "React",
      description:
        "My bread and butter, I've been working with React for most of my proffessional career, and I'm a big fan.",
      language: "Javascript",
      href: "https://www.centralapp.com/en",
      img: props.data.centralApp.childImageSharp.fluid,
    },
    {
      title: "Node.js",
      description:
        "My bread and butter, I've been working with React for most of my proffessional career, and I'm a big fan.",
      language: "Javascript",
      href: "https://www.centralapp.com/en",
      img: props.data.centralApp.childImageSharp.fluid,
    },
    {
      title: "React",
      description:
        "My bread and butter, I've been working with React for most of my proffessional career, and I'm a big fan.",
      language: "Javascript",
      href: "https://www.centralapp.com/en",
      img: props.data.centralApp.childImageSharp.fluid,
    },
  ]

  return (
    <div className="tech">
      <div className="tech__content">
        <div className="tech__header">Technologies</div>
        <Seperator />
        <div className="tech__description">
          I've tinkered, tried, and occassionally embraced as many technologies
          as time allowed. Here's what I do.
        </div>
        <div className="tech__techs-category">Fundamentals</div>
        <div className="tech__techs tech__techs--essentials">
          {essentials.map(tech => (
            <Technology key={tech.title} {...tech} />
          ))}
        </div>
        <div className="tech__techs-category">Essentials</div>
        <div className="tech__techs tech__techs--essentials">
          {essentials.map(tech => (
            <Technology key={tech.title} {...tech} />
          ))}
        </div>
        <div className="tech__techs-category">The Fun Stuff</div>
        <div className="tech__techs tech__techs--essentials">
          {essentials.map(tech => (
            <Technology key={tech.title} {...tech} />
          ))}
        </div>
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
    deedmob: file(relativePath: { eq: "deedmob.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nxchange: file(relativePath: { eq: "nxchange.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pooplog: file(relativePath: { eq: "pooplog.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    codekingdoms: file(relativePath: { eq: "codekingdoms.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ssbu: file(relativePath: { eq: "ssbu.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
