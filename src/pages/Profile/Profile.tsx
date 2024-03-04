import classNames from 'classnames/bind'
import styles from './Profile.module.scss'
import Button from '~/components/Button'
import images from '~/assets'
import Dropzone from 'react-dropzone'
import { useDispatch, useSelector } from 'react-redux'
import { uploadImage } from '~/features/upload/uploadSlice'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import { updateUserInfo } from '~/features/auth/authSlice'

const schema = Yup.object().shape({
  userName: Yup.string().required('Tên không được để trống'),
  userEmail: Yup.string().email('Email không hợp lệ').required('Email không được để trống'),
  userPhone: Yup.string()
    .matches(/^[0-9]+$/, 'Số điện thoại không hợp lệ')
    .min(10, 'Số điện thoại không hợp lệ')
    .required('Bạn nên cập nhật số điện thoại của mình'),
  userGender: Yup.string()
})

const cx = classNames.bind(styles)
const genderData = ['Nam', 'Nữ', 'Khác']

const Profile = () => {
  const dispatch = useDispatch()

  const authState = useSelector((state: any) => state.auth?.user)
  const imageState = useSelector((state: any) => state.upload?.images)
  const { userName, userEmail, userAvatar, userPhone, userGender } = authState

  useEffect(() => {
    formik.setFieldValue('avatar', { public_id: imageState[0]?.public_id, url: imageState[0]?.url })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageState])

  const formik = useFormik({
    validationSchema: schema,
    enableReinitialize: true,
    initialValues: {
      userName: userName || '',
      userEmail: userEmail || '',
      userPhone: userPhone || '',
      userGender: userGender || '',
      avatar: userAvatar || ''
    },
    onSubmit: (values) => {
      dispatch<any>(
        updateUserInfo({
          fullName: values.userName,
          phoneNumber: values.userPhone,
          gender: values.userGender,
          avatar: values.avatar
        })
      )
    }
  })

  return (
    <div className={cx('profile-wrapper')}>
      <div className={cx('profile-heading')}>
        <h4 className={cx('profile-heading-title')}>Hồ Sơ Của Tôi</h4>
        <p className={cx('profile-heading-description')}>Quản lý hồ sơ để bảo mật tài khoản</p>
      </div>
      <div className={cx('profile-edit')}>
        <form className={cx('profile-info')} onSubmit={formik.handleSubmit}>
          <div className={cx('profile-item')}>
            <div className={cx('profile-item-title')}>Tên tài khoản</div>
            <input
              type="text"
              className={cx('profile-item-data')}
              value={formik.values.userName}
              onChange={formik.handleChange('userName')}
            />
            {formik.touched.userName && typeof formik.errors.userName === 'string' ? (
              <div className="text-error">{formik.errors.userName}</div>
            ) : null}
          </div>
          <div className={cx('profile-item')}>
            <div className={cx('profile-item-title')}>Email</div>
            <div className={cx('profile-item-data')}>{formik.values.userEmail}</div>
          </div>
          <div className={cx('profile-item')}>
            <div className={cx('profile-item-title')}>Số điện thoại</div>
            {userPhone ? null : (
              <input
                type="text"
                className={cx('profile-item-data')}
                placeholder="Cập nhật số điện thoại"
                value={formik.values.userPhone}
                onChange={formik.handleChange('userPhone')}
              />
            )}
            {userPhone !== null && <div className={cx('profile-item-data')}>{userPhone}</div>}
            {formik.touched.userPhone && typeof formik.errors.userPhone === 'string' ? (
              <div className="text-error">{formik.errors.userPhone}</div>
            ) : null}
          </div>
          <div className={cx('profile-item')}>
            <div className={cx('profile-item-title')}>Giới tính</div>
            <div className={cx('profile-item-data')}>
              {genderData.map((gender) => (
                <label key={gender} className={cx('profile-gender-label')}>
                  <input
                    type="radio"
                    value={gender}
                    name="gender"
                    className={cx('profile-gender-input')}
                    onChange={formik.handleChange('userGender')}
                    checked={formik.values.userGender === gender}
                  />
                  {gender}
                </label>
              ))}
            </div>
          </div>
          <Button type="submit" small primary>
            Lưu thông tin
          </Button>
        </form>
        <div className={cx('profile-avatar')}>
          <img src={formik.values.avatar?.url || images.noImage} alt="avatar" />
          <Dropzone onDrop={(acceptedFiles) => dispatch<any>(uploadImage(acceptedFiles))}>
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps()}
                style={{ padding: '6px 10px', border: '1px solid #cacaca', borderRadius: '4px', cursor: 'pointer' }}
              >
                <input {...getInputProps()} />
                <p>Tải ảnh lên</p>
              </div>
            )}
          </Dropzone>
          <p>Dung lượng file tối đa 1MB</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
