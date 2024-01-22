import classNames from 'classnames/bind'

import styles from './Product.module.scss'
import Button from '~/components/Button'
import { Link } from 'react-router-dom'
import images from '~/assets'

const cx = classNames.bind(styles)

interface productProps {
  name: string
  desc: string
  price: number
  image: string
  link: string
}

const Product = (props: productProps) => {
  const { name, desc, price, image, link } = props

  return (
    <Link to={link} className={cx('product')}>
      <div className={cx('product-img')}>
        <img src={image || images.productDefault} />
      </div>
      <div className={cx('product-content')}>
        <h5 className={cx('product-name')}>{name}</h5>
        <h6 className={cx('product-desc')}>{desc}</h6>
        <div className={cx('product-add')}>
          <p className={cx('product-price')}>${price}</p>
          <Button small background className={cx('product-btn')}>
            Thêm vào giỏ hàng
          </Button>
        </div>
      </div>
    </Link>
  )
}

export default Product
