import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

import styles from './PostCategory.module.scss'

const cx = classNames.bind(styles)

interface categoryProps {
  category: string
  subCategory: string
}

const PostCategory = (props: categoryProps) => {
  const { category, subCategory } = props

  return (
    <div className={cx('post-category')}>
      <Link to="">{category}</Link>
      <span>
        <MdOutlineKeyboardArrowRight />
      </span>
      <Link to="">{subCategory}</Link>
    </div>
  )
}

export default PostCategory
