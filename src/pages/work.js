import React from "react"

import Seperator from "../components/seperator"

export default () => {
  return (
    <div className="work">
      <div className="work__content">
        <div className="work__header">Selected Work</div>
        <Seperator />
        <div className="work__projects">
          SPAs, templating engines, static sites, static site generators,
          complex dashboards, data visualisations, CMS, servers, APIs,
          databases, I've done it all, and I'd do it all again.
        </div>
      </div>
    </div>
  )
}
