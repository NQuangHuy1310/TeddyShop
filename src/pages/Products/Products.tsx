import classNames from 'classnames/bind'

import styles from './Products.module.scss'
import Button from '~/components/Button'
import Product from '~/components/Product'
import images from '~/assets'

const cx = classNames.bind(styles)

const productData = [
  {
    name: 'Razer BlackWidow V4 75%',
    desc: 'Hot-swappable Mechanical Gaming Keyboard',
    price: 200,
    image:
      'https://bizweb.dktcdn.net/thumb/large/100/438/322/products/bottom-bg-white-y0a1a2a5a-caps-d.jpg?v=1695965181743'
  },
  {
    name: 'Razer BlackWidow V4 75%',
    desc: 'Hot-swappable Mechanical Gaming Keyboard',
    price: 200,
    image:
      'https://bizweb.dktcdn.net/thumb/large/100/438/322/products/bottom-bg-white-y0a1a2a5a-caps-d.jpg?v=1695965181743'
  },
  {
    name: 'Razer BlackWidow V4 75%',
    desc: 'Hot-swappable Mechanical Gaming Keyboard',
    price: 200,
    image:
      'https://bizweb.dktcdn.net/thumb/large/100/438/322/products/bottom-bg-white-y0a1a2a5a-caps-d.jpg?v=1695965181743'
  },

  {
    name: 'Razer BlackWidow V4 75%',
    desc: 'Hot-swappable Mechanical Gaming Keyboard',
    price: 200,
    image:
      'https://bizweb.dktcdn.net/thumb/large/100/438/322/products/bottom-bg-white-y0a1a2a5a-caps-d.jpg?v=1695965181743'
  },
  {
    name: 'Razer BlackWidow V4 75%',
    desc: 'Hot-swappable Mechanical Gaming Keyboard',
    price: 200,
    image:
      'https://bizweb.dktcdn.net/thumb/large/100/438/322/products/bottom-bg-white-y0a1a2a5a-caps-d.jpg?v=1695965181743'
  },
  {
    name: 'Razer BlackWidow V4 75%',
    desc: 'Hot-swappable Mechanical Gaming Keyboard',
    price: 200,
    image:
      'https://bizweb.dktcdn.net/thumb/large/100/438/322/products/bottom-bg-white-y0a1a2a5a-caps-d.jpg?v=1695965181743'
  },
  {
    name: 'Razer BlackWidow V4 75%',
    desc: 'Hot-swappable Mechanical Gaming Keyboard',
    price: 200,
    image:
      'https://bizweb.dktcdn.net/thumb/large/100/438/322/products/bottom-bg-white-y0a1a2a5a-caps-d.jpg?v=1695965181743'
  }
]

const questionsAndAnserws = [
  {
    question: 'Thông số kỹ thuật là gì ?',
    answer:
      'Sản phẩm của chúng tôi có nhiều thông số kỹ thuật để đáp ứng các nhu cầu khác nhau. Vui lòng kiểm tra mô tả sản phẩm để biết thêm thông tin chi tiết.'
  },
  {
    question: 'Làm thế nào tôi có thể đặt hàng ?',
    answer:
      'Để đặt hàng, bạn chỉ cần thêm sản phẩm mong muốn vào giỏ hàng và tiến hành thanh toán. Thực hiện theo các hướng dẫn để hoàn tất việc mua hàng của bạn.'
  },
  {
    question: 'Chính sách hoàn trả của bạn là gì ?',
    answer:
      'Chúng tôi cung cấp chính sách hoàn trả trong 30 ngày đối với các sản phẩm chưa sử dụng và không bị hư hại. Vui lòng tham khảo trang Trả lại & Hoàn tiền của chúng tôi để biết thêm thông tin.'
  },
  {
    question: 'Bảo hiểm trong bao lâu ?',
    answer:
      'Sản phẩm của chúng tôi được bảo hành 1 năm đối với các lỗi sản xuất. Vui lòng liên hệ với nhóm hỗ trợ của chúng tôi để yêu cầu bảo hành.'
  },
  {
    question: 'Bạn thường có thường xuyên đặt hàng nước ngoài không ?',
    answer:
      'Có, chúng tôi cung cấp dịch vụ vận chuyển quốc tế đến một số quốc gia được chọn. Phí vận chuyển và thời gian giao hàng có thể thay đổi. Vui lòng kiểm tra trang Vận chuyển & Giao hàng của chúng tôi để biết thêm chi tiết.'
  }
]

const Products = () => {
  return (
    <div className={cx('products-wrapper')}>
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
            <h2 className={cx('product-heading', 'heading')}>Các sản phẩm</h2>
            <p className={cx('product-sub-heading')}>
              Duyệt qua nhiều lựa chọn bàn phím của chúng tôi cho mọi nhu cầu.
            </p>
          </div>
          <Button className={cx('product-view-all')}>Xem tất cả</Button>
        </div>
        <div className={cx('product-list')}>
          {productData &&
            productData.length > 0 &&
            productData.map((product, index) => {
              return <Product key={index} {...product} />
            })}
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
          <Button small outline>
            Liên hệ
          </Button>
        </div>
        <ul className={cx('faq-list')}>
          {questionsAndAnserws &&
            questionsAndAnserws.map((item, index) => {
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
