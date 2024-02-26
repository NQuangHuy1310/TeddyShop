import classNames from 'classnames/bind'

import styles from './BlogList.module.scss'
import BlogItem from '../BlogItem'
import Button from '../Button'
import { useState } from 'react'
import { blogCategory, blogModel } from '~/models'
import Loading from '../Loading/Loading'

const cx = classNames.bind(styles)

interface blogListProps {
  limit?: number
  data?: blogModel[]
  isShowCategory?: boolean
  isShowMore?: boolean
  categories?: blogCategory[]
  // eslint-disable-next-line no-unused-vars
  onBlogChange?: (blogId: string) => void
}

const BlogList = (props: blogListProps) => {
  const { isShowCategory, isShowMore, categories, data, limit } = props
  const [blogId, setBlogId] = useState<string>('')

  const handleChangeCat = (catId: string) => {
    setBlogId(catId)
    if (props.onBlogChange) props.onBlogChange(catId)
  }

  return (
    <>
      {isShowCategory && (
        <div className={cx('blog-categories')}>
          <Button category outline={blogId ? false : true} onClick={() => handleChangeCat('')}>
            Xem tất cả
          </Button>
          {categories &&
            categories?.map((cat, index) => (
              <Button category outline={cat._id === blogId} key={index} onClick={() => handleChangeCat(cat._id)}>
                {cat.name}
              </Button>
            ))}
        </div>
      )}

      {data && data.length === 0 && (
        <div className={cx('blog-no-data')}>
          <p className={cx('blog-text')}>Đang cập nhật bài viết, bạn có thể quay lại sau!</p>
          <Loading tip="bài viết" title="Đang cập nhật" />
        </div>
      )}

      {limit ? (
        <div className={cx('blog-list')}>
          {data &&
            data.length > 0 &&
            data?.map((blog, index) => index < limit && <BlogItem key={blog._id} {...blog} />)}
        </div>
      ) : (
        <div className={cx('blog-list')}>
          {data && data.length > 0 && data?.map((blog) => <BlogItem key={blog._id} {...blog} />)}
        </div>
      )}

      {isShowMore && (
        <Button outline small className={cx('blog-view-all')}>
          Xem tất cả
        </Button>
      )}
    </>
  )
}

export default BlogList
