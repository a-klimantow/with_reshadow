import React from "react"
import t from "prop-types"
import data from "./icons.json"
import { useTheme } from "theme"

const icons = new Map(Object.entries(data))

export const Icon = ({
  type = "map",
  big = false,
  fill = "currentColor",
  mr = false,
  ...props
}) => {
  const theme = useTheme()
  const iconSize = big ? 24 : 16

  return (
    <svg
      viewBox="0 0 16 16"
      width={iconSize}
      height={iconSize}
      fill={theme.get(fill) || fill}
      style={{ marginRight: mr && 8 }}
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d={icons.get(type)} />
    </svg>
  )
}

Icon.propTypes = {
  type: t.oneOf([...Object.keys(data)]).isRequired,
  fill: t.string,
  big: t.bool,
  mr: t.bool
}

Icon.defaultProps = { type: "map", big: false, mr: false }
