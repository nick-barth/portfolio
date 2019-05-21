import React from "react"

import Sidebar from "../components/sidebar"
import Mobilesidebar from "../components/mobilesidebar"
import Transition from "../components/transition"
import { Helmet } from "react-helmet"

export default ({ children, location }) => {
  return (
    <>
      <Helmet>
        <title>Nick Barth</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Nick Barth, fullstack developer, amsterdam, human, home page"
        />
        <meta
          name="keywords"
          cpntent="nick barth, barth, nick, fullstack, frontend, developer, amsterdam, react, code"
        />
        <meta name="author" content="Nick Barth" />
        <meta property="og:site_name" content="Nick Barth" />
        <meta
          property="og:description"
          content="Nick Barth, fullstack developer, amsterdam, human, home page"
        />
      </Helmet>
      <div className="layout">
        <Mobilesidebar />
        <Sidebar />
        <main className="layout__content">
          <Transition location={location}>{children}</Transition>
        </main>
      </div>
    </>
  )
}
