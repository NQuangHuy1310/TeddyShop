export interface cartData {
  productId: string
  quantity: number
  price: number
  color?: { name: string; code: string }
  option?: { name: string; code: string }
  switch?: { name: string; code: string }
}
