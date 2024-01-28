import { UserManager } from 'oidc-client'

export const config = {
  authority: 'https://sts-lle.atsol.com',
  metadata: {
    issuer: 'sts-lle.atsol.com',
    authorization_endpoint: 'https://sts-lle.atsol.com/Account/Login',
    token_endpoint: 'https://sts-lle.atsol.com/connect/token',
    userinfo_endpoint: 'https://sts-lle.atsol.com/connect/userinfo',
    jwks_uri: 'https://sts-lle.atsol.com/.well-known/openid-configuration/jwks'
  },
  client_id: 'fstnr.SPA',
  redirect_uri: 'http://localhost:9000/signin-oidc',
  client_secret: 'VusperSetvrrasaecure',
  grant_type: 'client_credentials',
  response_type: 'id_token token',
  scope:
    'openid profile umid fstnrtpsapi fstnrshippingapi fstnrdmsapi fstnrmdmsapi',
  post_logout_redirect_uri: 'http://localhost:9000/',
  filterProtocolClaims: true,
  loadUserInfo: true
}

export const userManager = new UserManager(config)

export async function loadUserFromStorage(store) {
  try {
    let user = await userManager.getUser()
    if (!user) {
      return store.set(null)
    }
    store.set(user)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`User not found: ${e}`)
    store.set(null)
  }
}

export function signinRedirect() {
  return userManager.signinRedirect()
}

export function signinRedirectCallback() {
  return userManager.signinRedirectCallback()
}

export function signoutRedirect() {
  userManager.clearStaleState()
  userManager.removeUser()
  return userManager.signoutRedirect()
}
