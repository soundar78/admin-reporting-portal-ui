import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Dashboard from 'pages/Dashboard'
import Callback from 'pages/Callback'
import Register from 'pages/Register'
import Login from 'pages/Login'

const App = () => {
  return (
    <Switch>
      <Route path="/" strict exact>
        <Register />
      </Route>
      <ProtectedRoute path="/dashboard" strict exact>
        <Dashboard />
      </ProtectedRoute>
      <Route path="/signin-oidc" strict exact>
        <Callback />
      </Route>
      <Route path="/login" strict exact>
        <Login />
      </Route>
    </Switch>
  )
}

export default App
