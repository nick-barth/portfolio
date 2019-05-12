import React from "react"

import Sidebar from "../components/sidebar"
import Transition from "../components/transition"

import "./style.css"

export default ({ children, location }) => {
  return (
    <React.Fragment>
      <Sidebar />
      <main className="layout__content">
        <Transition location={location}>{children}</Transition>
      </main>
    </React.Fragment>
  )
}
