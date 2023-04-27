import React from "react"
import { cx } from "../lib/utils"
export default function Container({
  className,
  children,
}: {
  className: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cx(
        "container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg",
        className
      )}
    >
      {children}
    </div>
  )
}
