import classNames from 'classnames/bind'
import { FaRegStar } from 'react-icons/fa'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { useEffect, useState } from 'react'

import styles from './ProductDetail.module.scss'
import images from '~/assets'
import Button from '~/components/Button'
import Heading from '~/components/Heading'
import Form from '~/components/Form'
import { DATA } from '~/constants'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { getProduct } from '~/features/product/productSlice'
import { Color, Option, ProductModel, Type } from '~/models'
import { formatPrice, parsePrice } from '~/utils'
import Tabs from '~/components/Tabs'
import { toast } from 'react-toastify'
import { addProductToCart, resetState } from '~/features/cart/cartSlice'

const cx = classNames.bind(styles)

const ProductDetail = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const productId = location.pathname.split('/')[2]

  // product detail data
  useEffect(() => {
    dispatch<any>(getProduct(productId))
  }, [productId, dispatch])

  const product: ProductModel = useSelector((state: any) => state.product?.product)
  const {
    price,
    name,
    images: productImages,
    description,
    warranty,
    attributes,
    colors,
    options,
    types,
    quantity
  } = product

  const [productImageMain, setProductImageMain] = useState<string | undefined>('')
  const productPrice = formatPrice(price)

  const [productCount, setProductCount] = useState<number>(1)
  const [limitProductCount, setLimitProductCount] = useState<number>(quantity)
  const [colorId, setColorId] = useState<string>('')
  const [optionId, setOptionId] = useState<string>('')
  const [switchId, setSwitchId] = useState<string>('')
  const [newPrice, setNewPrice] = useState<string>('')
  const [switchName, setSwitchName] = useState<string>('')
  const [optionName, setOptionName] = useState<string>('')
  const [colorName, setColorName] = useState<string>('')

  // handle change price product when change color, option, type
  useEffect(() => {
    if (attributes && attributes.length > 0) {
      const newPrice = attributes.find((item) => {
        if (colorId && switchId && optionId) {
          return item.color.code === colorId && item.switch.code === switchId && item.option?.code === optionId
        } else if (colorId && switchId) {
          return item.color.code === colorId && item.switch.code === switchId
        } else if (colorId && optionId) {
          return item.color.code === colorId && item.option?.code === optionId
        } else if (switchId && optionId) {
          return item.switch.code === switchId && item.option?.code === optionId
        } else if (colorId) {
          return item.color.code === colorId
        } else if (switchId) {
          return item.switch.code === switchId
        } else if (optionId) {
          return item.option?.code === optionId
        }
        return false
      })

      if (newPrice && newPrice.price) {
        setNewPrice(formatPrice(newPrice.price))
        setLimitProductCount(newPrice.quantity)
      } else {
        setNewPrice('')
      }
    } else {
      setNewPrice('')
    }
  }, [colorId, optionId, switchId, attributes])

  // handle product count
  const increaseProductCount = () => {
    if (productCount < limitProductCount) {
      setProductCount((prev) => prev + 1)
    } else {
      toast.warning('Đã đạt giới giạn số lượng sản phẩm.')
    }
  }

  const decreaseProductCount = () => {
    if (productCount > 1) {
      setProductCount((prev) => prev - 1)
    } else {
      toast.warning('Không thể giảm số lượng sản phẩm dưới 1.')
    }
  }

  useEffect(() => {
    if (productCount < 1) {
      setProductCount(1)
      toast.warning('Số lượng sản phẩm tối thiểu là 1.')
    }
    if (productCount > limitProductCount) {
      setProductCount(limitProductCount)
      toast.warning(`Số lượng sản phẩm tối đã là ${limitProductCount}`)
    }
  }, [productCount, limitProductCount])

  const handleAddProductToCart = () => {
    const newCardData = {
      productId,
      quantity: productCount,
      price: parsePrice(newPrice) || parsePrice(productPrice),
      color: { name: '', code: '' },
      option: { name: '', code: '' },
      switch: { name: '', code: '' }
    }

    if (attributes?.length > 0) {
      const { color, option, switch: switchAttr } = attributes[0]

      if (color) {
        if (!colorId) {
          toast.warning('Vui lòng chọn màu sắc.')
          return
        }
        newCardData.color = { name: colorName, code: colorId }
      }

      if (option) {
        if (!optionId) {
          toast.warning('Vui lòng chọn tùy chọn.')
          return
        }
        newCardData.option = { name: optionName, code: optionId }
      }

      if (switchAttr) {
        if (!switchId) {
          toast.warning('Vui lòng chọn switch.')
          return
        }
        newCardData.switch = { name: switchName, code: switchId }
      }
    }

    dispatch<any>(addProductToCart(newCardData))
  }

  // show message if add product to cart success
  const cartState = useSelector((state: any) => state.cart)
  const { addedCart, isSuccess, isError, isLoading } = cartState
  useEffect(() => {
    if (Object.keys(addedCart).length > 0) {
      toast.success('Thêm sản phẩm vào giỏ hàng thành công')
      dispatch<any>(resetState())
      navigate('/user/cart')
    }
  }, [addedCart, isSuccess, isError, isLoading, dispatch, navigate])

  return (
    <div className={cx('product-detail-wrapper')}>
      <section className={cx('product-detail')}>
        <div className={cx('product-img')}>
          <div className={cx('product-img-main')}>
            <img src={productImageMain || (productImages && productImages[0]?.url)} alt="product" />
          </div>
          <div className={cx('product-img-list')}>
            {productImages?.map((item, index) => {
              return (
                <div className={cx('product-img-item')} key={index} onClick={() => setProductImageMain(item?.url)}>
                  <img src={item.url} alt="product" />
                </div>
              )
            })}
          </div>
        </div>
        <div className={cx('product-info')}>
          <div className={cx('product-info-left')}>
            <h3 className={cx('product-name')}>{name}</h3>
            <Tabs desctiption={description} warranty={warranty} />
          </div>
          <div className={cx('product-info-right')}>
            <h4 className={cx('product-price')}>{newPrice || productPrice}</h4>
            <div className={cx('product-reviews')}>
              <div className={cx('starts')}>
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
              <p className={cx('stars-number')}>(4.5 stars)</p>
              <p className={cx('reviews-text')}>5 Reviews</p>
            </div>
            {colors && colors?.length > 0 && (
              <div>
                <p className={cx('product-text')}>Màu sắc: {colorName}</p>
                <div className={cx('product-colors')}>
                  {colors?.map((item: Color, index: number) => {
                    return (
                      <Button
                        key={index}
                        background={colorId === item.code ? true : false}
                        outline
                        className={cx('product-option')}
                        onClick={() => {
                          setColorId(item.code)
                          setColorName(item.name)
                        }}
                      >
                        {item.name}
                      </Button>
                    )
                  })}
                </div>
              </div>
            )}
            {options && options?.length > 0 && (
              <div>
                <p className={cx('product-text')}>Tùy chọn: {optionName}</p>
                <div className={cx('product-optios')}>
                  {options?.map((item: Option, index: number) => {
                    return (
                      <Button
                        key={index}
                        background={optionId === item.code ? true : false}
                        outline
                        className={cx('product-option')}
                        onClick={() => {
                          setOptionId(item.code)
                          setOptionName(item.name)
                        }}
                      >
                        {item.name}
                      </Button>
                    )
                  })}
                </div>
              </div>
            )}
            {types && types?.length > 0 && (
              <div>
                <p className={cx('product-text')}>Switch: {switchName}</p>
                <div className={cx('product-switch')}>
                  {types?.map((item: Type, index: number) => {
                    return (
                      <Button
                        key={index}
                        background={switchId === item.code ? true : false}
                        outline
                        className={cx('product-option')}
                        onClick={() => {
                          setSwitchId(item.code)
                          setSwitchName(item.name)
                        }}
                      >
                        {item.name}
                      </Button>
                    )
                  })}
                </div>
              </div>
            )}
            <div className={cx('product-quantity')}>
              <Button outline className={cx('product-btn')} onClick={decreaseProductCount}>
                -
              </Button>
              <input
                type="number"
                className={cx('product-input')}
                value={productCount}
                onChange={(event) => setProductCount(Number(event.target.value))}
              />
              <Button outline className={cx('product-btn')} onClick={increaseProductCount}>
                +
              </Button>
            </div>
            <div className={cx('product-action')}>
              <Button background large className={cx('product-add')} onClick={handleAddProductToCart}>
                Thêm vào giỏ hàng
              </Button>
              <Button outline large className={cx('product-buy')}>
                Mua ngay
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={cx('product-typing')}>
        <div className={cx('typing-container')}>
          <div className={cx('typing-img')}>
            <img src={images.keyboardUpgrade} alt="" />
          </div>
          <div className={cx('typing-content')}>
            <Heading
              heading="Trải nghiệm hiệu suất gõ phím tối ưu"
              desc="Giới thiệu bàn phím mới nhất của chúng tôi, được thiết kế với công nghệ tiên tiến và các tính năng có thể tùy chỉnh. Nâng cao năng suất và trải nghiệm đánh máy của bạn hơn bao giờ hết."
            />
            <div className={cx('typing-action')}>
              <Button background small to="">
                Tìm hiểu thêm
              </Button>
              <Button outline small to="">
                Đăng nhập
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={cx('product-performance')}>
        <div className={cx('performance-container')}>
          <div className={cx('performance-title')}>
            <Heading
              heading="Trải nghiệm hiệu suất gõ phím tối ưu"
              desc=" Bàn phím của chúng tôi có công nghệ tiên tiến giúp nâng cao trải nghiệm gõ phím của bạn. Với thiết kế tiện dụng và các tính năng có thể tùy chỉnh, đây là bàn phím hoàn hảo cho cả công việc và giải trí."
            />
          </div>
          <div className="">
            <div className={cx('performance-list')}>
              {DATA.PERFORMANCE_DATA?.map((item, index) => {
                return (
                  <div className={cx('performance-item')} key={index}>
                    <div className={cx('performance-icon')}>
                      <img src={images.icon} alt="" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                )
              })}
            </div>
            <div className={cx('performance-action')}>
              <Button outline small to="">
                Mua ngay
              </Button>
              <Button small to="" rightIcon={<MdKeyboardDoubleArrowRight />}>
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={cx('product-faq')}>
        <div className={cx('faq-container')}>
          <Heading
            heading="Các câu hỏi thường gặp"
            desc="Tìm câu trả lời cho các câu hỏi phổ biến về sản phẩm của chúng tôi dưới đây."
          />
          <div className={cx('faq-list')}>
            {DATA.FAQS_PRODUCTS?.map((item, index) => {
              return (
                <div className={cx('faq-item')} key={index}>
                  <div className={cx('faq-question')}>
                    <h3>{item.question}</h3>
                  </div>
                  <div className={cx('faq-answer')}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className={cx('faq-contact')}>
            <Heading
              heading="Bạn vẫn còn thắc mắc ?"
              desc="Hãy liên hệ với chúng tôi để được giải đáp những thắc mắc và được hỗ trợ thêm"
            />
            <Button outline large>
              Liên hệ
            </Button>
          </div>
        </div>
      </section>

      <section className={cx('product-checkout')}>
        <div className={cx('checkout-container')}>
          <Heading
            heading="Thêm vào giỏ hàng hoặc thanh toán"
            desc="Sở hữu bàn phím tốt nhất cho nhu cầu gõ phím của bạn. Mua sắm ngay bây giờ!"
          />
          <div className={cx('checkout-action')}>
            <Button outline large>
              Thêm vào giỏ hàng
            </Button>
            <Button background large>
              Thanh toán
            </Button>
          </div>
        </div>
      </section>

      <section className={cx('product-order')}>
        <div className={cx('order-container')}>
          <Form />
          <div className={cx('order-gift')}>
            <img src={images.gifts} alt="Gifts" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
