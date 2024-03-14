import React from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const NotFound: React.FC = () => {
  const navigate = useNavigate()
  const backToHome = () => {
    navigate('/')
  }

  return (
    <div>
      <Result
        style={{ width: '800px', margin: '0 auto' }}
        status="404"
        title={<h1 style={{ fontSize: '24px' }}>Trang bạn đang tìm kiếm không tồn tại</h1>}
        subTitle={
          <p style={{ fontSize: '18px' }}>
            Rất tiếc, nhưng trang bạn đang cố gắng truy cập không tồn tại trong hệ thống của chúng tôi. Vui lòng kiểm
            tra lại đường dẫn và thử lại.
          </p>
        }
        extra={
          <Button type="primary" onClick={backToHome}>
            Trở về trang chủ
          </Button>
        }
      />
    </div>
  )
}

export default NotFound
