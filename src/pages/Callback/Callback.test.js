import { render, waitFor } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { UserManager } from 'oidc-client'
import Callback from './index'

jest.mock('oidc-client')

describe.skip('Callback', () => {
  it('redirects to /dashboard when signinRedirectCallback is successful', async () => {
    const history = createMemoryHistory()
    const user = { access_token: 'dummy_token' }

    UserManager.mockImplementation(() => {
      return {
        signinRedirectCallback: jest.fn().mockResolvedValue(user)
      }
    })

    render(
      <Router history={history}>
        <Callback />
      </Router>
    )

    await waitFor(() => expect(UserManager).toHaveBeenCalled())

    expect(history.location.pathname).toBe('/dashboard')
  })
})
