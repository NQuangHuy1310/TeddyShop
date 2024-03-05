import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './Product.module.scss'
import Button from '~/components/Button'
import images from '~/assets'
import { ProductModel } from '~/models'
import { formatPrice } from '~/utils'
import { GrKeyboard } from 'react-icons/gr'
import { MdFavoriteBorder } from 'react-icons/md'

const cx = classNames.bind(styles)

const Product = (props: ProductModel) => {
  const { _id, name, images: productImg, price, tags } = props

  const productPrice = formatPrice(price)

  const handleAddFavorite = (e: React.MouseEvent, productId: string) => {
    e.preventDefault()
    console.log(productId)
  }

  return (
    <div className={cx('product')}>
      <Link to={`/product/${_id}`} className={cx('product-info')}>
        <div className={cx('product-img')}>
          <img src={productImg[0].url || images.productDefault} />
        </div>
        <div className={cx('product-favorite')} onClick={(e) => handleAddFavorite(e, _id)}>
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
