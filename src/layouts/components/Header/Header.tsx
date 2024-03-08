import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { MdExpandMore } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'

import styles from './Header.module.scss'
import Button from '~/components/Button'
import MegaMenu from '~/components/MegaMenu'
import BlogHeader from '../BlogHeader'
import { useEffect, useState } from 'react'
import config from '~/config'
import routes from '~/config/routes'
import { useSelector, useDispatch } from 'react-redux'
import images from '~/assets'
import { logoutUser, resetState } from '~/features/auth/authSlice'
import { getBlogs } from '~/features/blog/blogSlice'
import { getBrands } from '~/features/brand/brandSlice'
import { brandModal } from '~/models/brand'
import { getProductCategories } from '~/features/product/productSlice'
import { productCatModal } from '~/models'
import { getMembers } from '~/features/member/memberSlice'

const cx = classNames.bind(styles)

const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch<any>(getBlogs())
    dispatch<any>(getBrands())
    dispatch<any>(getProductCategories())
    dispatch<any>(getMembers())
  }, [dispatch])

  const userState = useSelector((state: any) => state.auth)
  const blogState = useSelector((state: any) => state.blog?.blogs)?.slice(0, 2)
  const brandState = useSelector((state: any) => state.brand?.brands)?.slice(0, 4)
  const productCatState = useSelector((state: any) => state.product?.productCategories)?.slice(0, 4)

  const blogData = {
    name: 'Bài viết nổi bật',
    blogs: blogState
  }

  const brandData = {
    name: 'Hãng sản xuất',
    items: brandState?.map((brand: brandModal) => {
      return {
        id: brand._id,
        name: brand.name,
        link: config.routes.brandDetail.replace(':id', brand._id),
        desc: brand.slogan
      }
    })
  }

  const productCatData = {
    name: 'Danh mục sản phẩm',
    items: productCatState?.map((cat: productCatModal) => {
      return {
        id: cat._id,
        name: cat.name,
        link: '',
        desc: cat.slogan
      }
    })
  }

  const { user } = userState

  const showOnMenu = () => {
    setMenuMobile(!menuMobile)
  }

  const handleLogoutUser = () => {
    dispatch<any>(logoutUser())
    dispatch<any>(dispatch(resetState()))
  }

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const menuItem = document.querySelectorAll('.menu-item a')
    menuItem.forEach((item) => {
      item.addEventListener('click', () => {
        backToTop()
      })
    })
  }, [])

  return (
    <header className={cx('header')}>
      <div className={cx('header-inner')}>
        <div className={cx('header-navbar')}>
          <Link to="/" className={cx('header-logo')} onClick={backToTop}>
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
                    <MegaMenu data={brandData} />
                    <MegaMenu data={productCatData} />
                  </div>
                  <div className={cx('mega-right')}>
                    <BlogHeader data={blogData} />
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
                  <Link to={config.routes.profile} className={cx('auth-link')}>
                    Tài khoản của tôi
                  </Link>
                </li>
                <li className={cx('auth-item')}>
                  <Link to={config.routes.cart} className={cx('auth-link')}>
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
