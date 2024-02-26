interface logo {
  public_id: string
  url: string
}

interface thumbnail {
  public_id: string
  url: string
}

export interface brandModal {
  _id: string
  name: string
  description: string
  productCategory: []
  products: []
  totalProduct: number
  logo?: logo
  thumbnail?: thumbnail
  slogan: string
}
