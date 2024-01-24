import classNames from 'classnames/bind'

import styles from './Blogs.module.scss'
import Heading from '~/components/Heading'
import Button from '~/components/Button'
import images from '~/assets'
import BlogList from '~/components/BlogList'

const cx = classNames.bind(styles)

const categories = ['Xem tất cả', 'Công nghệ', 'Kiến thức & Phần mềm', 'Sử dụng và bảo dưỡng', 'Tin tức và xu hướng']

const Blogs = () => {
  return (
    <div className={cx('blog-wrapper')}>
      <section className={cx('blog-section')}>
        <Heading
          heading="Khám phá các bài viết nổi bật của chúng tôi"
          desc="Các bài viết luôn được cập nhật một cách nhanh chóng và chính xác."
        />
        <BlogList limit={6} isShowCategory categories={categories} />
      </section>

      <section className={cx('blog-feature')}>
        <Heading
          heading="Khám phá bài viết mới nhất của chúng tôi"
          desc="Cập nhật thông tin với các bài viết mới nhất của chúng tôi."
        />
        <BlogList limit={3} isShowMore />
      </section>

      <section className={cx('blog-newsletter')}>
        <div className={cx('newsletter-content')}>
          <Heading
            heading="Theo dõi bản tin của chúng tôi"
            desc="Luôn cập nhật các bài viết và tin tức mới nhất về bàn phím trên thị trường."
          />
          <div className={cx('newsletter-action')}>
            <input type="email" placeholder="Nhập email của bạn" />
            <Button small background>
              Tham gia ngay
            </Button>
          </div>
        </div>
        <div className={cx('newsletter-img')}>
          <img src={images.bestKeyboard1} alt="Bản tin" />
        </div>
      </section>
    </div>
  )
}

export default Blogs
