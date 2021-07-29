/*
 * © 2021 Thoughtworks, Inc.
 */

import React, { ReactElement } from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Switch, Route } from 'react-router-dom'
import ErrorPage from './layout/ErrorPage'
import EmissionsMetricsPage from './pages/EmissionsMetricsPage'
import InfoSidebar from './layout/InfoSidebar'
import HeaderBar from './layout/HeaderBar'
import ChatButton from './layout/ChatButton'

function App(): ReactElement {
  const useStyles = makeStyles(() => ({
    appContainer: {
      padding: 0,
    },
  }))

  const classes = useStyles()

  return (
    <>
      <HeaderBar />
      <Container maxWidth={'xl'} className={classes.appContainer}>
        <Switch>
          <Route path="/error" exact>
            <ErrorPage />
          </Route>
          <Route path="/">
            <InfoSidebar />
            <ChatButton />
            <EmissionsMetricsPage />
          </Route>
        </Switch>
      </Container>
    </>
  )
}

export default App
