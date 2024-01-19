import classNames from 'classnames/bind'
import { RiArrowDropRightLine } from 'react-icons/ri'

import styles from './BlogHeader.module.scss'
import images from '~/assets'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

interface blogHeaderProps {
  data: {
    name: string
    blogs: {
      name: string
      desc: string
      link: string
      image: string
    }[]
  }
}

const BlogHeader = (props: blogHeaderProps) => {
  const { name, blogs } = props.data

  return (
    <>
      <h4 className={cx('mega-heading')}>{name}</h4>
      <div className={cx('blog-list')}>
        {blogs &&
          blogs.length > 0 &&
          blogs.map((blog, index) => {
            return (
              <div className={cx('blog-item')} key={index}>
                <div className={cx('blog-img')}>
                  <img src={blog.image || images.placeholderImageBlog} alt="" />
                </div>
                <div className={cx('blog-content')}>
                  <h5 className={cx('blog-name')}>{blog.name}</h5>
                  <p className={cx('blog-desc')}>{blog.desc}</p>
                  <Link to={blog.link} className={cx('read-more')}>
                    Read More
                  </Link>
                </div>
              </div>
            )
          })}
      </div>
      <p className={cx('blog-all')}>
        Xem tất cả bài viết <RiArrowDropRightLine />
      </p>
    </>
  )
}

export default BlogHeader
