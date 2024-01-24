import classNames from 'classnames/bind'
import { FaFacebookSquare, FaInstagramSquare, FaLink, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import styles from './Socials.module.scss'

const cx = classNames.bind(styles)

interface Props {}

const Socials = (props: Props) => {
  return (
    <div className={cx('social-icons')}>
      <Link to="">
        <FaLink />
      </Link>
      <Link to="">
        <FaFacebookSquare />
      </Link>
      <Link to="">
        <FaInstagramSquare />
      </Link>
      <Link to="">
        <FaLinkedinIn />
      </Link>
    </div>
  )
}

export default Socials
