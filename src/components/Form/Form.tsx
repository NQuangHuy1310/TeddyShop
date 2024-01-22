import classNames from 'classnames/bind'

import styles from './Form.module.scss'
import Heading from '../Heading'
import Button from '../Button'

const cx = classNames.bind(styles)

type Props = {}

const Form = (props: Props) => {
  return (
    <form className={cx('form')}>
      <Heading
        heading="Để lại thông tin liên lạc"
        desc="Điền vào những thông tin của bạn để đặt hàng và nhận những phần quà giá trị của chúng tôi."
      />
      <div className={cx('form-inputs')}>
        <input type="text" placeholder="Họ và tên" />
        <input type="number" placeholder="Số điện thoại" />
        <input type="address" placeholder="Địa chỉ" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Ghi chú" />
      </div>
      <div className={cx('from-action')}>
        <Button background large>
          Đăng ký
        </Button>
      </div>
    </form>
  )
}

export default Form
