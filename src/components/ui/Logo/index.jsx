import React from "react"
import styled, { css } from "reshadow/macro"
import { useTheme } from "theme"
import logo from "assets/logo.svg"

const logoStyles = css`
  div {
    display: flex;
    align-items: center;
    padding: 8px 0;
  }

  span {
    font-weight: 300;
    & b {
      font-weight: normal;
    }
  }

  img {
    margin-right: 12px;
    margin-left: -29px;
  }
`

export const Logo = () => {
  const theme = useTheme()
  return styled(logoStyles)`
    div {
      color: ${theme.get("root")};
    }
  `(
    <div>
      <img src={logo} alt="logo" />
      <span>
        <b>TT</b> Managment
      </span>
    </div>
  )
}
