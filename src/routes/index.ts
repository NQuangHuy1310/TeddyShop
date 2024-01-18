import config from '~/config'
import MainLayout from '~/layouts/MainLayout'
import { route } from '~/models'
import About from '~/pages/About'
import Blog from '~/pages/Blog'
import BlogPost from '~/pages/BlogPost'
import Home from '~/pages/Home'
import ProductDetail from '~/pages/ProductDetail'
import Products from '~/pages/Products'

const publicRoutes: route[] = [
  { path: config.routes.home, element: Home, layout: MainLayout },
  { path: config.routes.about, element: About, layout: MainLayout },
  { path: config.routes.blog, element: Blog, layout: MainLayout },
  { path: config.routes.blogPost, element: BlogPost, layout: MainLayout },
  { path: config.routes.productDetail, element: ProductDetail, layout: MainLayout },
  { path: config.routes.products, element: Products, layout: MainLayout }
]

// const privateRoutes = []

export { publicRoutes }
