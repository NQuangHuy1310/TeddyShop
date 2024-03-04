import classNames from 'classnames/bind'
import { MdKeyboardArrowRight } from 'react-icons/md'

import styles from './BlogItem.module.scss'
import images from '~/assets'
import Button from '../Button'
import { blogModel } from '~/models'

const cx = classNames.bind(styles)

const BlogItem = (props: blogModel) => {
  const { _id: id, name, tag, blogCategory, thumbnail } = props

  return (
    <div className={cx('blog-item')}>
      <div className={cx('blog-img')}>
        <img src={thumbnail.url || images.productDefault} alt="Lợi ích của việc sử dụng bàn phím" />
      </div>
      <div className={cx('blog-content')}>
        <div className={cx('blog-info')}>
          <div className={cx('blog-category')}>{blogCategory?.name}</div>
          <div className={cx('blog-tag')}>{tag}</div>
        </div>
        <div className={cx('blog-title')}>
          <h4 className={cx('blog-name')}>{name}</h4>
        </div>
        <Button to={`/blog-post/${id}`} small className={cx('blog-more')} rightIcon={<MdKeyboardArrowRight />}>
          Đọc thêm
        </Button>
      </div>
    </div>
  )
}

export default BlogItem
