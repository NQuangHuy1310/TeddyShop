export interface socialMedia {
  facebook: string
  twitter: string
  instagram: string
  zalo: string
}

export interface image {
  public_id: string
  url: string
}

export interface memberModal {
  _id: string
  fullName: string
  position: string
  description: string
  email: string
  phoneNumber: string
  images: image
  socialMedia: socialMedia
}
