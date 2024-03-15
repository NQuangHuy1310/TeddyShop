import React from 'react'
import { Button, Result } from 'antd'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const App: React.FC = () => {
  const navgate = useNavigate()
  const orderState = useSelector((state: any) => state.order?.createdOrder)

  const { orderId } = orderState

  return (
    <Result
      status="success"
      title={<h1 style={{ fontSize: '24px' }}>Cảm ơn bạn đã đặt hàng của chúng tôi!</h1>}
      subTitle={
        <p style={{ fontSize: '18px' }}>
          Mã đơn hàng: {orderId}. Vui lòng chờ từ 3-5 phút để nhân viên gọi điện xác nhận đơn hàng!
        </p>
      }
      extra={[
        <Button type="primary" key="console" onClick={() => navgate('/user/purchase')}>
          Xem đơn hàng
        </Button>,
        <Button key="buy" onCanPlay={() => navgate('/')}>
          Tiếp tục mua sắm
        </Button>
      ]}
    />
  )
}

export default App
