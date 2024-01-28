import { selector } from 'recoil'
import { UserManager } from 'oidc-client'

const signinSelector = selector({
  key: 'signinSelector',
  get: async ({ get }) => {
    const userManager = new UserManager()
    try {
      const user = await userManager.signinRedirectCallback()
      if (user && user.access_token) {
        window.user = user
        localStorage.setItem('access_token', user.access_token)
        return user
      } else {
        throw new Error('User state is not available')
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      userManager.clearStaleState()
      throw error
    }
  }
})

export default signinSelector
