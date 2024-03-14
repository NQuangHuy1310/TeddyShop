const routes = {
  home: '/',
  about: '/about',
  blog: '/blogs',
  blogPost: '/blog-post/:id',
  productDetail: '/product',
  products: '/products',
  product: '/product/:id',
  login: '/login',
  register: '/register',
  contact: '/contact',
  events: '/events',
  event: '/event/:id',
  brandDetail: '/brand/:id',
  profile: '/user/profile',
  address: '/user/address',
  cart: '/user/cart',
  productFavorite: '/user/favorite',
  userPurchase: '/user/purchase',
  verifyEmail: '/verify-email',
  checkOut: '/checkout',
  notFount: '*',
  notAuthorized: '/notAuthorized',
  result: '/result'
}

export default routes
