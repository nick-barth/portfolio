import React from "react"

export default ({ title, description, img }) => {
  return (
    <div className="project">
      <div className="project__info">
        <div className="project__title">{title}</div>
        <div className="project__description">{description}</div>
      </div>
    </div>
  )
}
