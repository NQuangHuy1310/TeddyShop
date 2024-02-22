import classNames from 'classnames/bind'
import styles from './Register.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import routes from '~/config/routes'
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa'
import Button from '~/components/Button'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '~/feature/auth/authSlice'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const schema = Yup.object().shape({
  fullName: Yup.string().required('Vui lòng nhập họ và tên của bạn'),
  email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email của bạn'),
  password: Yup.string().required('Vui lòng nhập mật khẩu của bạn'),
  cfPassword: Yup.string()
    .required('Vui lòng nhập lại mật khẩu của bạn')
    .oneOf([Yup.ref('password')], 'Mật khẩu không khớp')
    .nullable()
})

const cx = classNames.bind(styles)

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userState = useSelector((state: any) => state.auth)
  const { isError, isLoading, isSuccess, message } = userState
  useEffect(() => {
    if (isError && message) {
      toast.warning(message)
    }
    if (isSuccess) {
      toast.success('Đăng ký tài khoản thành công')
      navigate(routes.login)
    }
  }, [isError, isLoading, isSuccess, message, navigate])

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      cfPassword: ''
    },
    validationSchema: schema,
    onSubmit: (values) => {
      const userData = { email: values.email, fullName: values.fullName, password: values.password }
      dispatch<any>(registerUser(userData))
    }
  })

  return (
    <div className={cx('register-section')}>
      <form className={cx('register-form')} onSubmit={formik.handleSubmit}>
        <div className="">
          <h2 className={cx('form-heading')}>Đăng ký tài khoản</h2>
          <p className={cx('form-title')}>
            Bạn đã có tài khoản ? <Link to={routes.login}>Đăng nhập</Link>
          </p>
        </div>
        <div className={cx('form-methods')}>
          <div className={cx('form-method')}>
            <FaFacebook className={cx('from-icon')} />
          </div>
          <div className={cx('form-method')}>
            <FaGoogle className={cx('from-icon')} />
          </div>
          <div className={cx('form-method')}>
            <FaGithub className={cx('from-icon')} />
          </div>
        </div>
        <div className={cx('form-text')}>hoặc đăng nhập với email</div>
        <div className={cx('form-list')}>
          <div className={cx('form-group')}>
            <label htmlFor="fullName">Họ và tên</label>
            <input
              type="text"
              id="fullName"
              placeholder="Nhập họ và tên của bạn của bạn..."
              value={formik.values.fullName}
              onChange={formik.handleChange('fullName')}
              onBlur={formik.handleBlur('fullName')}
            />

            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="text-error">{formik.errors.fullName}</div>
            ) : null}
          </div>

          <div className={cx('form-group')}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Nhập email của bạn..."
              value={formik.values.email}
              onChange={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
            />

            {formik.touched.email && formik.errors.email ? (
              <div className="text-error">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className={cx('form-group')}>
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              placeholder="Nhập mật khẩu của bạn..."
              value={formik.values.password}
              onChange={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
            />

            {formik.touched.password && formik.errors.password ? (
              <div className="text-error">{formik.errors.password}</div>
            ) : null}
          </div>

          <div className={cx('form-group')}>
            <label htmlFor="cfPassword">Nhập lại mật khẩu</label>
            <input
              type="password"
              id="cfPassword"
              placeholder="Nhập lại mật khẩu của bạn..."
              value={formik.values.cfPassword}
              onChange={formik.handleChange('cfPassword')}
              onBlur={formik.handleBlur('cfPassword')}
            />
            {formik.touched.cfPassword && formik.errors.cfPassword ? (
              <div className="text-error">{formik.errors.cfPassword}</div>
            ) : null}
          </div>
        </div>
        <Link to="" className={cx('form-forgot-password')}>
          Quên mật khẩu
        </Link>
        <Button type="submit" primary className={cx('form-btn')}>
          Đăng ký
        </Button>
      </form>
    </div>
  )
}

export default Register
