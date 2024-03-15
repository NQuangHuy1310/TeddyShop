import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import type { TableColumnsType } from 'antd'
import classNames from 'classnames/bind'
import styles from './Cart.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductInCart, getCartByUser } from '~/features/cart/cartSlice'
import Button from '~/components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { formatPrice, parsePrice } from '~/utils'
import Breadcrumb from '~/components/Breadcrumb'
import { saveProductOrder } from '~/features/product/productSlice'
import { toast } from 'react-toastify'
const cx = classNames.bind(styles)

interface DataType {
  id: string
  key: React.Key
  name: string
  quantity: number
  color: string
  switch?: string
  option?: string
  price: number | string
  total: number | string
  action: React.ReactNode
  colorCode: number | string
  switchCode: number | string
  optionCode: React.ReactNode
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Tên sản phẩm',
    dataIndex: 'name',
    render: (text: string, record: DataType) => <Link to={`/product/${record.id}`}>{text}</Link>
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
    title: 'Loại switch',
    dataIndex: 'switch'
  },
  {
    title: 'Tùy chọn',
    dataIndex: 'option'
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
  const nagigate = useNavigate()
  const [cartId, setCartId] = useState<string>('')
  const [productData, setProductData] = useState<DataType[]>([])

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

  const data: DataType[] = cartState?.map((cartItem: any, index: number) => {
    const colorCode = cartItem?.color?.code ? cartItem?.color?.code : ''
    const switchCode = cartItem?.switch?.code ? cartItem?.switch?.code : ''
    const optionCode = cartItem?.option?.code ? cartItem?.option?.code : ''

    return {
      id: cartItem.productId._id,
      key: index + 1,
      name: cartItem.productId?.name,
      quantity: cartItem.quantity,
      color: cartItem?.color?.name ? cartItem?.color?.name : 'No color',
      switch: cartItem?.switch?.name ? cartItem?.switch.name : 'No switch',
      option: cartItem?.option?.option ? cartItem?.option?.option : '',
      price: formatPrice(cartItem?.price),
      total: formatPrice(cartItem?.totalPrice),
      action: (
        <Button primary small onClick={() => setCartId(cartItem._id)}>
          Xóa
        </Button>
      ),
      colorCode,
      switchCode,
      optionCode
    }
  })

  const rowSelection = {
    onChange: (_selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      setProductData(selectedRows)
    },
    getCheckboxProps: (record: DataType) => ({
      name: record.name
    })
  }

  const totalPrice = productData.reduce((acc, product) => {
    const price = typeof product.price === 'number' ? product.price.toString() : product.price
    return acc + parsePrice(price)
  }, 0)

  const handleAddProductToOrder = () => {
    if (productData.length === 0) {
      toast.warning('Vui lòng chọn sản phẩm để thanh toán.')
    } else {
      dispatch<any>(saveProductOrder(productData))
      nagigate('/checkout')
    }
  }

  return (
    <div className="">
      <Breadcrumb breadcrumbData={[{ pageName: 'Giỏ hàng' }]} />
      <section className={cx('cart-wrapper')}>
        <div className={cx('cart-header')}>
          <h2>Teddy Shop | Giỏ hàng của tôi</h2>
        </div>
        <Table
          rowSelection={{
            type: 'checkbox',
            ...rowSelection
          }}
          columns={columns}
          dataSource={data}
          className={cx('cart-table')}
          locale={{
            emptyText: 'Bạn chưa có sản phẩm nào trong giỏ hàng'
          }}
        />
        <div className="">
          <div className={cx('total-price')} style={{ marginBottom: '10px' }}>
            <strong>Tổng tiền: {formatPrice(totalPrice)}</strong>
          </div>
          <Button large primary className={cx('cart-btn')} onClick={handleAddProductToOrder}>
            Thanh toán
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Cart
