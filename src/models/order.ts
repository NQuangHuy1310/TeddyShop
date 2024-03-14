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
