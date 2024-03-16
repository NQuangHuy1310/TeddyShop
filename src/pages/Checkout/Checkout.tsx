import classNames from 'classnames/bind'
import styles from './Checkout.module.scss'
import Breadcrumb from '~/components/Breadcrumb'
import { Link, useNavigate } from 'react-router-dom'
import { Table } from 'antd'
import type { TableColumnsType } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { addressData } from '~/models'
import config from '~/config'
import { useEffect, useState } from 'react'
import Button from '~/components/Button'
import { formatPrice, parsePrice } from '~/utils'
import { orderData, shippingInfo } from '~/models/order'
import { toast } from 'react-toastify'
import { createOder } from '~/features/order/orderSlide'
import moment from 'moment'

const cx = classNames.bind(styles)

interface DataType {
  key: React.Key
  name: string
  quantity: number
  color: string
  switch: string
  option: string
  price: number | string
  total: number | string
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Tên sản phẩm',
    dataIndex: 'name'
  },
  {
    title: 'Số lượng',
    dataIndex: 'quantity'
  },
  {
    title: 'Màu sắc',
    dataIndex: 'color'
  },
  {
    title: 'Switch',
    dataIndex: 'switch'
  },
  {
    title: ' Lựa chọn',
    dataIndex: 'option'
  },
  {
    title: 'Giá',
    dataIndex: 'price'
  },
  {
    title: 'Thành tiền',
    dataIndex: 'total'
  }
]

const Checkout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [paymentMethod, setPaymentMethod] = useState<string>('banking')
  const [shippingInfo, setShippingInfo] = useState<shippingInfo>()
  const [orderItems, setOrderItems] = useState<DataType[]>()

  // get userId
  const userState = useSelector((state: any) => state.auth?.user)

  const userAddress = useSelector((state: any) => state.auth?.user?.userAddress)
  const defaultAddress: addressData = userAddress?.find((address: addressData) => address.isDefault)

  const productOrder = useSelector((state: any) => state.product?.orderProduct)

  let totalPrice = 0
  const data: DataType[] = []
  for (let i = 0; i < productOrder.length; i++) {
    totalPrice += typeof productOrder[i].total === 'string' ? parsePrice(productOrder[i].total) : productOrder[i].total
    data.push({
      key: productOrder[i].key,
      name: productOrder[i].name,
      quantity: productOrder[i].quantity,
      color: productOrder[i].color ? productOrder[i].color : 'No Color',
      switch: productOrder[i].switch ? productOrder[i].switch : 'No switch',
      option: productOrder[i].option ? productOrder[i].color : 'No Option',
      price: productOrder[i].price,
      total: productOrder[i].total
    })
  }

  useEffect(() => {
    setShippingInfo(defaultAddress)
    setOrderItems(productOrder)
  }, [defaultAddress, productOrder])

  const orderData: orderData = {
    shippingInfo: {
      fullName: shippingInfo?.fullName ? shippingInfo.fullName : '',
      phoneNumber: shippingInfo?.phoneNumber ? shippingInfo.phoneNumber : '',
      location: shippingInfo?.location ? shippingInfo.location : '',
      city: shippingInfo?.city ? shippingInfo.city : '',
      state: shippingInfo?.state
    },
    user: userState?.id,
    orderItems: orderItems?.map((order: any) => ({
      product: order.id,
      quantity: order.quantity,
      price: typeof order.price === 'number' ? order.price.toString() : parsePrice(order.price),
      color: {
        name: order?.color ? order?.color : '',
        code: order?.colorCode ? order?.colorCode : ''
      },
      switch: {
        name: order?.switch ? order?.switch : '',
        code: order?.switchCode ? order?.switchCode : ''
      },
      option: {
        name: order?.option ? order?.option : '',
        code: order?.optionCode ? order?.optionCode : ''
      },
      attributeId: order?.attributeId ? order?.attributeId : ''
    })),
    orderDate: moment().toDate(),
    totalPrice: totalPrice,
    paymentMethod: paymentMethod === 'banking' ? 'Thanh toán qua ví điện tử' : 'Thanh toán khi nhận hàng'
  }

  // khi người dùng mua hàng
  const handleOrderProduct = () => {
    if (
      orderData &&
      orderData.shippingInfo &&
      orderData.shippingInfo.fullName &&
      orderData.shippingInfo.phoneNumber &&
      orderData.shippingInfo.location &&
      orderData.shippingInfo.city &&
      orderData.user &&
      orderData.orderItems &&
      orderData.orderItems.length > 0 && // Kiểm tra có ít nhất 1 orderItem
      totalPrice &&
      paymentMethod
    ) {
      dispatch<any>(createOder(orderData))
    } else {
      // Một hoặc nhiều giá trị thiếu
      toast.warning('Vui lòng điền đầy đủ thông tin!')
    }
  }

  // orderState
  const orderState = useSelector((state: any) => state.order)
  const { isSuccess, isError, isLoading, createdOrder } = orderState
  useEffect(() => {
    if (createdOrder && Object.keys(createdOrder).length > 0 && isSuccess) {
      toast.success('Mua hàng thành công')
      setTimeout(() => {
        navigate('/result')
      }, 1000)
    }
    if (isError) {
      toast.error('Có lỗi, vui lòng thử lại sau !')
    }
  }, [isSuccess, isError, isLoading, createdOrder, dispatch, navigate])

  // bắt sự kiện khi người dùng chuẩn bị rời đi
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault()
      event.returnValue = 'Bạn có muốn rời khỏi màn hình này không ?'
    }

    const handleUnload = () => {
      // Xác nhận người dùng muốn rời khỏi trang
      const confirmationMessage = 'Bạn có chắc chắn muốn rời đi?'
      return (event: Event) => {
        event.preventDefault()
        return confirmationMessage
      }
    }

    // Bắt sự kiện trước khi người dùng rời khỏi trang
    window.addEventListener('beforeunload', handleBeforeUnload)
    // Bắt sự kiện khi người dùng rời khỏi trang
    window.addEventListener('unload', handleUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      window.removeEventListener('unload', handleUnload)
    }
  }, [])

  return (
    <div>
      <Breadcrumb breadcrumbData={[{ pageName: 'Thanh toán' }]} />
      <section className={cx('checkout-wrapper')}>
        <div className={cx('checkout-header')}>
          <h2>TeddyShop | Thanh toán</h2>
        </div>

        <div className={cx('checkout-address')}>
          <div className={cx('address-info')}>
            <h3>Địa chỉ nhận hàng</h3>
            {userAddress && userAddress.length > 0 ? (
              <>
                <div className={cx('address-name')}>
                  <strong>
                    {defaultAddress.fullName} - {defaultAddress.phoneNumber}
                  </strong>
                  {defaultAddress.location}
                </div>
                <div className={cx('address-default')}>Mặc định</div>
              </>
            ) : (
              <div className={cx('no-address')}>
                <p>Bạn chưa có địa chỉ để nhận hàng, vui lòng cung cấp địa chỉ cho chúng tôi </p>
                <Link to={config.routes.address}>tại đây!</Link>.
              </div>
            )}
          </div>
        </div>

        <div className={cx('checkout-product')}>
          <h3>Danh sách sản phẩm</h3>
          <Table
            columns={columns}
            dataSource={data}
            className={cx('checkout-table')}
            locale={{
              emptyText: 'Không có sản phẩm để thanh toán, vui lòng kiểm tra lại'
            }}
            pagination={false}
          />
          <p>
            Tổng giá: <strong>{formatPrice(totalPrice)}</strong>
          </p>
        </div>

        <div className={cx('checkout-payment')}>
          <h3>Phương thức thanh toán</h3>
          <div className={cx('payment-method')}>
            <Button small primary onClick={() => setPaymentMethod('banking')}>
              Chuyển khảo qua ngân hàng
            </Button>
            <Button small outline onClick={() => setPaymentMethod('COD')}>
              Thanh toán khi giao hàng (COD)
            </Button>
          </div>
          <div className={cx('payment-data')}>
            {paymentMethod === 'banking' && (
              <div className={cx('data')}>
                <p className={cx('payment-title')}>Quý khách vui lòng chuyển khoản toàn bộ vào tài khoản sau:</p>
                <ul>
                  <li>
                    STK: <strong>NGUYEN QUANG HUY</strong> hoặc <strong>0352223905</strong>
                  </li>
                  <li>Ngân hàng MB Bank</li>
                  <li>Chủ tài khoản: NGUYEN QUANG HUY</li>
                  <li>Nội dung chuyển khoản: Mã đơn hàng + SĐT</li>
                </ul>
                <p>Xin chân thành cảm ơn!</p>
              </div>
            )}
            {paymentMethod === 'COD' && (
              <div className={cx('data')}>
                <p className={cx('payment-title')}>Quý khách vui lòng thanh toán khi nhận hàng</p>
                <p>Với những sản phẩm yêu cầu bắt buộc đặt cọc, vui lòng không chọn tùy chọn này.</p>
              </div>
            )}
          </div>
        </div>
        <div className="">
          <Button primary large onClick={handleOrderProduct}>
            Thanh toán
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Checkout
