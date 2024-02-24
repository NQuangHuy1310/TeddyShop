import { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Tab.module.scss'

const cx = classNames.bind(styles)

interface TabsProps {
  desctiption: string
  warranty: string
}

const tabs = ['Mô tả', 'Bảo hành', 'Đánh giá (0)']

const Tabs = (props: TabsProps) => {
  const { desctiption, warranty } = props

  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  return (
    <div className={cx('tabs-container')}>
      <div className={cx('tabs-header')}>
        {tabs.map((tab, index) => {
          return (
            <div
              className={cx('tab-item', { active: activeTab === index })}
              onClick={() => handleTabClick(index)}
              key={index}
            >
              {tab}
            </div>
          )
        })}
      </div>
      <div className={cx('tab-content')}>
        <div
          className={cx('tab-content-item', { active: activeTab === 0 })}
          dangerouslySetInnerHTML={{ __html: desctiption }}
        ></div>
        <div className={cx('tab-content-item', { active: activeTab === 1 })}>
          <p>
            Chúng tôi cam kết bảo hành sản phẩm mà quý khách hàng đã mua trong thời gian {warranty} kể từ ngày mua hàng.
          </p>
          <p>
            Trong thời gian bảo hành, chúng tôi sẽ chịu trách nhiệm và sửa chữa miễn phí các lỗi kỹ thuật hoặc hỏng hóc
            do lỗi sản xuất. Để yêu cầu bảo hành, quý khách hàng vui lòng cung cấp hóa đơn mua hàng hoặc thông tin đặt
            hàng của quý khách.
          </p>
          <p>Tuy nhiên, bảo hành không bao gồm các trường hợp sau đây:</p>
          <ul>
            <li>
              Sản phẩm bị hư hỏng do sử dụng không đúng theo hướng dẫn sử dụng hoặc lỗi do sự cố người dùng gây ra.
            </li>
            <li>
              Sản phẩm bị hư hỏng do tai nạn, rơi vỡ, va đập, nước vào sản phẩm hoặc các sự kiện bên ngoài khác không
              liên quan đến lỗi sản xuất.
            </li>
            <li>Sản phẩm bị hư hỏng do sử dụng phụ kiện không chính hãng hoặc không tương thích.</li>
            <li>
              Sản phẩm bị hư hỏng do sửa chữa, thay thế, can thiệp không được phép từ những người không được ủy quyền từ
              chúng tôi.
            </li>
            <li>Sản phẩm bị mất hoặc bị đánh cắp.</li>
          </ul>
        </div>
        <div className={cx('tab-content-item', { active: activeTab === 2 })}>Đánh giá sản phẩm ....</div>
      </div>
    </div>
  )
}

export default Tabs
