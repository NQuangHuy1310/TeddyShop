import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import type { TableColumnsType } from 'antd'
import classNames from 'classnames/bind'
import styles from './Cart.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductInCart, getCartByUser } from '~/features/cart/cartSlice'
import Button from '~/components/Button'
import { Link } from 'react-router-dom'
import { formatPrice } from '~/utils'
import Breadcrumb from '~/components/Breadcrumb'
const cx = classNames.bind(styles)

interface DataType {
  key: React.Key
  name: string
  quantity: number
  color: string
  price: number | string
  total: number | string
  action: React.ReactNode
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Tên sản phẩm',
    dataIndex: 'name',
    render: (text: string, record: DataType) => <Link to={`/product/${record.key}`}>{text}</Link>
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
    title: 'Giá',
    dataIndex: 'price'
  },
  {
    title: 'Thành tiền',
    dataIndex: 'total'
  },
  {
    title: 'Xóa',
    dataIndex: 'action'
  }
]

const Cart: React.FC = () => {
  const dispatch = useDispatch()
  const [cartId, setCartId] = useState<string>('')

  useEffect(() => {
    dispatch<any>(getCartByUser())
  }, [dispatch])

  useEffect(() => {
    if (cartId) {
      dispatch<any>(deleteProductInCart(cartId))
      setTimeout(() => {
        dispatch<any>(getCartByUser())
      }, 1000)
    }
  }, [cartId, dispatch])

  const cartState = useSelector((state: any) => state.cart?.carts)
  const data: DataType[] = []

  let totalPrice = 0

  for (let i = 0; i < cartState?.length; i++) {
    totalPrice += cartState[i].totalPrice
    data.push({
      key: cartState[i]._id,
      name: cartState[i].productId?.name,
      quantity: cartState[i].quantity,
      color: cartState[i]?.color?.name,
      price: formatPrice(cartState[i]?.price),
      total: formatPrice(cartState[i]?.totalPrice),
      action: (
        <Button primary small onClick={() => setCartId(cartState[i]._id)}>
          Xóa
        </Button>
      )
    })
  }

  return (
    <div className="">
      <Breadcrumb breadcrumbData={[{ pageName: 'Giỏ hàng' }]} />
      <section className={cx('cart-wrapper')}>
        <div className={cx('cart-header')}>
          <h2>Teddy Shop | Giỏ hàng của tôi</h2>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          className={cx('cart-table')}
          locale={{
            emptyText: 'Bạn chưa có sản phẩm nào trong giỏ hàng'
          }}
        />
        <div className="">
          <div className={cx('total-price')}>
            <strong>Tổng tiền: {formatPrice(totalPrice)}</strong>
          </div>
          <Button large primary className={cx('cart-btn')}>
            Thanh toán
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Cart
