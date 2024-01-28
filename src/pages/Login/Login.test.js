import { render, waitFor } from '@testing-library/react'
import { userManager } from 'services/auth'
import Login from './index'

describe('Login', () => {
  it('redirects to the correct URL when createSigninRequest is successful', async () => {
    const mockUrl =
      'https://sts-lle.atsol.com/Account/Login?returnUrl=%2fconnect%2fauthorize%2flogin%3f'
    const mockQueryString = 'foo=bar'
    const mockFinalUrl = `${mockUrl}${encodeURIComponent(mockQueryString)}`

    const createSigninRequestMock = jest
      .fn()
      .mockResolvedValue({ url: `http://localhost/?${mockQueryString}` })
    userManager.createSigninRequest = createSigninRequestMock

    const replaceMock = jest.fn()
    delete window.location
    window.location = { replace: replaceMock }

    render(<Login />)

    await waitFor(() => expect(createSigninRequestMock).toHaveBeenCalled())
    expect(replaceMock).toHaveBeenCalledWith(mockFinalUrl)
  })
})
