export interface Brand {
  _id: string
  name: string
}

export interface Category {
  _id: string
  name: string
}

export interface Image {
  public_id: string
  url: string
  _id: string
}

export interface ProductModel {
  _id: string
  name: string
  slug: string
  description: string
  priceSale: number
  price: number
  quantity: number
  quantitySold: number
  quantitAvailable: number
  warranty: string
  brand: Brand
  category: Category
  images: Image[]
  tags: string[]
  totalRating: number
  status: string
}

export interface productCatModal {
  _id: string
  name: string
  tags: string[]
  totalProduct: number
  slogan: string
}
