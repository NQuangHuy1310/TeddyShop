import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Product.module.scss'
import Button from '~/components/Button'
import images from '~/assets'
import { ProductModel } from '~/models'
import { formatPrice } from '~/utils'
import { GrKeyboard } from 'react-icons/gr'
import { MdFavoriteBorder } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { addProductFavorite, deleteProductFavorite } from '~/features/auth/authSlice'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles)

interface ProductModelProps extends ProductModel {
  isFavorite?: boolean
}

const Product = (props: ProductModelProps) => {
  const dispatch = useDispatch()
  const [productId, setProductId] = useState<string>('')

  const { _id, name, images: productImg, price, tags, isFavorite } = props

  const productPrice = formatPrice(price)

  const handleAddFavorite = (e: React.MouseEvent, productId: string) => {
    e.preventDefault()
    if (!productId) return
    setProductId(productId)
    dispatch<any>(addProductFavorite(productId))
  }

  const handleRemoveFavorite = (e: React.MouseEvent, productId: string) => {
    e.preventDefault()
    if (!productId) return
    setProductId(productId)
    dispatch<any>(deleteProductFavorite(productId))
  }

  const handleClick = (event: React.MouseEvent, _id: string) => {
    if (isFavorite) {
      handleRemoveFavorite(event, _id)
    } else {
      handleAddFavorite(event, _id)
    }
  }

  const authState = useSelector((state: any) => state.auth?.user)
  const { favoriteProducts } = authState

  useEffect(() => {
    if (favoriteProducts?.length > 0 && productId && !isFavorite) {
      toast.success('Đã thêm sản phẩm vào danh sách yêu thích!')
      setProductId('')
    }
  }, [favoriteProducts, productId, isFavorite])

  return (
    <div className={cx('product')}>
      <Link to={`/product/${_id}`} className={cx('product-info')}>
        <div className={cx('product-img')}>
          <img src={productImg[0].url || images.productDefault} />
        </div>
        <div
          className={cx('product-favorite', {
            'product-favorite-bold': isFavorite
          })}
          onClick={(event) => handleClick(event, _id)}
        >
          <MdFavoriteBorder className={cx('product-icon')} />
        </div>
        <div className={cx('product-content')}>
          <h5 className={cx('product-name')}>{name}</h5>
          <div className={cx('tags')}>
            {tags &&
              tags?.map((tag, index) => {
                return (
                  <h6 className={cx('product-tag')} key={index}>
                    {tag}
                  </h6>
                )
              })}
          </div>
        </div>
      </Link>
      <div className={cx('product-add')}>
        <p className={cx('product-price')}>{productPrice}</p>
        <Button to={`/product/${_id}`} primary className={cx('product-view')}>
          <GrKeyboard className={cx('product-icon')} />
        </Button>
      </div>
    </div>
  )
}

export default Product
