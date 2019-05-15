import React from "react"
import Img from "gatsby-image"
import Seperator from "../seperator"

export default ({ title, description, img, location, href }) => {
  return (
    <a href={href} target="_blank" className="project">
      <div className="project__background" />
      <div className="project__info">
        <div className="project__title">{title}</div>
        <div className="project__location">{location}</div>
        <Seperator />
        <div className="project__description">{description}</div>
      </div>
      <div className="project__image">
        <Img fluid={img} />
      </div>
    </a>
  )
}
