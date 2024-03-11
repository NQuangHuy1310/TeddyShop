import classNames from 'classnames/bind'

import styles from './ProFavorite.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProductFavorite } from '~/features/auth/authSlice'
import { ProductModel } from '~/models'
import Product from '~/components/Product'
import { Link } from 'react-router-dom'
import config from '~/config'

const cx = classNames.bind(styles)

const ProFavorite = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch<any>(getProductFavorite())
  }, [dispatch])

  const favoriteProducts = useSelector((state: any) => state.auth?.favoriteProducts)
  const deletedFavproteProduct = useSelector((state: any) => state.auth?.deletedProductFavorite)

  useEffect(() => {
    dispatch<any>(getProductFavorite())
  }, [dispatch, deletedFavproteProduct])

  return (
    <section className={cx('product-favorite-wrapper')}>
      <div className={cx('favorite-header')}>
        <h2>TeddyShop | Sản phẩm yêu thích</h2>
      </div>
      <div className={cx('favorite-list')}>
        {favoriteProducts &&
          favoriteProducts.length > 0 &&
          favoriteProducts?.map((product: ProductModel, index: number) => {
            return <Product key={index} {...product} isFavorite />
          })}
      </div>
      {favoriteProducts.length === 0 && (
        <div className={cx('favorite-no-product')}>
          Bạn chưa có sản phẩm yêu thích, <Link to={config.routes.products}>vào đây</Link> để thêm thật nhiều sản phẩm
          vào yêu thích nào!
        </div>
      )}
    </section>
  )
}

export default ProFavorite
