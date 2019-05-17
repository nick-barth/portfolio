import React from "react"

import Sidebar from "../components/sidebar"
import Mobilesidebar from "../components/mobilesidebar"
import Transition from "../components/transition"

export default ({ children, location }) => {
  return (
    <React.Fragment>
      <Mobilesidebar />
      <Sidebar />
      <main className="layout__content">
        <Transition location={location}>{children}</Transition>
      </main>
    </React.Fragment>
  )
}
