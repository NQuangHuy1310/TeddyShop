import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './BlogPost.module.scss'
import BlogList from '~/components/BlogList'
import Heading from '~/components/Heading'
import images from '~/assets'
import Socials from '~/components/Socials'
import PostCategory from '~/components/PostCategory'

const cx = classNames.bind(styles)

const categories = ['Bàn phím cơ', 'Bàn phím chơi game', 'Bàn phím văn phòng', 'Bàn phím custom']

const BlogPost = () => {
  return (
    <div className={cx('blog-post-wrapper')}>
      <section className={cx('post-header')}>
        <div className={cx('header-title')}>
          <div className={cx('header-info')}>
            <PostCategory category="Công nghệ" subCategory="Bàn phím cơ" />
            <h2 className={cx('header-name')}>Giải phóng sức mạnh của bàn phím cơ</h2>
            <div className={cx('header-created')}>
              By <strong>Nguyễn Quang Huy</strong>
            </div>
            <div className={cx('header-time')}>
              <p>Ngày 13 tháng 10 năm 2023</p>
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
          <img src={images.findKeyboard} alt="" />
        </div>
      </section>

      <section className={cx('post-content')}>
        <div className={cx('post-top')}>
          <div className={cx('post-title')}>
            <PostCategory category="Công nghệ" subCategory="Bàn phím cơ" />
            <Socials />
          </div>
          <div className={cx('post-text')}>Nội dung bài viết ở đây</div>
          <div className={cx('post-social')}>
            <p>Chia sẻ bài viết</p>
            <Socials />
          </div>
          <div className={cx('post-tags')}>
            <div className={cx('tag')}>
              <Link to="">Bàn phím cơ</Link>
            </div>
            <div className={cx('tag')}>
              <Link to="">Tin công nghệ</Link>
            </div>
            <div className={cx('tag')}>
              <Link to="">Kiến thức</Link>
            </div>
            <div className={cx('tag')}>
              <Link to="">Thông tin mới</Link>
            </div>
          </div>
        </div>

        <div className={cx('post-author')}>
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
        </div>
      </section>

      <section className={cx('post-recommendation')}>
        <Heading
          heading="Khám phá bàn phím tốt nhất"
          desc="Khám phá tuyển tập bàn phím được xếp hạng hàng đầu của chúng tôi."
        />
        <BlogList limit={6} isShowCategory categories={categories} />
      </section>
    </div>
  )
}

export default BlogPost
