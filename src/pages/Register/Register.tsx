import classNames from 'classnames/bind'
import styles from './Register.module.scss'
import { Link } from 'react-router-dom'
import routes from '~/config/routes'
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa'
import Button from '~/components/Button'

const cx = classNames.bind(styles)

const Register = () => {
  return (
    <div className={cx('register-section')}>
      <form className={cx('register-form')}>
        <div className="">
          <h2 className={cx('form-heading')}>Đăng ký tài khoản</h2>
          <p className={cx('form-title')}>
            Bạn đã có tài khoản ? <Link to={routes.login}>Đăng nhập</Link>
          </p>
        </div>
        <div className={cx('form-methods')}>
          <div className={cx('form-method')}>
            <FaFacebook className={cx('from-icon')} />
          </div>
          <div className={cx('form-method')}>
            <FaGoogle className={cx('from-icon')} />
          </div>
          <div className={cx('form-method')}>
            <FaGithub className={cx('from-icon')} />
          </div>
        </div>
        <div className={cx('form-text')}>hoặc đăng nhập với email</div>
        <div className={cx('form-list')}>
          <div className={cx('form-group')}>
            <label htmlFor="fullnName">Họ và tên</label>
            <input type="text" id="fullnName" placeholder="Nhập họ và tên của bạn của bạn..." />
          </div>
          <div className={cx('form-group')}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Nhập email của bạn..." />
          </div>
          <div className={cx('form-group')}>
            <label htmlFor="password">Mật khẩu</label>
            <input type="text" id="password" placeholder="Nhập mật khẩu của bạn..." />
          </div>
          <div className={cx('form-group')}>
            <label htmlFor="cfPassword">Nhập lại mật khẩu</label>
            <input type="text" id="cfPassword" placeholder="Nhập lại mật khẩu của bạn..." />
          </div>
        </div>
        <Link to="" className={cx('form-forgot-password')}>
          Quên mật khẩu
        </Link>
        <Button primary className={cx('form-btn')}>
          Đăng ký
        </Button>
      </form>
    </div>
  )
}

export default Register
