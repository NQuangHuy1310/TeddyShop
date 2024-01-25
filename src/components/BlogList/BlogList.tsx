import classNames from 'classnames/bind'

import styles from './BlogList.module.scss'
import BlogItem from '../BlogItem'
import Button from '../Button'
import { useState } from 'react'

const cx = classNames.bind(styles)

interface blogListProps {
  limit: number
  data?: unknown[]
  isShowCategory?: boolean
  isShowMore?: boolean
  categories?: string[]
}

const BlogList = (props: blogListProps) => {
  const { isShowCategory, isShowMore, categories } = props

  const [categoryIndex, setCategoryIndex] = useState<number>(0)
  const [category, setCategory] = useState<string>('')

  const handleChangeButton = (category: string, index: number) => {
    setCategoryIndex(index)
    setCategory(category)
  }

  return (
    <>
      {isShowCategory && (
        <div className={cx('blog-categories')}>
          {categories ? (
            categories?.map((category, index) => {
              return (
                <Button
                  category
                  outline={categoryIndex === index}
                  key={index}
                  onClick={() => handleChangeButton(category, index)}
                >
                  {category}
                </Button>
              )
            })
          ) : (
            <>
              <Button category outline>
                Xem tất cả
              </Button>
              <Button category>Công nghệ</Button>
              <Button category>Kiến thức & Phần mềm</Button>
              <Button category>Sử dụng và bảo dưỡng</Button>
              <Button category>Tin tức và xu hướng</Button>
            </>
          )}
        </div>
      )}

      <div className={cx('blog-list')}>
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>

      {isShowMore && (
        <Button outline small className={cx('blog-view-all')}>
          Xem tất cả
        </Button>
      )}
    </>
  )
}

export default BlogList
