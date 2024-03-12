import classNames from 'classnames/bind'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import styles from './Products.module.scss'
import Button from '~/components/Button'
import Product from '~/components/Product'
import images from '~/assets'
import { DATA } from '~/constants'
import config from '~/config'
import { getProducts } from '~/features/product/productSlice'
import { ProductModel } from '~/models'
import Loading from '~/components/Loading/Loading'
import Breadcrumb from '~/components/Breadcrumb'

const cx = classNames.bind(styles)

const Products = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch<any>(getProducts())
  }, [dispatch])

  const productState = useSelector((state: any) => state.product?.products)

  return (
    <div className={cx('products-wrapper')}>
      <Breadcrumb breadcrumbData={[{ pageName: 'Sản phẩm' }]} />
      <section className={cx('keyboards-section')}>
        <h1 className={cx('keyboards-section-heading', 'heading')}>Khám phá bàn phím của chúng tôi</h1>
        <p className={cx('keyboards-section-desc')}>
          Khám phá nhiều loại bàn phím chất lượng cao được thiết kế để làm việc và chơi game.
        </p>
      </section>

      <section className={cx('products')}>
        <div className={cx('product-top')}>
          <div className={cx('product-heading')}>
            <p className={cx('product-sub-heading')}>Bàn phím tốt nhất</p>
            <h2 className={cx('product-heading', 'heading')}>Các sản phẩm nổi bật</h2>
            <p className={cx('product-sub-heading')}>
              Tìm bàn phím hoàn hảo cho nhu cầu của bạn, từ bàn phím chơi game đến bàn phím làm việc hàng ngày.
            </p>
          </div>
          <Button className={cx('product-view-all')}>Xem tất cả</Button>
        </div>
        <div className={cx('product-content')}>
          {productState ? (
            <div className={cx('product-list')}>
              {productState.length > 0 &&
                productState?.map((product: ProductModel, index: number) => {
                  return <Product key={index} {...product} />
                })}
            </div>
          ) : (
            <Loading tip="sản phẩm" />
          )}
        </div>
      </section>

      <section className={cx('new-keyboards')}>
        <div className={cx('new-keboard-content')}>
          <h2 className={cx('new-keyboard-heading')}>Khám phá những bàn phím mới nhất để có trải nghiệm gõ nâng cao</h2>
          <p className={cx('new-keyboard-desc')}>
            Nâng cấp trải nghiệm gõ của bạn với bàn phím mới hoặc nổi bật của chúng tôi. Khám phá nhiều tùy chọn của
            chúng tôi và tìm bàn phím hoàn hảo cho nhu cầu của bạn.
          </p>
          <ul className={cx('new-keyboard-list')}>
            <li className={cx('new-keyboard-item')}>
              <img src={images.icon} />
              <p>Nâng cao năng suất với bàn phím tiên tiến.</p>
            </li>
            <li className={cx('new-keyboard-item')}>
              <img src={images.icon} />
              <p>Trải nghiệm sự thoải mái và chín xác với bàn phím tiện dụng.</p>
            </li>
            <li className={cx('new-keyboard-item')}>
              <img src={images.icon} />
              <p>Nâng cao hiệu suất chơi game của bạn với bàn phím chơi game với nhiều công nghệ mới.</p>
            </li>
          </ul>
        </div>
        <div className={cx('new-keyboard-img')}>
          <img src={images.keyboardUpgrade} alt="new keyboard" />
        </div>
      </section>

      <section className={cx('product-fqa')}>
        <div className={cx('faq-title')}>
          <h2 className={cx('heading')}>Các câu hỏi thường gặp</h2>
          <p>Tìm câu trả lời cho các câu hỏi phổ biến về sản phâm của chúng tôi và đưa ra quyết định sáng suốt</p>
          <Button small outline to={config.routes.contact}>
            Liên hệ
          </Button>
        </div>
        <ul className={cx('faq-list')}>
          {DATA.FAQS &&
            DATA.FAQS?.map((item, index) => {
              return (
                <li className={cx('faq-item')} key={index}>
                  <p className={cx('question')}>{item.question}</p>
                  <span className={cx('answer')}>{item.answer}</span>
                </li>
              )
            })}
        </ul>
      </section>

      <section className={cx('early-access')}>
        <div className={cx('early-content')}>
          <h2 className={cx('heading')}>Nhận thông tin khi có các sản phẩm mới</h2>
          <p className={cx('desc')}>
            Đăng ký ngay bây giờ để trở thành người đầu tiên biết về các phiên bản bàn phím sắp ra mắt của chúng tôi.
          </p>
          <div className={cx('action')}>
            <input type="email" placeholder="Nhập email của bạn" />
            <Button background small>
              Đăng ký
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
