import classNames from 'classnames/bind'
import styles from './Purchase.module.scss'
import Breadcrumb from '~/components/Breadcrumb'
import images from '~/assets'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getOrderByUserId } from '~/features/order/orderSlide'
import { orderItemModal, orderModal } from '~/models/order'
import { formatPrice } from '~/utils'
import { Link } from 'react-router-dom'
import config from '~/config'

const cx = classNames.bind(styles)

const Purchase = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch<any>(getOrderByUserId())
  }, [dispatch])

  const orderState = useSelector((state: any) => state.order?.orders)

  return (
    <div className={cx('purchase-wrapper')}>
      <Breadcrumb breadcrumbData={[{ pageName: 'Đơn hàng của tôi' }]} />
      <div className={cx('purchase-products')}>
        {orderState &&
          orderState.length > 0 &&
          orderState.map((order: orderModal, index: number) => {
            return (
              <div className={cx('purchase-product')} key={index}>
                <div className={cx('product-header')}>
                  <h3>Teddyshop.vn</h3>
                  <div className={cx('product-status')}>Trạng thái đơn hàng: Chờ xác nhận</div>
                  <div className={cx('product-status')}>Mã đơn hàng: {order.orderId}</div>
                </div>
                <div className={cx('product-info')}>
                  {order.orderItems?.map((item: orderItemModal, index) => {
                    return (
                      <div className={cx('product-top')} key={index}>
                        <Link
                          to={config.routes.product.replace(':id', item.product._id)}
                          className={cx('product-image')}
                        >
                          <img src={item.product?.images[0]?.url || images.productDefault} />
                        </Link>
                        <div className="">
                          <div className={cx('product-name')}>{item.product.name}</div>
                          <div className={cx('product-attributes')}>
                            Phân loại hàng: {item.color && item?.color} - {item.switch && item?.switch}
                            {item.option && item?.option}
                          </div>
                          <div className={cx('product-quantity')}>Số lượng sản phẩm : {item.quantity}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className={cx('product-price')}>
                  <span>{formatPrice(order.totalPrice)}</span>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Purchase
