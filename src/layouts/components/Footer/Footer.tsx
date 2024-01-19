import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaYoutubeSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa'

import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div className={cx('footer-inner')}>
        <div className={cx('footer-content')}>
          <div className={cx('footer-info')}>
            <Link to="/" className={cx('footer-logo')}>
              TeddyShop
            </Link>
            <div className={cx('footer-address')}>
              <strong>Địa chỉ</strong> Phường Lương Sơn, Thành Phố Sông Công, Tỉnh Thái Nguyên
            </div>
            <div className={cx('footer-contact')}>
              <strong>Liên hệ</strong>
              <p>Số điện thoại: </p> 0352223905
              <br />
              <p>Gmail: </p> huynq13102004@gmail.com
            </div>
            <div className={cx('footer-social')}>
              <Link to="">
                <FaFacebookSquare className={cx('footer-icon')} />
              </Link>
              <Link to="">
                <FaYoutubeSquare className={cx('footer-icon')} />
              </Link>
              <Link to="">
                <FaLinkedin className={cx('footer-icon')} />
              </Link>
              <Link to="">
                <FaInstagramSquare className={cx('footer-icon')} />
              </Link>
            </div>
          </div>

          <div className={cx('footer-list')}>
            <div className={cx('footer-column')}>
              <Link className={cx('footer-link')} to="">
                Trang chủ
              </Link>
              <Link className={cx('footer-link')} to="">
                Giới thiệu
              </Link>
              <Link className={cx('footer-link')} to="">
                Kiến thức và phần mềm
              </Link>
              <Link className={cx('footer-link')} to="">
                Chính sách bảo hành
              </Link>
              <Link className={cx('footer-link')} to="">
                Liên hệ
              </Link>
            </div>

            <div className={cx('footer-column')}>
              <Link className={cx('footer-link')} to="">
                Khuyến mãi
              </Link>
              <Link className={cx('footer-link')} to="">
                Group By
              </Link>
              <Link className={cx('footer-link')} to="">
                In Stock
              </Link>
              <Link className={cx('footer-link')} to="">
                Hỗ trợ
              </Link>
              <Link className={cx('footer-link')} to="">
                Bảo hành
              </Link>
            </div>
          </div>
        </div>
        <div className={cx('footer-credits')}>
          <span>
            Bản quyền thuộc về <strong>TeddyShop</strong>
          </span>
          <div className={cx('footer-links')}>
            <Link to="">Chính sách bảo mật</Link>
            <Link to="">Điều khoản và dịch vụ</Link>
            <Link to="">Cài đặt cookie</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
