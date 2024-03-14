export const formatPrice = (price: number | string): string => {
  const formattedPrice = typeof price === 'string' ? parseFloat(price) : price
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND'
  }).format(formattedPrice)
}

export const parsePrice = (priceString: string): number => {
  const numericString = priceString.replace(/₫|,/g, '')
  return parseFloat(numericString)
}
