import React from "react"

import Sidebar from "../sidebar"

import "./style.css"

export default ({ children }) => {
  return (
    <div>
      <Sidebar />
      <main className="layout__content">{children}</main>
    </div>
  )
}
