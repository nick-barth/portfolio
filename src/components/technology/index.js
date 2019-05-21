import React from "react"
import Img from "gatsby-image"

export default ({ title, description, img, language }) => {
  return (
    <div className="technology">
      <div className="technology__image-container">
        <Img className="technology__image-img" fixed={img} />
      </div>
      <div className="technology__info">
        <div className="technology__glance">
          <div className="technology__title">{title}</div>
          <div className="technology__location">{language}</div>
        </div>
        <div className="technology__description">{description}</div>
      </div>
    </div>
  )
}
