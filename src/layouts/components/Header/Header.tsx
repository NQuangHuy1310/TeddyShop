import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { MdExpandMore } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'

import styles from './Header.module.scss'
import Button from '~/components/Button'
import MegaMenu from '~/components/MegaMenu'
import BlogHeader from '../BlogHeader'
import { useState } from 'react'
import config from '~/config'
import routes from '~/config/routes'
import { useSelector, useDispatch } from 'react-redux'
import images from '~/assets'
import { logoutUser } from '~/feature/auth/authSlice'

const cx = classNames.bind(styles)

const subCategoriesData = {
  name: 'Danh mục sản phẩm',
  items: [
    {
      name: 'Bàn phím',
      desc: 'Lựa chọn bàn phím của chúng tôi',
      link: ''
    },
    {
      name: 'Chuột',
      desc: 'Khám phá dòng chuột máy tính của chúng tôi',
      link: ''
    },
    {
      name: 'Tai nghe',
      desc: 'Khám phá bộ sưu tập tai nghe chơi game của chúng tôi',
      link: ''
    },
    {
      name: 'Phụ kiện',
      desc: 'Tìm phụ kiện hoàn hảo cho máy tính của bạn',
      link: ''
    }
  ]
}

const subBrandData = {
  name: 'Hãng sản xuất',
  items: [
    {
      name: 'Logitech',
      desc: 'Khám phá các sản phẩm mới nhẩt của Logitech',
      link: ''
    },
    {
      name: 'Rezer',
      desc: 'Khám phá cac thiết bị ngoại vi chơi game của Razer',
      link: ''
    },
    {
      name: 'Corsiar',
      desc: 'Kiểm tra thiết bị hiệu suốt cao của Corsair',
      link: ''
    },
    {
      name: 'SteelSeries',
      desc: 'Trải nghiệm công nghệ tiên tiến của SteelSeries',
      link: ''
    }
  ]
}

const blogHeaderData = {
  name: 'Bài viết nổi bật',
  blogs: [
    {
      name: 'The best',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      link: '',
      image: ''
    },
    {
      name: 'The best',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      link: '',
      image: ''
    }
  ]
}

const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false)
  const dispatch = useDispatch()

  const userState = useSelector((state: any) => state.auth)

  const { user } = userState

  const showOnMenu = () => {
    setMenuMobile(!menuMobile)
  }

  const handleLogoutUser = () => {
    dispatch<any>(logoutUser())
    location.reload()
  }

  return (
    <header className={cx('header')}>
      <div className={cx('header-inner')}>
        <div className={cx('header-navbar')}>
          <Link to="/" className={cx('header-logo')}>
            TeddyShop
          </Link>
          <ul className={cx('header-menu', menuMobile ? 'active' : '')}>
            <li className={cx('menu-item')}>
              <Link to={config.routes.products} className={cx('menu-link')}>
                Mua ngay
              </Link>
            </li>
            <li className={cx('menu-item')}>
              <Link to={config.routes.about} className={cx('menu-link')}>
                Giới thiệu
              </Link>
            </li>
            <li className={cx('menu-item')}>
              <Link to={config.routes.contact} className={cx('menu-link')}>
                Liên hệ
              </Link>
            </li>
            <li className={cx('menu-item')}>
              <Link to={config.routes.events} className={cx('menu-link')}>
                Sự kiện
              </Link>
            </li>
            <li className={cx('menu-item')}>
              <Link to={config.routes.blog} className={cx('menu-link')}>
                Bài viết
              </Link>
            </li>
            <li className={cx('menu-item', 'menu-item-has-children')}>
              <div className={cx('menu-link')}>
                Các sản phẩm
                <MdExpandMore />
                <div className={cx('mega-menu')}>
                  <div className={cx('mega-left')}>
                    <MegaMenu data={subCategoriesData} />
                    <MegaMenu data={subBrandData} />
                  </div>
                  <div className={cx('mega-right')}>
                    <BlogHeader data={blogHeaderData} />
                  </div>
                </div>
              </div>
            </li>
          </ul>

          {Object.keys(user).length > 0 ? (
            <div className={cx('header-auth')}>
              <div className={cx('header-auth-avatar')}>
                <img
                  src={Object.keys(user.userAvatar).length !== 0 ? user.userAvatar.url : images.noImage}
                  alt="avatar"
                />
              </div>
              <div className={cx('header-auth-name')}>{user.userName}</div>
              <ul className={cx('auth-menu')}>
                <li className={cx('auth-item')}>
                  <Link to="" className={cx('auth-link')}>
                    Tài khoản của tôi
                  </Link>
                </li>
                <li className={cx('auth-item')}>
                  <Link to="" className={cx('auth-link')}>
                    Giỏ hàng
                  </Link>
                </li>
                <li className={cx('auth-item')}>
                  <Link to="" className={cx('auth-link')}>
                    Đơn hàng
                  </Link>
                </li>
                <li className={cx('auth-item')}>
                  <Link to="" className={cx('auth-link')} onClick={handleLogoutUser}>
                    Đăng xuất
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className={cx('header-action')}>
              <Button outline small to={routes.register}>
                Đăng ký
              </Button>
              <Button background small to={routes.login}>
                Đăng nhập
              </Button>
            </div>
          )}

          <div className={cx('header-mobile')} onClick={showOnMenu}>
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
