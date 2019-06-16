import React from "react"
import { graphql } from "gatsby"
import Technology from "../components/technology"

import Seperator from "../components/seperator"

export default props => {
  console.log(props)
  const fundamentals = [
    {
      title: "CSS",
      description:
        "The most important part of user interaction is here, and no where else.  I make users and designers happy.",
      href: "https://www.centralapp.com/en",
      img: props.data.css.childImageSharp.fixed,
    },
    {
      title: "HTML",
      description:
        "SEO, Accessability, and speed.  These are the bricks our houses are built with.",
      href: "https://www.centralapp.com/en",
      img: props.data.html.childImageSharp.fixed,
    },
    {
      title: "Javascript",
      description:
        "More important than gravity.  All functionality requires a mastered level of javascript and it's newest features",
      href: "https://www.centralapp.com/en",
      img: props.data.js.childImageSharp.fixed,
    },
  ]
  const essentials = [
    {
      title: "React",
      description:
        "My bread and butter, I've been working with React for most of my professional career, and I'm a big fan.",
      language: "Javascript framework",
      href: "https://www.centralapp.com/en",
      img: props.data.react.childImageSharp.fixed,
    },
    {
      title: "Node.js",
      description:
        "Comes with the territory, love it, hate it, but I won't debate it",
      language: "Javascript",
      href: "https://www.centralapp.com/en",
      img: props.data.node.childImageSharp.fixed,
    },
    {
      title: "Git",
      description: "Of course, it's version control we all know and love.",
      language: "Bash",
      href: "https://www.centralapp.com/en",
      img: props.data.git.childImageSharp.fixed,
    },
  ]

  const thefunstuff = [
    {
      title: "GraphQL",
      description: "Eliminates the need for backend docs, why the heck not.",
      language: "Query Language",
      href: "https://www.centralapp.com/en",
      img: props.data.graphql.childImageSharp.fixed,
    },
    {
      title: "Vue",
      description: "I like trying new things, that's my vue.",
      language: "Javascript framework",
      href: "https://www.centralapp.com/en",
      img: props.data.vue.childImageSharp.fixed,
    },
    {
      title: "Handlebars",
      description: "Make tons of websites with one website?  Yes, please.",
      language: "Templating Engine",
      href: "https://www.centralapp.com/en",
      img: props.data.handlebars.childImageSharp.fixed,
    },
    {
      title: "D3",
      description:
        "In traditional advertising sex sells.  Online?  Interactive data visualizations sells.",
      language: "Javascript library",
      href: "https://www.centralapp.com/en",
      img: props.data.d3.childImageSharp.fixed,
    },
    {
      title: "Gatsby",
      description:
        "I value speed, so does Gatsby.  However, I'm not going run into Myrtle or hit Daisy",
      language: "Static Site Generator",
      href: "https://www.centralapp.com/en",
      img: props.data.gatsby.childImageSharp.fixed,
    },
    {
      title: "MongoDB",
      description:
        "They say mongo has no relationships, I have a relationship with Mongo.",
      language: "Database",
      href: "https://www.centralapp.com/en",
      img: props.data.mongo.childImageSharp.fixed,
    },
    {
      title: "Postgres",
      description: "It's an open relationship, and Postgres is the sequel.",
      language: "Database",
      href: "https://www.centralapp.com/en",
      img: props.data.postgres.childImageSharp.fixed,
    },
    {
      title: "Netlify",
      description: "Yeah, but only as long as it's free!",
      language: "Dev Ops",
      href: "https://www.centralapp.com/en",
      img: props.data.netlify.childImageSharp.fixed,
    },
    {
      title: "Adobe CS",
      description: "I call this one, getting my hands dirty.",
      language: "Design",
      href: "https://www.centralapp.com/en",
      img: props.data.adobe.childImageSharp.fixed,
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
    graphql: file(relativePath: { eq: "techs/graphql.png" }) {
      childImageSharp {
        fixed(width: 140, height: 140) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    vue: file(relativePath: { eq: "techs/vue.png" }) {
      childImageSharp {
        fixed(width: 140, height: 140) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    react: file(relativePath: { eq: "techs/react.png" }) {
      childImageSharp {
        fixed(width: 140, height: 140) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    html: file(relativePath: { eq: "techs/html.png" }) {
      childImageSharp {
        fixed(width: 140, height: 140) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    css: file(relativePath: { eq: "techs/css.png" }) {
      childImageSharp {
        fixed(width: 140, height: 140) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    js: file(relativePath: { eq: "techs/js.png" }) {
      childImageSharp {
        fixed(width: 140, height: 140) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    d3: file(relativePath: { eq: "techs/d3.png" }) {
      childImageSharp {
        fixed(width: 140, height: 140) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    netlify: file(relativePath: { eq: "techs/netlify.png" }) {
      childImageSharp {
        fixed(width: 140, height: 140) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    handlebars: file(relativePath: { eq: "techs/handlebars.png" }) {
      childImageSharp {
        fixed(width: 140, height: 140) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    adobe: file(relativePath: { eq: "techs/adobe.png" }) {
      childImageSharp {
        fixed(width: 140, height: 140) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    git: file(relativePath: { eq: "techs/git.png" }) {
      childImageSharp {
        fixed(width: 140, height: 140) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    mongo: file(relativePath: { eq: "techs/mongo.png" }) {
      childImageSharp {
        fixed(width: 140, height: 140) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    gatsby: file(relativePath: { eq: "techs/gatsby.png" }) {
      childImageSharp {
        fixed(width: 140, height: 140) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    postgres: file(relativePath: { eq: "techs/postgres.png" }) {
      childImageSharp {
        fixed(width: 140, height: 140) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    node: file(relativePath: { eq: "techs/node.png" }) {
      childImageSharp {
        fixed(width: 140, height: 140) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
