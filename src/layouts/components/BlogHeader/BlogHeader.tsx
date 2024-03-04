import classNames from 'classnames/bind'
import { RiArrowDropRightLine } from 'react-icons/ri'

import styles from './BlogHeader.module.scss'
import images from '~/assets'
import { Link } from 'react-router-dom'
import { blogModel } from '~/models'
import routes from '~/config/routes'
import config from '~/config'

const cx = classNames.bind(styles)

interface blogHeaderProps {
  data: {
    name: string
    blogs: blogModel[]
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
                  <img src={blog.thumbnail?.url || images.placeholderImageBlog} alt="" />
                </div>
                <div className={cx('blog-content')}>
                  <h5 className={cx('blog-name')}>{blog.name}</h5>
                  {/* <p className={cx('blog-desc')}>{blog.desc}</p> */}
                  <Link to={config.routes.blogPost.replace(':id', blog._id)} className={cx('read-more')}>
                    Đọc thêm
                  </Link>
                </div>
              </div>
            )
          })}
      </div>
      <Link to={routes.blog} className={cx('blog-all')}>
        Xem tất cả bài viết <RiArrowDropRightLine />
      </Link>
    </>
  )
}

export default BlogHeader
