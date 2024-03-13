import classNames from 'classnames/bind'
import styles from './Checkout.module.scss'
import Breadcrumb from '~/components/Breadcrumb'
import { Link } from 'react-router-dom'
import { Table } from 'antd'
import type { TableColumnsType } from 'antd'
import { useSelector } from 'react-redux'
import { addressData } from '~/models'
import config from '~/config'
import { useEffect, useState } from 'react'
import Button from '~/components/Button'
import { formatPrice, parsePrice } from '~/utils'

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
  const [paymentMethod, setPaymentMethod] = useState<string>('banking')

  const userAddress = useSelector((state: any) => state.auth?.user?.userAddress)
  const defaultAddress: addressData = userAddress?.find((address: addressData) => address.isDefault)

  const productOrder = useSelector((state: any) => state.product?.orderProduct)
  let totalPrice = 0
  const data: DataType[] = productOrder?.map((product: DataType) => {
    totalPrice += typeof product.total === 'string' ? parsePrice(product.total) : product.total
    return {
      key: product.key,
      name: product.name,
      quantity: product.quantity,
      color: product.color ? product.color : 'No Color',
      switch: product.switch ? product.switch : 'No switch',
      option: product.option ? product.color : 'No Option',
      price: product.price,
      total: product.total
    }
  })

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
                Bạn chưa có địa chỉ để nhận hàng, vui lòng cung cấp địa chỉ cho chúng tôi
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
                  <li>Chủ tài khảon: NGUYEN QUANG HUY</li>
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
          <Button primary large>
            Thanh toán
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Checkout
