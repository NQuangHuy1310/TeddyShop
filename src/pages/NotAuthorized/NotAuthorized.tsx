import React from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const App: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Result
      status="403"
      title="403"
      subTitle="Xin lỗi, bạn cần đăng nhập để có thể truy cập trang này!"
      extra={
        <>
          <Button type="primary" onClick={() => navigate('/')}>
            Trở về trang chủ
          </Button>
          <Button type="primary" onClick={() => navigate('/login')}>
            Đăng nhập
          </Button>
        </>
      }
    />
  )
}

export default App
