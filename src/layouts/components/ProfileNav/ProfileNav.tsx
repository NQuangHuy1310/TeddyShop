import classNames from 'classnames/bind'
import styles from './ProfileNav.module.scss'
import { FaPen } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import images from '~/assets'
import { useState } from 'react'
import config from '~/config'
import { useSelector } from 'react-redux'

const cx = classNames.bind(styles)

const Profile = () => {
  const [isShow, setIsShow] = useState(false)

  const authState = useSelector((state: any) => state.auth?.user)

  return (
    <div className={cx('profile-navbar')}>
      <div className={cx('profile-info')}>
        <div className={cx('profile-avatar')}>
          <img src={authState?.userAvatar?.url || images.noImage} alt="" />
        </div>
        <div className={cx('profile-username')}>
          <div className={cx('profile-name')}>{authState?.userName}</div>
          <Link to={config.routes.profile} className={cx('profile-edit')}>
            <FaPen />
            Sửa hồ sơ
          </Link>
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
              <Link to={config.routes.verifyEmail}>Xác thực email</Link>
            </li>
            <li className={cx('profile-item')}>
              <Link to="">Đổi mật khẩu</Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  )
}

export default Profile
