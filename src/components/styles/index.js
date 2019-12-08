import { css } from "reshadow"

export const titleStyle = css`
  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }
  h1 {
    font-weight: 300;
    font-size: 30px;
    line-height: 38px;
  }
`

export const paperStyle = css`
  paper {
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid;
    padding: 16px 24px;
  }
`

export const tabsStyle = css`
  tabs {
    display: flex;
    border-bottom: 1px solid;
  }
  tab {
    color: inherit;
    padding: 8px 16px 12px;
    text-decoration: none;
    position: relative;
    transition: color 0.3s ease;
    &::before {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 50%;
      display: block;
      width: 0;
      height: 2px;
      background-color: #189ee9;
      transform: translateX(-50%);
      transition: width 0.3s ease;
    }

    &.active,
    &:hover {
      color: #189ee9;
    }
  }

  .active {
    ::before {
      width: 100%;
    }
  }
`
