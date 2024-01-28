import React, { useEffect } from 'react'
import { OidcClient } from 'oidc-client'
import { useHistory } from 'react-router-dom'
import { config } from 'services/auth'
import Loader from 'components/ui/Loader'

const Register = () => {
  const client = new OidcClient(config)
  const history = useHistory()
  const serverUrl =
    'https://sts-lle.atsol.com/Account/Login?returnUrl=%2fconnect%2fauthorize%2flogin%3f'
  const token = localStorage.getItem('id_token')
  const expiresAt = localStorage.getItem('expirytime')

  const login = () => {
    client
      .createSigninRequest({ data: { bar: 15 } })
      .then((req) => {
        const queryString = new URL(req.url).searchParams.toString()
        const encodeUrl = encodeURIComponent(queryString)
        const finalUrl = `${serverUrl}${encodeUrl.toString()}`
        window.location = finalUrl
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
  }

  useEffect(() => {
    if (token && expiresAt) {
      if (new Date(expiresAt) > new Date()) {
        history.push('/dashboard')
      } else {
        login()
      }
    } else {
      login()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Loader />
}

export default Register
