import React from "react"

import Sidebar from "../components/sidebar"
import Mobilesidebar from "../components/mobilesidebar"
import Transition from "../components/transition"

export default ({ children, location }) => {
  return (
    <div className="layout">
      <Mobilesidebar />
      <Sidebar />
      <main className="layout__content">
        <Transition location={location}>{children}</Transition>
      </main>
    </div>
  )
}
