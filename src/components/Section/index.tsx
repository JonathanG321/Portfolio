import React, { ReactNode } from "react"
import { Tween } from "react-gsap"

type SectionProps = {
  children?: ReactNode
  className?: string
  start?: boolean
}

export function Section({
  children,
  className = "",
  start = false,
}: SectionProps) {
  return (
    <>
      {start ? (
        <Tween from={{ zIndex: 2 }} to={{ zIndex: 2 }}>
          <section className={"panel " + className}>
            <div className="inner-panel">{children}</div>
          </section>
        </Tween>
      ) : (
        <Tween from={{ opacity: 0, zIndex: 1 }} to={{ opacity: 1, zIndex: 2 }}>
          <section className={"panel " + className}>
            <div className="inner-panel">{children}</div>
          </section>
        </Tween>
      )}
      <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
    </>
  )
}
