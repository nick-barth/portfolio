import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h1 className="sidebar__header__name">Nick Barth</h1>
      </div>
      <div className="sidebar__nav">
        <ul>
          {["home", "work", "tech", "personal", "contact"].map(route => {
            const url = route === "home" ? "" : route
            return (
              <li className="sidebar__nav-links" key={route}>
                <Link
                  className="sidebar__nav-a"
                  activeClassName="sidebar__nav-a--active"
                  to={`/${url}`}
                >
                  {route}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="sidebar__contact" />
    </div>
  )
}
