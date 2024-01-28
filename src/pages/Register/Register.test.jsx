/* eslint-disable no-console */
import { render, waitFor } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { OidcClient } from 'oidc-client'
import Register from './index'

jest.mock('oidc-client')

describe.skip('Register', () => {
  it('redirects to the correct URL when createSigninRequest is successful', async () => {
    const mockQueryString = 'foo=bar'
    const mockFinalUrl =
      'https://sts-lle.atsol.com/Account/Login?returnUrl=%2fconnect%2fauthorize%2flogin%3ffoo%3Dbar'

    OidcClient.mockImplementation(() => {
      return {
        createSigninRequest: jest.fn().mockImplementation(() => {
          return new Promise((resolve, reject) => {
            try {
              resolve({ url: `http://localhost/?${mockQueryString}` })
            } catch (error) {
              console.error('createSigninRequest error:', error)
              reject(error)
            }
          })
        })
      }
    })

    const locationMock = jest
      .fn()
      .mockImplementation((url) => console.log('location.assign url:', url))
    delete window.location
    window.location = { assign: locationMock }

    const history = createMemoryHistory()

    render(
      <Router history={history}>
        <Register />
      </Router>
    )

    await waitFor(() => expect(OidcClient).toHaveBeenCalled())
    expect(locationMock).toHaveBeenCalledWith(mockFinalUrl)
  })
})
