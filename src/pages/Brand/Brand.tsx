import classNames from 'classnames/bind'
import styles from './Brand.module.scss'
import { AiTwotoneShop } from 'react-icons/ai'
import { CiViewList } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import Heading from '~/components/Heading'
import Product from '~/components/Product'
import { ProductModel } from '~/models'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { getBrand } from '~/features/brand/brandSlice'
import Loading from '~/components/Loading/Loading'
import images from '~/assets'

const cx = classNames.bind(styles)

const Brand = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const getBrandId: string = location.pathname.split('/')[2]

  useEffect(() => {
    if (getBrandId !== undefined) dispatch<any>(getBrand(getBrandId))
  }, [dispatch, getBrandId])

  const brandState = useSelector((state: any) => state.brand?.brand)
  const { name, description, products: productData, logo, slogan } = brandState ?? {}

  return (
    <div className={cx('brand-wrapper')}>
      <section className={cx('brand-info')}>
        <div className={cx('brand-leading')}>
          <div
            className={cx('brand-background')}
            style={{
              backgroundImage: 'url("https://down-bs-vn.img.susercontent.com/vn-11134210-7r98o-lr6ti70u334pa5_tn.webp")'
            }}
          ></div>
          <div className={cx('brand-content')}>
            <div className={cx('brand-logo')}>
              <img src={logo ? logo?.url : images.placeholderImageBlog} />
            </div>
            <div className="">
              <h3 className={cx('brand-name')}>{name}</h3>
              <p className={cx('brand-desc')} dangerouslySetInnerHTML={{ __html: description }}></p>
              <div className={cx('brand-action')}>
                <button className={cx('btn', 'brand-btn')}>
                  <AiTwotoneShop />
                  Mua sắm
                </button>
                <button className={cx('btn', 'brand-see-product')}>
                  <CiViewList />
                  Xem sản phẩm
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-products">
        <Heading heading="Sản phẩm nổi bật" desc={slogan} />

        {productData && productData?.length > 0 ? (
          <div className={cx('products')}>
            {productData?.map((product: ProductModel, index: number) => (
              <Product key={index} {...product} />
            ))}
          </div>
        ) : (
          <Loading tip="sản phẩm" />
        )}
      </section>
    </div>
  )
}

export default Brand
