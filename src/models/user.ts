interface userAvatar {
  public_id: string
  url: string
}

export interface User {
  id: string
  userName: string
  userEmail: string
  userRole: string
  userAvatar: object
  userPhone: string
  userGender: string
  token: string
}

export interface updateUser {
  fullName: string
  phoneNumber: string
  gender: string
  avatar: userAvatar
}
