import classNames from 'classnames/bind'
import { RiArrowRightSLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Home.module.scss'
import images from '~/assets'
import Button from '~/components/Button'
import Product from '~/components/Product'
import config from '~/config'
import routes from '~/config/routes'
import { useEffect } from 'react'
import { getProducts } from '~/features/product/productSlice'
import { ProductModel } from '~/models'
import Loading from '~/components/Loading/Loading'

const cx = classNames.bind(styles)

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch<any>(getProducts())
  }, [dispatch])

  const productState = useSelector((state: any) => state.product.products)
  const productData = productState?.slice(0, 8)

  return (
    <div className={cx('home-wrapper')}>
      <section className={cx('home-banner')}>
        <div className={cx('banner-img')}>
          <img src={images.homeBanner} alt="Home Banner" />
        </div>
        <div className={cx('banner-content')}>
          <h2 className={cx('banner-heading', 'heading')}>Khám phá bàn phím hoàn hảo dành cho bạn</h2>
          <div className={cx('banner-desc')}>
            <p>
              Khám phá nhiều lựa chọn bàn phím mới nhất và phổ biến của chúng tôi được thế kế để nâng cao trải nghiệm gõ
              của bạn
            </p>
            <div className={cx('banner-btn')}>
              <Button to={config.routes.products} outline large>
                Mua ngay
              </Button>
              <Button to={config.routes.blogPost.replace(':id', '65dbc89e80a8df07db153bcb')} background large>
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={cx('keyboard-finder')}>
        <div className={cx('keyboard-find-left')}>
          <div className={cx('keyboard-find-content')}>
            <h2 className="heading">Tìm bàn phím hoàn hảo cho bạn</h2>
            <p>
              Tại của hàng bàn phím của chúng tôi, chúng tôi cung cấp nhiều lựa chọn bàn phím chất lượng cao phù hợp với
              nhu cầu của bạn. Cho dù bạn là game thủ, lập trình viên hay chỉ đơn giản là đang tìm kiếm trải nghiệm gõ
              phím thoải mái, chúng tôi đều có bàn phím hoàn hảo dành cho bạn
            </p>
            <div className={cx('keyboard-find-list')}>
              <div className={cx('keyboard-find-item')}>
                <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M41.46 14.24L41.18 13.74C40.8188 13.1354 40.3094 12.6329 39.7 12.28L26.28 4.54C25.6724 4.1875 24.9826 4.00124 24.28 4H23.7C22.9974 4.00124 22.3076 4.1875 21.7 4.54L8.28 12.3C7.67394 12.6505 7.17052 13.1539 6.82 13.76L6.54 14.26C6.1875 14.8677 6.00124 15.5575 6 16.26V31.76C6.00124 32.4626 6.1875 33.1524 6.54 33.76L6.82 34.26C7.17958 34.859 7.68098 35.3604 8.28 35.72L21.72 43.46C22.3246 43.8198 23.0164 44.0066 23.72 44H24.28C24.9826 43.9988 25.6724 43.8126 26.28 43.46L39.7 35.7C40.312 35.3574 40.8174 34.852 41.16 34.24L41.46 33.74C41.8082 33.1306 41.9942 32.442 42 31.74V16.24C41.9988 15.5375 41.8126 14.8477 41.46 14.24ZM23.7 8H24.28L36 14.76L24 21.68L12 14.76L23.7 8ZM26 39L37.7 32.24L38 31.74V18.22L26 25.16V39Z"
                      fill="black"
                    />
                  </svg>
                  <h3>Bàn phím chơi game</h3>
                </div>
                <p>
                  Trải nghiệm độ chính xác và tốc độ với nhiều loại bàn phím được thiết kế dành cho game thủ của chúng
                  tôi.
                </p>
              </div>

              <div className={cx('keyboard-find-item')}>
                <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M41.46 14.24L41.18 13.74C40.8188 13.1354 40.3094 12.6329 39.7 12.28L26.28 4.54C25.6724 4.1875 24.9826 4.00124 24.28 4H23.7C22.9974 4.00124 22.3076 4.1875 21.7 4.54L8.28 12.3C7.67394 12.6505 7.17052 13.1539 6.82 13.76L6.54 14.26C6.1875 14.8677 6.00124 15.5575 6 16.26V31.76C6.00124 32.4626 6.1875 33.1524 6.54 33.76L6.82 34.26C7.17958 34.859 7.68098 35.3604 8.28 35.72L21.72 43.46C22.3246 43.8198 23.0164 44.0066 23.72 44H24.28C24.9826 43.9988 25.6724 43.8126 26.28 43.46L39.7 35.7C40.312 35.3574 40.8174 34.852 41.16 34.24L41.46 33.74C41.8082 33.1306 41.9942 32.442 42 31.74V16.24C41.9988 15.5375 41.8126 14.8477 41.46 14.24ZM23.7 8H24.28L36 14.76L24 21.68L12 14.76L23.7 8ZM26 39L37.7 32.24L38 31.74V18.22L26 25.16V39Z"
                      fill="black"
                    />
                  </svg>
                  <h3>Bàn phím cơ</h3>
                </div>
                <p>Khám phá phải hồi xúc giác và độ bền của bàn phím cơ với nhiều loại switch khác nhau.</p>
              </div>
            </div>
          </div>
          <div className={cx('keyboard-find-action')}>
            <Button to={config.routes.products} outline small>
              Mua ngay
            </Button>
            <Button
              to={config.routes.blogPost.replace(':id', '65dbc89e80a8df07db153bcb')}
              small
              rightIcon={<RiArrowRightSLine />}
            >
              Tìm hiểu thêm
            </Button>
          </div>
        </div>
        <div className={cx('keyboard-find-right')}>
          <img src={images.findKeyboard} alt="Keyboard Finder" />
        </div>
      </section>

      <section className={cx('home-feature')}>
        <div className={cx('feature-list')}>
          <div className={cx('feature-item')}>
            <div className={cx('feature-content')}>
              <div className={cx('feature-icon')}>
                <img src={images.icon} alt="Icon" />
              </div>
              <h2 className={cx('feature-heading')}>Khám phá các tính năng hàng đầu của chúng tôi</h2>
              <p className={cx('feature-desc')}>
                Khám phá những lợi của các tùy chọn bàn phím tùy chỉnh, công tắc cơ học và thiết kế tiện dụng của chúng
                tôi
              </p>
            </div>
            <div className={cx('feature-action')}>
              <Button outline small to="">
                Tìm hiểu thêm
              </Button>
              <Button to={routes.login} small rightIcon={<RiArrowRightSLine />}>
                Đăng nhập
              </Button>
            </div>
          </div>
          <div className={cx('feature-item')}>
            <div className={cx('feature-content')}>
              <div className={cx('feature-icon')}>
                <img src={images.icon} alt="Icon" />
              </div>
              <h3 className={cx('feature-heading')}>Nâng cao trải nghiệm đánh máy của bạn</h3>
              <p className={cx('feature-desc')}>Nâng cấp lên bàn phím phù hợp với nhu cầu và sở thích của bạn</p>
            </div>
            <div className={cx('feature-action')}>
              <Button outline small to="">
                Tìm hiểu thêm
              </Button>
              <Button to={routes.login} small rightIcon={<RiArrowRightSLine />}>
                Đăng nhập
              </Button>
            </div>
          </div>
          <div className={cx('feature-item')}>
            <div className={cx('feature-content')}>
              <div className={cx('feature-icon')}>
                <img src={images.icon} alt="Icon" />
              </div>
              <h3 className={cx('feature-heading')}>Tìm bàn phím hoàn hảo cho bạn</h3>
              <p className={cx('feature-desc')}>
                Duyệt qua nhiều lựa bàn phím của chúng tôi để tìm bàn phím phù hợp nhất với bạn.
              </p>
            </div>
            <div className={cx('feature-action')}>
              <Button outline small to={config.routes.blogPost.replace(':id', '65dbc96680a8df07db153bd7')}>
                Tìm hiểu thêm
              </Button>
              <Button to={routes.login} small rightIcon={<RiArrowRightSLine />}>
                Đăng nhập
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={cx('keyboard-upgrade')}>
        <div className={cx('keyboard-upgrade-content')}>
          <h2 className={cx('keyboard-upgrade-heading', 'heading')}>
            Nâng cấp trải nghiệm gõ bàn phím của bạn với bàn phím chất lượng
          </h2>
          <div className={cx('keaboard-upgrade-desc')}>
            <p>
              Một bàn phím chất lượng có thể cải thiện đáng kế tốc độ gõ và độ chính xác của bạn. Với các phím nhạy và
              thiết kế tiện dụng, bạn sẽ tận hưởng trải nghiệm gõ thoải mái trong nhiều giờ. Nói lời tạm biệt với lỗi
              chính tả và xin chào năng suất tăng lên.
            </p>
            <div className={cx('keyboard-upgrade-btn')}>
              <Button to="" small outline>
                Tìm hiểu thêm
              </Button>
              <Button to={routes.login} small rightIcon={<RiArrowRightSLine />}>
                Đăng nhập
              </Button>
            </div>
          </div>
        </div>
        <div className={cx('keyboard-upgrade-image')}>
          <img src={images.keyboardUpgrade} alt="Trải nghiệm gõ phím" />
        </div>
      </section>

      <section className={cx('best-keyboards')}>
        <div className={cx('best-keyboard-content')}>
          <h2 className={cx('best-keyboard-heading', 'heading')}>Trải nghiệm bàn phím tốt nhất trên thị trường</h2>
          <div className={cx('best-keyboard-desc')}>
            <p>Chúng tôi đã bán được hàng ngàn bàn phím, khiến khách hàng vô cùng hài lòng</p>
            <div className={cx('best-keyboard-list')}>
              <div className={cx('best-keyboard-info')}>
                <h5 className={cx('best-keyboard-number')}>50%</h5>
                <p>Khách hàng có trải nghiệm tốt khi dùng bàn phím của chúng tôi.</p>
              </div>
              <div className={cx('best-keyboard-info')}>
                <h5 className={cx('best-keyboard-number')}>50%</h5>
                <p>Khác hàng sẽ chọn quay trở lại mua bàn phím trong tương lai.</p>
              </div>
            </div>
            <div className={cx('best-keyboard-action')}>
              <Button to="" small outline>
                Tìm hiểu thêm
              </Button>
              <Button to={routes.login} small rightIcon={<RiArrowRightSLine />}>
                Đăng nhập
              </Button>
            </div>
          </div>
        </div>
        <div className={cx('best-keyboard-image')}>
          <img src={images.bestKeyboard1} alt="Bàn phím số 1 thị trường" />
          <img src={images.bestKeyboard2} alt="Bàn phím số 1 thị trường" />
        </div>
      </section>

      <section className={cx('home-products')}>
        <h2 className={cx('product-heading', 'heading')}>Sản phẩm nổi bật</h2>
        <p className="product-desc">Khám phá nhiều lựa chọn bàn phím phổ biến của chúng tôi.</p>

        {productData && productData.length > 0 ? (
          <div className={cx('products')}>
            {productData?.map((product: ProductModel, index: number) => (
              <Product key={index} {...product} />
            ))}
          </div>
        ) : (
          <Loading tip="sản phẩm" />
        )}
      </section>

      <section className={cx('typing-experience')}>
        <div className={cx('typing-experience-content')}>
          <h2 className={cx('typing-experience-heading', 'heading')}>Nâng cấp trải nghiệm đánh máy của bạn</h2>
          <p className={cx('typing-experience-desc')}>
            Khám phá nhiều lựa chọn bàn phím chất lượng của chúng tôi cho nhu cầu gõ của bạn.
          </p>
          <div className={cx('typing-experience-action')}>
            <Button to={config.routes.products} small background>
              Mua ngay
            </Button>
            <Button to="" small outline>
              Tìm hiểu thêm
            </Button>
          </div>
        </div>
        <div className={cx('typing-experience-img')}>
          <img src={images.typingExperience} alt="Trải nghiệm đánh máy" />
        </div>
      </section>

      <section className={cx('home-newsletter')}>
        <div className={cx('newsletter-content')}>
          <h2 className={cx('newsletter-heading', 'heading')}>Luôn cập nhật bản tin với chúng tôi.</h2>
          <p className={cx('newsletter-desc')}>
            Đăng ký nhận bản tin của chúng tôi để nhận thông tin mới nhất về các sản phẩm và ưu đãi đặc biệt.
          </p>
          <div className={cx('newsletter-action')}>
            <input type="email" placeholder="Nhập email của bạn" />
            <Button to="" small background className={cx('newsletter-btn')}>
              Đăng ký
            </Button>
          </div>
        </div>
        <div className={cx('newsletter-img')}>
          <img src={images.services} alt="services" />
        </div>
      </section>
    </div>
  )
}

export default Home
