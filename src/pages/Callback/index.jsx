import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { UserManager } from 'oidc-client'
import Loader from 'components/ui/Loader'

const Callback = () => {
  const history = useHistory()
  const location = useLocation()
  const query = new URLSearchParams(location.hash)
  const idToken = query.get('#id_token')
  localStorage.setItem('id_token', idToken)
  const expiresAt = new Date(new Date().getTime() + 900 * 1000)
  localStorage.setItem('expirytime', expiresAt)

  useEffect(() => {
    const userManager = new UserManager()

    userManager.signinRedirectCallback().then((user) => {
      // eslint-disable-next-line no-console
      console.log('-----------user-----------', user)
      window.user = user
      if (user && user.access_token) {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('access_token', user.access_token)
        history.push('/dashboard')
      }
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Loader />
}

export default Callback
