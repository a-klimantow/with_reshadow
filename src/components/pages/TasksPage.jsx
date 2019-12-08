import React from "react"
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom"
import styled from "reshadow/macro"

import { useTheme } from "theme"
import { titleStyle, paperStyle, tabsStyle } from "components/styles"

export const TasksPage = ({ match, location }) => {
  const theme = useTheme()
  return styled(titleStyle, paperStyle, tabsStyle)`
    h1,
    tab {
      color: ${theme.get("root")};
    }
    paper,
    tabs {
      border-color: ${theme.get("border")};
    }
  `(
    <>
      <h1>Задачи</h1>
      <paper>
        <tabs>
          <tab
            as="Link"
            to={{ pathname: match.path, hash: "active" }}
            className={~location.hash.indexOf("active") ? tabsStyle.active : ""}
          >
            К исполнению
          </tab>
          <tab
            as="Link"
            to={{ pathname: match.path, hash: "observer" }}
            className={
              ~location.hash.indexOf("observer") ? tabsStyle.active : ""
            }
          >
            Наблюдаемые
          </tab>
          <tab
            as="Link"
            to={{ pathname: match.path, hash: "archived" }}
            className={
              ~location.hash.indexOf("archived") ? tabsStyle.active : ""
            }
          >
            Архив
          </tab>
        </tabs>
        <div>tabs</div>
        <div>filser</div>
        <div>list</div>
      </paper>
    </>
  )
}
