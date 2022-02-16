import classNames from "classnames"
import React from "react"
import "./styles.scss"

type Props = {
  content: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  active?: boolean
}

function NavButton({ content, onClick, active }: Props) {
  return (
    <button
      className={classNames(
        "h-full px-5 text-xl border-b-8 border-black transition-all duration-500",
        "hover:text-blue-700 hover:border-blue-700",
        { "text-blue-700 border-blue-700": active }
      )}
      onClick={onClick}
    >
      {content}
    </button>
  )
}

export default NavButton
