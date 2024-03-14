export interface shippingInfo {
  fullName: string
  phoneNumber: string
  location: string
  city: string
  state?: string
}

export interface orderItem {
  product: string
  quantity: number
  price: number
  color?: string
  switch?: string
  option: string
}
export interface orderData {
  shippingInfo: shippingInfo | undefined
  user: string
  orderItems: orderItem[] | undefined
  orderDate: Date
  totalPrice: number
  paymentMethod: string
}

interface images {
  public_id: string
  url: string
}

interface productOrder {
  _id: string
  name: string
  images: images[]
}

export interface orderItemModal {
  product: productOrder
  quantity: number
  price: number
  color?: string
  switch?: string
  option?: string
  _id?: string
}

export interface orderModal {
  shippingInfo: shippingInfo
  _id: string
  orderId: string
  orderItems: orderItemModal[]
  orderDate: string
  totalPrice: string
  orderStatus: string
  paymentMEthod: string
}
