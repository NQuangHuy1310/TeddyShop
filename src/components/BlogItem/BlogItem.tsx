import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'

import styles from './BlogItem.module.scss'
import images from '~/assets'
import Button from '../Button'
import config from '~/config'

const cx = classNames.bind(styles)

interface blogProps {
  image?: string
  category?: string
  name?: string
  desc?: string
}

const BlogItem = (props: blogProps) => {
  const { image, category, name, desc } = props

  return (
    <Link to={config.routes.blogPost} className={cx('blog-item')}>
      <div className={cx('blog-img')}>
        <img src={image || images.productDefault} alt="Lợi ích của việc sử dụng bàn phím" />
      </div>
      <div className={cx('blog-content')}>
        <div className={cx('blog-info')}>
          <div className={cx('blog-category')}>{category || 'Kiến thức & Phần mềm'}</div>
        </div>
        <div className={cx('blog-title')}>
          <h4 className={cx('blog-name')}>{name || 'Lợi ích của bàn phím cơ'}</h4>
          <p className={cx('blog-desc')}>
            {desc ||
              'Tìm hiểu lý do tại sao bàn phím cơ là yếu tố thay đổi cuộc chơi đối với những người đam mê gõ phím.'}
          </p>
        </div>
        <Button to="" className={cx('blog-more')} rightIcon={<MdKeyboardArrowRight />}>
          Đọc thêm
        </Button>
      </div>
    </Link>
  )
}

export default BlogItem
