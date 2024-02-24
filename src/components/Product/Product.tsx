import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './Product.module.scss'
import Button from '~/components/Button'
import images from '~/assets'
import { ProductModel } from '~/models'
import { formatPrice } from '~/utils'

const cx = classNames.bind(styles)

const Product = (props: ProductModel) => {
  const { _id, name, images: productImg, price, tags } = props

  const productPrice = formatPrice(price)

  const handleAddToCart = () => {}

  return (
    <div className={cx('product')}>
      <Link to={`/product/${_id}`} className={cx('product-info')}>
        <div className={cx('product-img')}>
          <img src={productImg[0].url || images.productDefault} />
        </div>
        <div className={cx('product-content')}>
          <h5 className={cx('product-name')}>{name}</h5>
          <div className={cx('tags')}>
            {tags &&
              tags.map((tag, index) => {
                return (
                  <h6 className={cx('product-tag')} key={index}>
                    {tag}
                  </h6>
                )
              })}
          </div>
          {/* <h6 className={cx('product-desc')} dangerouslySetInnerHTML={{ __html: description }}></h6> */}
        </div>
      </Link>
      <div className={cx('product-add')}>
        <p className={cx('product-price')}>{productPrice}</p>
        <Button small background className={cx('product-btn')} onClick={handleAddToCart}>
          Thêm vào giỏ hàng
        </Button>
      </div>
    </div>
  )
}

export default Product
