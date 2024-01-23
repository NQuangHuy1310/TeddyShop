import classNames from 'classnames/bind'
import { FaFacebookSquare, FaLinkedin, FaInstagram } from 'react-icons/fa'

import styles from './UserItem.module.scss'
import images from '~/assets'
import Button from '../Button'

const cx = classNames.bind(styles)

interface userItemProps {
  name: string
  role: string
  desc: string
  image: string
  social: {
    facebook: string
    linkedin: string
    instagram: string
  }
  isSupport?: boolean
}

const UserItem = (props: userItemProps) => {
  const { name, role, desc, social, isSupport, image } = props

  return (
    <div className={cx(isSupport ? 'user-support' : 'user-item')}>
      <div className={cx(isSupport ? 'support-avatar' : 'user-avatar')}>
        <img src={image || images.productDefault} alt="" />
      </div>
      <div className={cx('user-info')}>
        <div className="">
          <h5 className={cx('user-name')}>{name}</h5>
          <h5 className={cx('user-role')}>{role}</h5>
          <h5 className={cx('user-desc')}>{desc}</h5>
        </div>
        <div className={cx('user-social')}>
          <Button href={social?.facebook}>
            <FaFacebookSquare />
          </Button>
          <Button href={social?.linkedin}>
            <FaLinkedin />
          </Button>
          <Button href={social?.instagram}>
            <FaInstagram />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UserItem
