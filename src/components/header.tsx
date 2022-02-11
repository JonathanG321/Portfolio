import * as React from "react"
import { Link } from "gatsby"

interface Props {
  siteTitle: string
}

function Header({ siteTitle }: Props) {
  return (
    <header
      style={{
        background: `rebeccapurple`,
        position: "fixed",
        width: "100%",
        top: "0px",
        zIndex: 100,
        height: "5rem",
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

export default Header
