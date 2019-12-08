import React from "react"
import styled, { css } from "reshadow/macro"

import { useTheme } from "theme"
import { Logo } from "components/ui/Logo"
import { Menu } from "components/Menu"

const layoutStyle = css`
  layout {
    display: grid;
    grid-template-columns: 208px 1fr;
    height: 100vh;
    overflow: hidden;
  }

  aside {
    background-color: #fff;
  }

  main {
    overflow-y: scroll;
    display: grid;
    grid-gap: 24px;
    align-content: start;
    padding: 24px 56px;
  }
`

const menuStyled = css`
  nav {
    display: grid;
    grid-auto-rows: 48px;
  }
`
export const Layout = ({ children, ...props }) => {
  const theme = useTheme()
  return styled(layoutStyle, menuStyled)`
    layout {
      color: ${theme.get("root")};
    }
    main {
      background-color: ${theme.get("background")};
    }
  `(
    <layout>
      <aside>
        <Logo />
        <Menu />
      </aside>
      <main>{children}</main>
    </layout>
  )
}
