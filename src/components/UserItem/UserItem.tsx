import classNames from 'classnames/bind'
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa'

import styles from './UserItem.module.scss'
import images from '~/assets'
import Button from '../Button'
import { memberModal } from '~/models'

const cx = classNames.bind(styles)

interface UserItemProps extends memberModal {
  isSupport?: boolean
}

const UserItem = (props: UserItemProps) => {
  const { isSupport, fullName, position, description, images: meberImage, socialMedia } = props
  const textOverflow = description?.slice(0, 160) + '...'

  return (
    <div className={cx(isSupport ? 'user-support' : 'user-item')}>
      <div className={cx(isSupport ? 'support-avatar' : 'user-avatar')}>
        <img src={meberImage?.url || images.productDefault} alt="" />
      </div>
      <div className={cx('user-info')}>
        <div className="">
          <h5 className={cx('user-name')}>{fullName}</h5>
          <h5 className={cx('user-role')}>{position}</h5>
          <h5 className={cx('user-desc')} dangerouslySetInnerHTML={{ __html: textOverflow }}></h5>
        </div>
        <div className={cx('user-social')}>
          <Button href={socialMedia?.facebook}>
            <FaFacebookSquare className={cx('icon')} />
          </Button>
          <Button href={socialMedia?.twitter}>
            <FaTwitter className={cx('icon')} />
          </Button>
          <Button href={socialMedia?.instagram}>
            <FaInstagram className={cx('icon')} />
          </Button>
          {/* <Button href={socialMedia?.zalo}>
            <SiZalo className={cx('icon')} />
          </Button> */}
        </div>
      </div>
    </div>
  )
}

export default UserItem
