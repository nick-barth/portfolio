import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

export default props => {
  return (
    <div>
      <Layout>
        <div className="home">
          <BackgroundImage
            className="home__background"
            fluid={props.data.splash.childImageSharp.fluid}
            style={{
              position: "initial",
            }}
          />
          <div className="home__content">
            <h2 className="home__title">Sup Nerds</h2>
            <div className="home__byline">
              Welcome to the personal site of Nick Barth.
            </div>
            <div className="home__byline">
              Fullstack web developer, and overall cool guy.
            </div>
            <div className="home__byline home__byline--location">
              Currently based in{" "}
              <div className="home__byline__location-container">
                Buffalo
                <div className="home__location">
                  {["Seoul", "Brussels", "London", "Amsterdam"].map(city => {
                    return <div className="home__byline__city"> {city} </div>
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    splash: file(relativePath: { eq: "splash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
