import React from "react"
import { graphql } from "gatsby"
import Technology from "../components/technology"

import Seperator from "../components/seperator"

export default props => {
  const fundamentals = [
    {
      title: "CSS",
      description:
        "The most important part of user interaction is here, and no where else.  I make users and designers happy.",
      href: "https://www.centralapp.com/en",
      img: props.data.centralApp.childImageSharp.fluid,
    },
    {
      title: "HTML",
      description:
        "SEO, Accessability, and speed.  These are the bricks our houses are built with.",
      href: "https://www.centralapp.com/en",
      img: props.data.centralApp.childImageSharp.fluid,
    },
    {
      title: "Javascript",
      description:
        "More important than gravity.  All functionality requires a mastered level of javascript and it's newest features",
      href: "https://www.centralapp.com/en",
      img: props.data.centralApp.childImageSharp.fluid,
    },
  ]
  const essentials = [
    {
      title: "React",
      description:
        "My bread and butter, I've been working with React for most of my proffessional career, and I'm a big fan.",
      language: "Javascript framework",
      href: "https://www.centralapp.com/en",
      img: props.data.centralApp.childImageSharp.fluid,
    },
    {
      title: "Node.js",
      description:
        "Comes with the territory, love it, hate it, but I won't debate it",
      language: "Javascript",
      href: "https://www.centralapp.com/en",
      img: props.data.centralApp.childImageSharp.fluid,
    },
    {
      title: "Git",
      description: "Of course, it's version control we all know and love.",
      language: "Bash",
      href: "https://www.centralapp.com/en",
      img: props.data.centralApp.childImageSharp.fluid,
    },
  ]

  const thefunstuff = [
    {
      title: "GraphQL",
      description: "Eliminates the need for backend docs, why the heck not.",
      language: "Query Language",
      href: "https://www.centralapp.com/en",
      img: props.data.centralApp.childImageSharp.fluid,
    },
    {
      title: "Vue",
      description: "I like trying new things, that's my vue.",
      language: "Javascript framework",
      href: "https://www.centralapp.com/en",
      img: props.data.centralApp.childImageSharp.fluid,
    },
    {
      title: "Handlebars",
      description: "Make tons of websites with one website?  Yes, please.",
      language: "Templating Engine",
      href: "https://www.centralapp.com/en",
      img: props.data.centralApp.childImageSharp.fluid,
    },
    {
      title: "D3",
      description:
        "In traditional advertising sex sells.  Online?  Interactive data visualizations sells.",
      language: "Javascript library",
      href: "https://www.centralapp.com/en",
      img: props.data.centralApp.childImageSharp.fluid,
    },
    {
      title: "Gatsby",
      description:
        "I value speed, so does Gatsby.  However, I'm not going run into Myrtle or hit Daisy",
      language: "Static Site Generator",
      href: "https://www.centralapp.com/en",
      img: props.data.centralApp.childImageSharp.fluid,
    },
    {
      title: "MongoDB",
      description: "While mongo has no relationships, I have one with Mongo.",
      language: "Database",
      href: "https://www.centralapp.com/en",
      img: props.data.centralApp.childImageSharp.fluid,
    },
    {
      title: "Postgres",
      description: "It's an open relationship, and Postgres is the sequel.",
      language: "Database",
      href: "https://www.centralapp.com/en",
      img: props.data.centralApp.childImageSharp.fluid,
    },
    {
      title: "Netlify",
      description: "Yeah, but only as long as it's free!",
      language: "Dev Ops",
      href: "https://www.centralapp.com/en",
      img: props.data.centralApp.childImageSharp.fluid,
    },
    {
      title: "Adobe CS",
      description:
        "Designers often send over assets that don't appreciate the consistentency that our developers have honed.  So I have to get my hands dirty. ",
      language: "Design",
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
          {fundamentals.map(tech => (
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
        <div className="tech__techs tech__techs--funstuff">
          {thefunstuff.map(tech => (
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
