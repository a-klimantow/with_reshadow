import React from "react"
import { ThemeContext } from "./context"
import { theme } from "./theme"

export const ThemeWrapper = ({ children }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
)
