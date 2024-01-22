import classNames from 'classnames/bind'
import { FaRegStar } from 'react-icons/fa'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { useState } from 'react'

import styles from './ProductDetail.module.scss'
import images from '~/assets'
import Button from '~/components/Button'
import Heading from '~/components/Heading'

const cx = classNames.bind(styles)

const performanceData = [
  {
    title: 'Thiết kế gọn nhẹ',
    desc: 'Bàn phím được thiết kế để mang lại sự thoải mái tối đa và giảm căng thẳng cho cổ tay và ngón tay của bạn.'
  },
  {
    title: 'Tính năng có thể tùy chỉnh',
    desc: 'Cá nhân hóa trải nghiệm gõ của bạn với ánh sáng phím có thể tùy chỉnh và macro có thể lập trình.'
  },
  {
    title: 'Bền bỉ và đáng tin cậy',
    desc: 'Được thiết kế để tồn tại lâu dài với vật liệu chất lượng cao và hiệu suất đáng tin cậy.'
  }
]

const dataFAQ = [
  {
    question: 'Có thể tùy chỉnh ánh sáng phím không?',
    answer: 'Có, bạn có thể tùy chỉnh ánh sáng phím theo ý thích của mình.'
  },
  {
    question: 'Các thông số kỹ thuật là gì?',
    answer:
      'Sản phẩm của chúng tôi có kết cấu bền bỉ, thiết kế tiện dụng và các tùy chọn ánh sáng RGB có thể tùy chỉnh.'
  },
  {
    question: 'Bàn phím có thể dùng cho máy tính Mac không?',
    answer: 'Có, bạn có thể dùng bàn phím của chúng tôi cho máy tính Mac.'
  },
  {
    question: 'Làm thế nào để làm sạch bàn phím?',
    answer:
      'Để làm sạch bàn phím, bạn chỉ cần sử dụng vải mềm và dung dịch tẩy rửa nhẹ. Tránh sử dụng các hóa chất mạnh.'
  },
  {
    question: 'Làm thế nào để đặt hàng?',
    answer: 'Để đặt hàng, bạn chỉ cần chọn sản phẩm mong muốn, thêm sản phẩm vào giỏ hàng và tiến hành thanh toán.'
  }
]

const ProductDetail = () => {
  const [productCount, setProductCount] = useState<number>(1)

  const increaseProductCount = () => {
    setProductCount(productCount + 1)
  }

  const decreaseProductCount = () => {
    if (productCount > 1) {
      setProductCount(productCount - 1)
    }
  }

  return (
    <div className={cx('product-detail-wrapper')}>
      <section className={cx('product-detail')}>
        <div className={cx('product-img')}>
          <div className={cx('product-img-main')}>
            <img src={images.bestKeyboard1} alt="" />
          </div>
          <div className={cx('product-img-list')}>
            <div className={cx('product-img-row')}>
              <div className={cx('product-img-item')}>
                <img src={images.bestKeyboard1} alt="" />
              </div>
              <div className={cx('product-img-item')}>
                <img src={images.bestKeyboard1} alt="" />
              </div>
            </div>
            <div className={cx('product-img-row')}>
              <div className={cx('product-img-item')}>
                <img src={images.bestKeyboard1} alt="" />
              </div>
              <div className={cx('product-img-item')}>
                <img src={images.bestKeyboard1} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={cx('product-info')}>
          <div className={cx('product-info-left')}>
            <h3 className={cx('product-name')}>Mechanical Keyboard</h3>
            <p className={cx('product-desc')}>
              Trải nghiệm trải nghiệm gõ tuyệt vời nhất với Bàn phím cơ của chúng tôi. Được thiết kế cho độ chính xác và
              thoải mái.
            </p>
            <div className={cx('product-text')}>
              <p>Vật liệu chất lượng cao cho độ bền và hiệu suất.</p>
              <p>Thiết kế công thái học để gõ thoải mái cả ngày.</p>
              <p>Ánh sáng RGB có thể tùy chỉnh để có giao diện cá nhân hóa.</p>
            </div>
          </div>
          <div className={cx('product-info-right')}>
            <h4 className={cx('product-price')}>$200</h4>
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
              <Button outline small className={cx('product-btn')} onClick={decreaseProductCount}>
                -
              </Button>
              <input type="number" className={cx('product-input')} value={productCount} />
              <Button outline small className={cx('product-btn')} onClick={increaseProductCount}>
                +
              </Button>
            </div>
            <div className={cx('product-action')}>
              <Button background large className={cx('product-add')}>
                Add to cart
              </Button>
              <Button outline large className={cx('product-buy')}>
                Buy now
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
              {performanceData.map((item, index) => {
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
            {dataFAQ.map((item, index) => {
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
          <form className={cx('order-form')}>
            <Heading
              heading="Để lại thông tin liên lạc"
              desc="Điền vào những thông tin của bạn để đặt hàng và nhận những phần quà giá trị của chúng tôi."
            />
            <div className={cx('order-input')}>
              <input type="text" placeholder="Họ và tên" />
              <input type="number" placeholder="Số điện thoại" />
              <input type="address" placeholder="Địa chỉ" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Ghi chú" />
            </div>
            <div className={cx('order-action')}>
              <Button background large>
                Đăng ký
              </Button>
            </div>
          </form>
          <div className={cx('order-gift')}>
            <img src={images.gifts} alt="Gifts" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
