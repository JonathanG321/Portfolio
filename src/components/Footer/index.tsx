import * as React from "react"

function Footer() {
  return (
    <footer className="text-white bottom-3 fixed z-50">
      © {new Date().getFullYear()}
    </footer>
  )
}

export default Footer
