interface userAvatar {
  public_id: string
  url: string
}

export interface addressData {
  _id?: string
  fullName: string
  phoneNumber: string
  location: string
  city: string
  state?: string
  type?: string
  isDefault?: boolean
}

export interface updateUser {
  fullName: string
  phoneNumber: string
  gender: string
  avatar: userAvatar
}

export interface productFavorite {
  _id: string
}

export interface User {
  id: string
  userName: string
  userEmail: string
  userRole: string
  userAvatar: object
  userPhone: string
  userGender: string
  userAddress?: addressData
  token: string
  favoriteProducts?: productFavorite
  emailVerified: boolean
}
