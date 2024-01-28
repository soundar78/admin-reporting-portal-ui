import { render, act } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

describe('ProtectedRoute', () => {
  it('renders children when session is valid', async () => {
    localStorage.setItem('id_token', 'valid_token')
    localStorage.setItem('expirytime', new Date(Date.now() + 10000).toString())

    const history = createMemoryHistory()
    const { getByText } = render(
      <Router history={history}>
        <ProtectedRoute>
          <div>Protected content</div>
        </ProtectedRoute>
      </Router>
    )

    await act(async () => {
      expect(getByText('Protected content')).toBeInTheDocument()
    })
  })

  it('redirects to login when session is not valid', async () => {
    localStorage.removeItem('id_token')
    localStorage.removeItem('expirytime')

    const history = createMemoryHistory()
    history.push = jest.fn()

    render(
      <Router history={history}>
        <ProtectedRoute>
          <div>Protected content</div>
        </ProtectedRoute>
      </Router>
    )

    await act(async () => {
      expect(history.push).toHaveBeenCalledWith('/login')
    })
  })
})
