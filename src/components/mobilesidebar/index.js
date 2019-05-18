import React from "react"
import { Link } from "gatsby"

export default class Mobilesidebar extends React.Component {
  state = {
    isOpen: false,
  }

  render() {
    const { isOpen } = this.state

    return (
      <React.Fragment>
        <div
          className="mobilesidebar__hamburger"
          onClick={() => this.setState({ isOpen: !isOpen })}
        >
          <div className="mobilesidebar__hamburger-icon">
            <span
              className={`mobilesidebar__hamburger-span ${isOpen &&
                "mobilesidebar__hamburger-span--open"}`}
              key={1}
            />
            <span
              className={`mobilesidebar__hamburger-span ${isOpen &&
                "mobilesidebar__hamburger-span--open"}`}
              key={3}
            />
          </div>
        </div>
        <div
          className={`mobilesidebar__content ${isOpen &&
            "mobilesidebar__content--open"}`}
        >
          <div className="mobilesidebar__header">
            <h1 className="mobilesidebar__header__name">Nick Barth</h1>
          </div>
          <div className="mobilesidebar__nav">
            <ul>
              {["home", "work", "tech", "personal"].map(route => {
                const url = route === "home" ? "" : route
                return (
                  <li className="mobilesidebar__nav-links" key={route}>
                    <Link
                      className="mobilesidebar__nav-a"
                      activeClassName="mobilesidebar__nav-a--active"
                      to={`/${url}/`}
                    >
                      {route}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
