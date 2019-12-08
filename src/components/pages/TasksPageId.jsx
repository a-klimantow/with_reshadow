import React from "react"
import { Route, Link } from "react-router-dom"
import styled, { css } from "reshadow/macro"

import { useTheme } from "theme"
import { titleStyle, paperStyle } from "components/styles"

export const TasksPageId = ({ match }) => {
  const theme = useTheme()
  return styled(titleStyle, paperStyle)`
    h1 {
      color: ${theme.get("root")};
    }
    paper {
      color: ${theme.get("border")};
    }
  `(
    <>
      <h1>concret</h1>
      <paper>
        <Link to="/tasks">foru</Link>
        <div>tabs</div>
        <div>tabs</div>
        <div>tabs</div>
        <div>tabs</div>
        <div>filser</div>
        <div>list</div>
      </paper>
    </>
  )
}
