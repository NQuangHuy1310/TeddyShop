export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND'
  }).format(price)
}

export const parsePrice = (priceString: string): number => {
  const numericString = priceString.replace(/₫|,/g, '')
  return parseFloat(numericString)
}
