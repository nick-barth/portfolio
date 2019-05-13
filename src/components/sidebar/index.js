import React from "react"
import { Link } from "gatsby"

import Reddit from "../../assets/svgs/reddit.svg"
import Instagram from "../../assets/svgs/instagram.svg"
import LinkedIn from "../../assets/svgs/linkedin.svg"
import Github from "../../assets/svgs/github.svg"

export default () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h1 className="sidebar__header__name">Nick Barth</h1>
      </div>
      <div className="sidebar__nav">
        <ul>
          {["home", "work", "tech", "personal"].map(route => {
            const url = route === "home" ? "" : route
            return (
              <li className="sidebar__nav-links" key={route}>
                <Link
                  className="sidebar__nav-a"
                  activeClassName="sidebar__nav-a--active"
                  to={`/${url}/`}
                >
                  {route}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="sidebar__contact">
        <div className="sidebar__contact-me">If you'd like to get in touch</div>
        <div className="sidebar__contact-me">
          <a
            className="sidebar__contract-me__link"
            href="mailto:barth.nicholas@gmail.com"
          >
            barth.nicholas@gmail.com
          </a>
        </div>
        <ul className="sidebar__social">
          <li className="sidebar__social-item">
            <a href="https://github.com/nick-barth">
              <Github className="sidebar__social__icon" />
            </a>
          </li>
          <li className="sidebar__social-item">
            <a href="https://www.reddit.com/user/nickinkorea">
              <Reddit className="sidebar__social__icon" />
            </a>
          </li>
          <li className="sidebar__social-item">
            <a href="https://www.instagram.com/barth.nicholas/">
              <Instagram className="sidebar__social__icon" />
            </a>
          </li>
          <li className="sidebar__social-item">
            <a href="https://www.linkedin.com/in/nicholasbarth/">
              <LinkedIn className="sidebar__social__icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
