import React from "react"
import { Link } from "gatsby"

export default class Mobilesidebar extends React.Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    console.log("wow")
  }

  render() {
    const { isOpen } = this.state

    return (
      <React.Fragment>
        <div className="mobilesidebar__hamburger" onClick={this.toggle}>
          fuck you
        </div>
        <div className={`mobilesidebar ${isOpen && "mobilesidebar--open"}`}>
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
