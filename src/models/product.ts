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

export interface Color {
  name: string
  code: string
  _id: string
}

export interface Option {
  name: string
  code: string
  _id: string
}

export interface Type {
  name: string
  code: string
  _id: string
}

export interface attributes {
  color: {
    code: string
  }
  option: {
    code: string
  }
  switch: {
    code: string
  }
  quantity: number
  price: number
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
  attributes: attributes[]
  colors?: Color[]
  options?: Option[]
  types?: Type[]
}

export interface productCatModal {
  _id: string
  name: string
  tags: string[]
  totalProduct: number
  slogan: string
}
