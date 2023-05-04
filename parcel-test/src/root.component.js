import React from "react"
import { BrowserRouter, Link } from "react-router-dom"

export default function Root(props) {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">@single-spa/welcome</Link>{" "}
        <Link to="/pure-app">@study/pure-app</Link>{" "}
        <Link to="/react-app">@study/react-app</Link>{" "}
        <Link to="/vue-app">@study/vue-app</Link>
      </div>
    </BrowserRouter>
  )
}
