import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './index'

describe('App', () => {
  it('renders Register component when at /', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText('Register')).toBeInTheDocument()
  })

  it('renders Dashboard component when at /dashboard', () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })

  it('renders Callback component when at /signin-oidc', () => {
    render(
      <MemoryRouter initialEntries={['/signin-oidc']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText('Callback')).toBeInTheDocument()
  })

  it('renders Login component when at /login', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText('Login')).toBeInTheDocument()
  })
})
