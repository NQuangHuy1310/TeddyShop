import classNames from 'classnames/bind'
import { Link, useLocation } from 'react-router-dom'

import styles from './BlogPost.module.scss'
import BlogList from '~/components/BlogList'
import Heading from '~/components/Heading'
import images from '~/assets'
import Socials from '~/components/Socials'
import PostCategory from '~/components/PostCategory'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getBlogById, getBlogs, resetState } from '~/features/blog/blogSlice'
import { blogModel } from '~/models'
import moment from 'moment'
import { FaRegEye, FaRegHeart } from 'react-icons/fa'

const cx = classNames.bind(styles)

const BlogPost = () => {
  const dispatch = useDispatch()
  const location = useLocation()

  const blogId = location.pathname.split('/')[2]

  useEffect(() => {
    if (blogId !== undefined) {
      dispatch<any>(getBlogById(blogId))
      dispatch<any>(getBlogs())
    } else {
      dispatch<any>(resetState())
    }
  }, [blogId, dispatch])

  const blogState = useSelector((state: any) => state.blog)
  const { blog, blogs } = blogState
  const blogDetail: blogModel = blog

  const formattedDate = 'Ngày tạo ' + moment(blogDetail?.createdTime).format('DD-MM-YYYY')

  return (
    <div className={cx('blog-post-wrapper')}>
      <section className={cx('post-header')}>
        <div className={cx('header-title')}>
          <div className={cx('header-info')}>
            <PostCategory category={blogDetail?.blogCategory?.name} subCategory={blogDetail.tag} />
            <h2 className={cx('header-name')}>{blogDetail.name}</h2>
            <div className={cx('header-created')}>
              By <strong>{blogDetail?.createdBy?.fullName}</strong>
            </div>
            <div className={cx('header-view')}>
              <div>
                <FaRegEye /> <strong>{blogDetail?.views}</strong>
              </div>
              <div>
                <FaRegHeart /> <strong>{blogDetail?.likes}</strong>
              </div>
            </div>
            <div className={cx('header-time')}>
              <p>{formattedDate}</p>
              <span>·</span>
              <p>5 phút đọc</p>
            </div>
          </div>
          <div className={cx('header-social')}>
            <p>Chia sẻ bài viết</p>
            <Socials />
          </div>
        </div>
        <div className={cx('post-image')}>
          <img src={blogDetail?.thumbnail?.url || images.placeholderImageBlog} alt="" />
        </div>
      </section>

      <section className={cx('post-content')}>
        <div className={cx('post-top')}>
          <div className={cx('post-title')}>
            <PostCategory category={blogDetail?.blogCategory?.name} subCategory={blogDetail.tag} />
            <Socials />
          </div>
          <div className={cx('post-text')} dangerouslySetInnerHTML={{ __html: blogDetail.content }}></div>
          <div className={cx('post-social')}>
            <p>Chia sẻ bài viết</p>
            <Socials />
          </div>
          <div className={cx('post-tags')}>
            <div className={cx('tag')}>
              <Link to="">{blogDetail.tag}</Link>
            </div>
          </div>
        </div>

        {/* <div className={cx('post-author')}>
          <div className={cx('author-avatar')}>
            <img src={images.placeholderImageBlog} alt="" />
          </div>
          <div className={cx('author-info')}>
            <div className={cx('author-name')}>Nguyễn Quang Huy</div>
            <div className={cx('author-desc')}>
              Nguyễn Quang Huy là một nhà văn tự do, người sáng lập ra trang web này. Anh ấy là một người đam mê về công
              nghệ và thích viết về nó.
            </div>
          </div>
        </div> */}
      </section>

      <section className={cx('post-recommendation')}>
        <Heading
          heading="Khám phá tuyển tập bài viết khác của chúng tôi"
          desc="Tại đây, bạn sẽ tìm thấy một tuyển tập đa dạng và phong phú của các bài viết chất lượng cao.
          Hãy dành thời gian để khám phá nội dung thú vị và hữu ích mà chúng tôi đã chuẩn bị cho bạn."
        />
        <BlogList data={blogs} limit={3} />
      </section>
    </div>
  )
}

export default BlogPost
