import classNames from 'classnames/bind'
import styles from './VerifyEmail.module.scss'
import { HiOutlineMailOpen } from 'react-icons/hi'
import Button from '~/components/Button'
import { useEffect, useState } from 'react'
import { Input, Modal } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { resetState, sendEmailCode, verifyEmail as verifyEmailCode } from '~/features/auth/authSlice'
import { toast } from 'react-toastify'
import { FaCheckCircle } from 'react-icons/fa'

const cx = classNames.bind(styles)

const VerifyEmail = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [verifyCode, setVerifyCode] = useState('')

  const handleOk = () => {
    setConfirmLoading(true)
    if (!verifyCode) {
      return
    } else {
      dispatch<any>(verifyEmailCode(verifyCode))
    }
    setTimeout(() => {
      setOpen(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const handleSendEmail = () => {
    dispatch<any>(sendEmailCode())
  }

  const handleVerifyEmail = () => {
    setOpen(true)
  }

  const authState = useSelector((state: any) => state.auth)
  const userData = useSelector((state: any) => state.auth?.user)
  const { isSuccess, emailSendSuccess, isError, isLoading, emailVerifySuccess } = authState
  const { emailVerified } = userData

  useEffect(() => {
    if (emailSendSuccess && isSuccess && !verifyCode) {
      toast.success(emailSendSuccess)
    }
    if (emailVerifySuccess && isSuccess && verifyCode) {
      toast.success(emailVerifySuccess)
      dispatch<any>(resetState())
    }
    if (isError) {
      toast.warning('Có lỗi vui lòng thử lại sau')
    }
  }, [emailSendSuccess, isError, isLoading, dispatch, isSuccess, verifyCode, emailVerifySuccess])

  return (
    <>
      {emailVerified ? (
        <div className={cx('verify-email-success')}>
          <div className={cx('verify-icon')}>
            <FaCheckCircle className={cx('icon')} />
          </div>
          <h3 className={cx('verify-heading')}>Xác minh email thành công!</h3>
          <p className={cx('verify-text')}>
            Email của bạn đã được xác minh trong vòng 24 giờ. Chúc mừng bạn đã trở thành thành viên của cộng đồng
            TeddyShop!
          </p>
        </div>
      ) : (
        <div className="">
          <section className={cx('verify-email-wrapper')}>
            <div className={cx('verify-email-content')}>
              <div className={cx('verify-icon')}>
                <HiOutlineMailOpen className={cx('icon')} />
              </div>
              <h3 className={cx('verify-heading')}>Kích hoạt tài khoản qua Email</h3>
              <p className={cx('verify-text')}>
                Để hoàn tất đăng ký, vui lòng kiểm tra hòm thư email và nhập mã xác thực đã được gửi tới địa chỉ email
                của bạn.
              </p>
              {isSuccess ? (
                <Button primary large onClick={handleVerifyEmail}>
                  Nhập mã xác thực
                </Button>
              ) : (
                <Button primary large onClick={handleSendEmail}>
                  Gửi mã xác thực
                </Button>
              )}
            </div>
          </section>
          <Modal
            title="Xác thực email của bạn"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            okText="Xác nhận"
            cancelText="Hủy"
          >
            <Input
              min={0}
              max={6}
              placeholder="Nhập mã xác thực"
              style={{ width: '100%', padding: '10px', margin: '15px 0' }}
              type="number"
              onChange={(event) => setVerifyCode(event?.target?.value)}
              value={verifyCode}
            />
          </Modal>
        </div>
      )}
    </>
  )
}

export default VerifyEmail
