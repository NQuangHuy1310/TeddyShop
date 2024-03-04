import classNames from 'classnames/bind'
import styles from './ProfileNav.module.scss'
import { FaPen } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import images from '~/assets'
import { ImCreditCard } from 'react-icons/im'
import { useState } from 'react'
import config from '~/config'

const cx = classNames.bind(styles)

const Profile = () => {
  const [isShow, setIsShow] = useState(false)

  return (
    <div className={cx('profile-navbar')}>
      <div className={cx('profile-info')}>
        <div className={cx('profile-avatar')}>
          <img src={images.noImage} alt="" />
        </div>
        <div className={cx('profile-username')}>
          <div className={cx('profile-name')}>Nguyễn Quang Huy</div>
          <div className={cx('profile-edit')}>
            <FaPen />
            Sửa hồ sơ
          </div>
        </div>
      </div>
      <nav className={cx('profile-list')}>
        <div className={cx('profile-title')} onClick={() => setIsShow(!isShow)}>
          <FaUser />
          Tài khoản của tôi
        </div>
        {isShow && (
          <ul className={cx('profile-items')}>
            <li className={cx('profile-item')}>
              <Link to={config.routes.profile}>Hồ sơ</Link>
            </li>
            <li className={cx('profile-item')}>
              <Link to={config.routes.address}>Địa chỉ</Link>
            </li>
            <li className={cx('profile-item')}>
              <Link to="">Xác thực email</Link>
            </li>
            <li className={cx('profile-item')}>
              <Link to="">Đổi mật khẩu</Link>
            </li>
          </ul>
        )}

        <div className={cx('profile-title')}>
          <ImCreditCard />
          Đơn mua
        </div>
      </nav>
    </div>
  )
}

export default Profile
