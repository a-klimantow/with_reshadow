import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import { ThemeWrapper } from "theme"
import { Layout } from "components/Layout"

import { TasksPage, TasksPageId } from "./components/pages"

function App() {
  return (
    <BrowserRouter>
      <ThemeWrapper>
        <Switch>
          <Route
            path="/login"
            render={({ history }) => (
              <div
                style={{ height: "100vh" }}
                onClick={() => history.push("/")}
              >
                login
              </div>
            )}
          />
          <Route path="/">
            <Layout>
              <Switch>
                <Route
                  path="/tasks"
                  render={({ match }) => (
                    <>
                      <Route path={match.path} component={TasksPage} exact />
                      <Route
                        path={`${match.path}/:id`}
                        component={TasksPageId}
                      />
                    </>
                  )}
                />
                <Route path="/objects" render={() => <div>object</div>} />
                <Route path="/company" render={() => <div>company</div>} />
                <Route path="/profile" render={() => <div>profile</div>} />
                <Redirect from="/" to="/tasks" />
              </Switch>
            </Layout>
          </Route>
        </Switch>
      </ThemeWrapper>
    </BrowserRouter>
  )
}

export default App
