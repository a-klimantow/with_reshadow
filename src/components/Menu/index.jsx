import React from "react"
// eslint-disable-next-line no-unused-vars
import { NavLink } from "react-router-dom"
import styled, { css } from "reshadow/macro"

import { Icon } from "components/ui/atoms"

const navStyle = css`
  nav {
    display: grid;
    grid-auto-rows: 48px;

    & > *:last-child {
      margin-top: 24px;
    }
  }
`
const navlinkStyle = css`
  navlink {
    font-size: 14px;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: inherit;
    transition: all 0.3s;
    padding-left: 18px;
    position: relative;
    cursor: pointer;
    &:hover,
    &:focus {
      color: #189ee9;
    }
    &::after,
    &::before {
      content: "";
      display: block;
      position: absolute;
      height: 0;
      transition: all 0.3s;
      transform: translateY(-50%);
      top: 50%;
    }

    &::after {
      width: 2px;
      right: 0;
    }

    &::before {
      opacity: 0.15;
      left: 0;
      width: 100%;
      height: 0;
    }

    & Icon {
      margin-right: 12px;
    }
  }
`

const navlink = css`
  .active {
    color: #189ee9;

    &::before,
    &::after {
      height: 100%;
      background: #189ee9;
    }
  }
`

export const Menu = () => {
  return styled(
    navStyle,
    navlinkStyle
  )(
    <nav>
      <navlink as="NavLink" to="/tasks" activeClassName={navlink.active}>
        <Icon type="task" />
        Задачи
      </navlink>
      <navlink as="NavLink" to="/objects" activeClassName={navlink.active}>
        <Icon type="object" />
        Объекты
      </navlink>
      <navlink as="NavLink" to="/company" activeClassName={navlink.active}>
        <Icon type="company" />
        Профиль компании
      </navlink>
      <navlink as="NavLink" to="/profile" activeClassName={navlink.active}>
        <Icon type="username" />
        Профиль
      </navlink>
      <navlink as="NavLink" to="/login" href="/login">
        <Icon type="exit" />
        Выход
      </navlink>
    </nav>
  )
}
