import classNames from 'classnames/bind'
import styles from './Purchase.module.scss'
import Breadcrumb from '~/components/Breadcrumb'
import images from '~/assets'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { cancelOrderById, getOrderByUserId } from '~/features/order/orderSlide'
import { cancelOrder, orderItemModal, orderModal } from '~/models/order'
import { formatPrice } from '~/utils'
import { Link } from 'react-router-dom'
import config from '~/config'
import Button from '~/components/Button'
import { useState } from 'react'
import { Modal } from 'antd'
import moment from 'moment'
import { toast } from 'react-toastify'

const cx = classNames.bind(styles)

const Purchase = () => {
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const [orderId, setOrderId] = useState<string>('')
  const hideModal = () => {
    setOpen(false)
  }

  useEffect(() => {
    dispatch<any>(getOrderByUserId())
  }, [dispatch])

  const orderState = useSelector((state: any) => state.order?.orders)

  const cancelOrder = (orderId: string) => {
    setOpen(true)
    setOrderId(orderId)
  }

  const deleteOrder = () => {
    setOpen(false)
    const cancelData: cancelOrder = {
      orderId: orderId,
      cancelDate: moment().toDate()
    }
    if (!cancelData) {
      toast.error('Có lỗi vui lòng thử lại!')
      return
    }
    dispatch<any>(cancelOrderById(cancelData))
    setTimeout(() => {
      dispatch<any>(getOrderByUserId())
    }, 1000)
  }

  return (
    <div className={cx('purchase-wrapper')}>
      <Breadcrumb breadcrumbData={[{ pageName: 'Đơn hàng của tôi' }]} />
      <div className={cx('purchase-products')}>
        {orderState &&
          orderState?.length > 0 &&
          orderState?.map((order: orderModal, index: number) => {
            return (
              <div className={cx('purchase-product')} key={index}>
                <div className={cx('product-header')}>
                  <div className="">
                    <h3>Teddyshop.vn</h3>
                    <div className={cx('product-status')}>Trạng thái đơn hàng: {order.orderStatus}</div>
                    <div className={cx('product-status')}>Mã đơn hàng: {order.orderId}</div>
                  </div>
                  {order.orderStatus === 'Chờ xác nhận' && (
                    <div className="">
                      <Button small background onClick={() => cancelOrder(order._id)}>
                        Hủy đơn hàng
                      </Button>
                    </div>
                  )}
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
                            Phân loại hàng: {item.color?.name && item?.color?.name} -{' '}
                            {item.switch?.name && item?.switch?.name}
                            {item.option?.name && item?.option?.name}
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
        {orderState.length === 0 && (
          <div className={cx('purchase-no-data')}>
            <img src={images.noProduct} alt="Bạn chưa có đơn hàng" />
            <h3>
              Bạn chưa có đơn hàng nào, ấn <Link to={config.routes.products}>vào đây</Link> để tiếp tục mua sắm !
            </h3>
          </div>
        )}

        <Modal
          title="Xác nhận hủy đơn hàng"
          open={open}
          onOk={deleteOrder}
          onCancel={hideModal}
          okText="Hủy đơn hàng"
          cancelText="Hủy"
        >
          <p>Bạn có chắc chắn muốn hủy đơn hàng này không?</p>
          <p>Hành động này sẽ xóa toàn bộ thông tin liên quan đến đơn hàng và không thể khôi phục được.</p>
          <p>Xin hãy cân nhắc kỹ trước khi tiếp tục.</p>
        </Modal>
      </div>
    </div>
  )
}

export default Purchase
