import classNames from 'classnames/bind'
import styles from './Blogs.module.scss'
import Heading from '~/components/Heading'
import Button from '~/components/Button'
import images from '~/assets'
import BlogList from '~/components/BlogList'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getBlogByCategory, getBlogs, getCategories } from '~/features/blog/blogSlice'
import { blogCategory } from '~/models'

const cx = classNames.bind(styles)

const Blogs = () => {
  const dispatch = useDispatch()
  const [blogId, setBlogId] = useState<string>('')

  useEffect(() => {
    if (blogId !== '') dispatch<any>(getBlogByCategory(blogId))
    else dispatch<any>(getBlogs())
  }, [dispatch, blogId])

  useEffect(() => {
    dispatch<any>(getCategories())
    dispatch<any>(getBlogs())
  }, [dispatch])

  const blogState = useSelector((state: any) => state.blog)
  const { blogCategories, blogs } = blogState

  const categories = blogCategories?.map((blogCat: blogCategory) => ({
    name: blogCat.name,
    _id: blogCat._id
  }))

  const onBlogChange = (id: string) => {
    setBlogId(id)
  }

  return (
    <div className={cx('blog-wrapper')}>
      <section className={cx('blog-section')}>
        <Heading
          heading="Khám phá các bài viết nổi bật của chúng tôi"
          desc="Các bài viết luôn được cập nhật một cách nhanh chóng và chính xác."
        />
        <BlogList limit={6} isShowCategory categories={categories} data={blogs} onBlogChange={onBlogChange} />
      </section>

      <section className={cx('blog-feature')}>
        <Heading
          heading="Khám phá bài viết mới nhất của chúng tôi"
          desc="Cập nhật thông tin với các bài viết mới nhất của chúng tôi."
        />
        <BlogList isShowMore data={blogs} limit={3} />
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
