import React from "react"

export default ({ title, description, img, language, href }) => {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="technology"
    >
      <div className="technology__image-container" />
      <div className="technology__info">
        <div className="technology__glance">
          <div className="technology__title">{title}</div>
          <div className="technology__location">{language}</div>
        </div>
        <div className="technology__description">{description}</div>
      </div>
    </a>
  )
}
