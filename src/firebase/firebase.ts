import { app } from './config'
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth'

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const fbProvider = new FacebookAuthProvider()

export const GoogleAuth = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    if (result) {
      return {
        displayName: result.user.displayName,
        email: result.user.email,
        providerId: result.providerId
      }
    }
  } catch (error) {
    return error
  }
}

export const FacebookAuth = async () => {
  try {
    const result = await signInWithPopup(auth, fbProvider)
    if (result) {
      return {
        displayName: result.user.displayName,
        email: result.user.email,
        providerId: result.providerId
      }
    }
  } catch (error) {
    return error
  }
}
