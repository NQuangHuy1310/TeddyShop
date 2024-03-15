import classNames from 'classnames/bind'
import styles from './Form.module.scss'
import Heading from '../Heading'
import Button from '../Button'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { createFeedback } from '~/features/feedback/feedbackSlide'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const schema = Yup.object({
  fullName: Yup.string().required('Vui lòng nhập họ tên của bạn'),
  email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email của bạn'),
  content: Yup.string()
})

const cx = classNames.bind(styles)
interface formProps {
  heading?: string
  desc?: string
}

const Form = (props: formProps) => {
  const { heading, desc } = props
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      content: ''
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch<any>(createFeedback(values))
      formik.resetForm()
    }
  })

  const feedbackState = useSelector((state: any) => state.feedback)
  const { isSuccess, isLoading, isError, createdFeedback } = feedbackState
  useEffect(() => {
    if (Object.keys(createdFeedback).length > 0 && isSuccess) {
      toast.success('Chúng tôi đã nhận được thông tin của bạn!')
    }
    if (isError) {
      toast.error('Có lỗi vui lòng thử lại!')
    }
  }, [isSuccess, isLoading, isError, createdFeedback])

  return (
    <form className={cx('form')} onSubmit={formik.handleSubmit}>
      <Heading
        heading={heading || 'Để lại thông tin liên lạc'}
        desc={desc || 'Điền vào những thông tin của bạn để đặt hàng và nhận những phần quà giá trị của chúng tôi.'}
      />
      <div className={cx('form-inputs')}>
        <div className="">
          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            value={formik.values.fullName}
            onChange={formik.handleChange('fullName')}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className="text-error">{formik.errors.fullName}</div>
          ) : null}
        </div>
        <div className="">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange('email')}
          />
          {formik.touched.email && formik.errors.email ? <div className="text-error">{formik.errors.email}</div> : null}
        </div>
        <div className="">
          <textarea placeholder="Ghi chú" value={formik.values.content} onChange={formik.handleChange('content')} />
        </div>
      </div>
      <div className={cx('from-action')}>
        <Button background large type="submit">
          Đăng ký
        </Button>
      </div>
    </form>
  )
}

export default Form
