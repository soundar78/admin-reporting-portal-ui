import { userManager } from '../../services/auth'

const Login = () => {
  const serverUrl =
    'https://sts-lle.atsol.com/Account/Login?returnUrl=%2fconnect%2fauthorize%2flogin%3f'
  userManager
    .createSigninRequest({ data: { bar: 15 } })
    .then((req) => {
      const queryString = new URL(req.url).searchParams.toString()
      const encodeUrl = encodeURIComponent(queryString)
      const finalUrl = `${serverUrl}${encodeUrl.toString()}`
      window.location.replace(finalUrl)
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error)
    })
}

export default Login
