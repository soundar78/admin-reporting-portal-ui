import { useHistory } from 'react-router-dom'
const ProtectedRoute = ({ children }) => {
  const history = useHistory()
  const updateExpiryTime = () => {
    const token = localStorage.getItem('id_token')
    const expiryTime = localStorage.getItem('expirytime')

    if (token && expiryTime) {
      const expiryDate = new Date(expiryTime)
      const currentDate = new Date()

      if (expiryDate > currentDate) {
        const newExpiryTime = new Date(currentDate.getTime() + 900 * 1000)
        localStorage.setItem('expirytime', newExpiryTime.toString())
        return true
      }
    }
    return false
  }

  return updateExpiryTime() ? children : history.push('/login')
}

export default ProtectedRoute
