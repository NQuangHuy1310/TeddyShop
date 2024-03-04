/* eslint-disable no-console */
import classNames from 'classnames/bind'
import styles from './Profile.module.scss'
import Button from '~/components/Button'
import images from '~/assets'
import Dropzone from 'react-dropzone'
import { useSelector } from 'react-redux'

const cx = classNames.bind(styles)
const genderData = ['Nam', 'Nữ', 'Khác']

const Profile = () => {
  const authState = useSelector((state: any) => state.auth?.user)
  const { userName, userEmail, userAvatar, userPhone, userGender } = authState

  return (
    <div className={cx('profile-wrapper')}>
      <div className={cx('profile-heading')}>
        <h4 className={cx('profile-heading-title')}>Hồ Sơ Của Tôi</h4>
        <p className={cx('profile-heading-description')}>Quản lý hồ sơ để bảo mật tài khoản</p>
      </div>
      <div className={cx('profile-edit')}>
        <form className={cx('profile-info')}>
          <div className={cx('profile-item')}>
            <div className={cx('profile-item-title')}>Tên tài khoản</div>
            <input type="text" className={cx('profile-item-data')} value={userName} />
          </div>
          <div className={cx('profile-item')}>
            <div className={cx('profile-item-title')}>Email</div>
            <div className={cx('profile-item-data')}>{userEmail}</div>
          </div>
          <div className={cx('profile-item')}>
            <div className={cx('profile-item-title')}>Số điện thoại</div>
            {userPhone ? null : (
              <input type="text" className={cx('profile-item-data')} placeholder="Cập nhật số điện thoại" />
            )}
            {userPhone !== null && <div className={cx('profile-item-data')}>{userPhone}</div>}
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
                    checked={userGender ? userGender : null}
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
          <img src={userAvatar?.url || images.noImage} alt="avatar" />
          <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
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
