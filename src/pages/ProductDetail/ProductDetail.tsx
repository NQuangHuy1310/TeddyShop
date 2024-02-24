import classNames from 'classnames/bind'
import { FaRegStar } from 'react-icons/fa'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { useEffect, useState } from 'react'

import styles from './ProductDetail.module.scss'
import images from '~/assets'
import Button from '~/components/Button'
import Heading from '~/components/Heading'
import Form from '~/components/Form'
import { DATA } from '~/constants'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getProduct } from '~/feature/product/productSlice'
import { ProductModel } from '~/models'
import { formatPrice } from '~/utils'
import Tabs from '~/components/Tabs'

const cx = classNames.bind(styles)

const ProductDetail = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const productId = location.pathname.split('/')[2]

  const [productCount, setProductCount] = useState<number>(1)

  // product detail data
  useEffect(() => {
    dispatch<any>(getProduct(productId))
  }, [productId, dispatch])

  const product: ProductModel = useSelector((state: any) => state.product?.product)
  const { price, name, images: productImages, description, warranty } = product

  const [productImageMain, setProductImageMain] = useState<string | undefined>('')
  const productPrice = formatPrice(price)

  // handle product count
  const increaseProductCount = () => {}

  const decreaseProductCount = () => {}

  return (
    <div className={cx('product-detail-wrapper')}>
      <section className={cx('product-detail')}>
        <div className={cx('product-img')}>
          <div className={cx('product-img-main')}>
            <img src={productImageMain || (productImages && productImages[0]?.url)} alt="product" />
          </div>
          <div className={cx('product-img-list')}>
            {productImages?.map((item, index) => {
              return (
                <div className={cx('product-img-item')} key={index} onClick={() => setProductImageMain(item?.url)}>
                  <img src={item.url} alt="product" />
                </div>
              )
            })}
          </div>
        </div>
        <div className={cx('product-info')}>
          <div className={cx('product-info-left')}>
            <h3 className={cx('product-name')}>{name}</h3>
            <Tabs desctiption={description} warranty={warranty} />
          </div>
          <div className={cx('product-info-right')}>
            <h4 className={cx('product-price')}>{productPrice}</h4>
            <div className={cx('product-reviews')}>
              <div className={cx('starts')}>
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
              <p className={cx('stars-number')}>(4.5 stars)</p>
              <p className={cx('reviews-text')}>5 Reviews</p>
            </div>
            <div className={cx('product-type')}>
              <Button background small>
                Red Switch
              </Button>
              <Button outline small>
                Blue Switch
              </Button>
              <Button outline small>
                Brown Switch
              </Button>
            </div>
            <div className={cx('product-quantity')}>
              <Button outline className={cx('product-btn')} onClick={decreaseProductCount}>
                -
              </Button>
              <input type="number" className={cx('product-input')} value={productCount} />
              <Button outline className={cx('product-btn')} onClick={increaseProductCount}>
                +
              </Button>
            </div>
            <div className={cx('product-action')}>
              <Button background large className={cx('product-add')}>
                Thêm vào giỏ hàng
              </Button>
              <Button outline large className={cx('product-buy')}>
                Mua ngay
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={cx('product-typing')}>
        <div className={cx('typing-container')}>
          <div className={cx('typing-img')}>
            <img src={images.keyboardUpgrade} alt="" />
          </div>
          <div className={cx('typing-content')}>
            <Heading
              heading="Trải nghiệm hiệu suất gõ phím tối ưu"
              desc="Giới thiệu bàn phím mới nhất của chúng tôi, được thiết kế với công nghệ tiên tiến và các tính năng có thể tùy chỉnh. Nâng cao năng suất và trải nghiệm đánh máy của bạn hơn bao giờ hết."
            />
            <div className={cx('typing-action')}>
              <Button background small to="">
                Tìm hiểu thêm
              </Button>
              <Button outline small to="">
                Đăng nhập
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={cx('product-performance')}>
        <div className={cx('performance-container')}>
          <div className={cx('performance-title')}>
            <Heading
              heading="Trải nghiệm hiệu suất gõ phím tối ưu"
              desc=" Bàn phím của chúng tôi có công nghệ tiên tiến giúp nâng cao trải nghiệm gõ phím của bạn. Với thiết kế tiện dụng và các tính năng có thể tùy chỉnh, đây là bàn phím hoàn hảo cho cả công việc và giải trí."
            />
          </div>
          <div className="">
            <div className={cx('performance-list')}>
              {DATA.PERFORMANCE_DATA.map((item, index) => {
                return (
                  <div className={cx('performance-item')} key={index}>
                    <div className={cx('performance-icon')}>
                      <img src={images.icon} alt="" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                )
              })}
            </div>
            <div className={cx('performance-action')}>
              <Button outline small to="">
                Mua ngay
              </Button>
              <Button small to="" rightIcon={<MdKeyboardDoubleArrowRight />}>
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={cx('product-faq')}>
        <div className={cx('faq-container')}>
          <Heading
            heading="Các câu hỏi thường gặp"
            desc="Tìm câu trả lời cho các câu hỏi phổ biến về sản phẩm của chúng tôi dưới đây."
          />
          <div className={cx('faq-list')}>
            {DATA.FAQS_PRODUCTS.map((item, index) => {
              return (
                <div className={cx('faq-item')} key={index}>
                  <div className={cx('faq-question')}>
                    <h3>{item.question}</h3>
                  </div>
                  <div className={cx('faq-answer')}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className={cx('faq-contact')}>
            <Heading
              heading="Bạn vẫn còn thắc mắc ?"
              desc="Hãy liên hệ với chúng tôi để được giải đáp những thắc mắc và được hỗ trợ thêm"
            />
            <Button outline large>
              Liên hệ
            </Button>
          </div>
        </div>
      </section>

      <section className={cx('product-checkout')}>
        <div className={cx('checkout-container')}>
          <Heading
            heading="Thêm vào giỏ hàng hoặc thanh toán"
            desc="Sở hữu bàn phím tốt nhất cho nhu cầu gõ phím của bạn. Mua sắm ngay bây giờ!"
          />
          <div className={cx('checkout-action')}>
            <Button outline large>
              Thêm vào giỏ hàng
            </Button>
            <Button background large>
              Thanh toán
            </Button>
          </div>
        </div>
      </section>

      <section className={cx('product-order')}>
        <div className={cx('order-container')}>
          <Form />
          <div className={cx('order-gift')}>
            <img src={images.gifts} alt="Gifts" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
