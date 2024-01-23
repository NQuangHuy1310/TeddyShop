import classNames from 'classnames/bind'

import styles from './Blogs.module.scss'
import Heading from '~/components/Heading'
import Button from '~/components/Button'
import BlogItem from '~/components/BlogItem'
import images from '~/assets'

const cx = classNames.bind(styles)

const Blogs = () => {
  return (
    <div className={cx('blog-wrapper')}>
      <section className={cx('blog-section')}>
        <Heading
          heading="Khám phá các bài viết nổi bật của chúng tôi"
          desc="Các bài viết luôn được cập nhật một cách nhanh chóng và chính xác."
        />
        <div className={cx('blog-categories')}>
          <Button category outline>
            Xem tất cả
          </Button>
          <Button category>Công nghệ</Button>
          <Button category>Kiến thức & Phần mềm</Button>
          <Button category>Sử dụng và bảo dưỡng</Button>
          <Button category>Tin tức và xu hướng</Button>
        </div>
        <div className={cx('blog-list')}>
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </div>
      </section>

      <section className={cx('blog-feature')}>
        <Heading
          heading="Khám phá bài viết mới nhất của chúng tôi"
          desc="Cập nhật thông tin với các bài viết mới nhất của chúng tôi."
        />
        <div className={cx('blog-list')}>
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </div>
        <Button outline small className={cx('blog-view-all')}>
          Xem tất cả
        </Button>
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
