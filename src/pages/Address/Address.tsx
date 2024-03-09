import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { Modal, Select, Input, Popconfirm } from 'antd'
import styles from './Address.module.scss'
import Button from '~/components/Button'
import { getDistrisOfCity, getVietnamCities, getWardsOfDistrict } from '~/features/GetAddress/AddressService'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { addNewAddress, changeAddressDefault, deleteAddress } from '~/features/auth/authSlice'
import { addressData } from '~/models'
import { QuestionCircleOutlined } from '@ant-design/icons'

const cx = classNames.bind(styles)
const { TextArea } = Input

const schema = Yup.object().shape({
  fullName: Yup.string().required('Tên không được để trống'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, 'Số điện thoại không hợp lệ')
    .min(10, 'Số điện thoại không hợp lệ')
    .required('Bạn nên cập nhật số điện thoại của mình'),
  location: Yup.string().required('Địa chỉ không được để trống'),
  city: Yup.string().required('Thành phố không được để trống'),
  state: Yup.string().required('Quận huyện không được để trống'),
  ward: Yup.string(),
  type: Yup.string().required('Loại địa chỉ không được để trống')
})

const Address = () => {
  const dispatch = useDispatch()

  // filter option
  const filterOption = (input: any, option: any) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())

  //address state
  const addressState = useSelector((state: any) => state.auth?.user?.userAddress)

  // data address
  const [addressData, setAddressData] = useState<{ code: number; name: string }>()
  const [wardData, setWardData] = useState<{ code: number; name: string }>()

  const [cities, setCities] = useState<Array<{ value: string; label: string; code: number; name: string }>>([])
  const [districts, setDistricts] = useState<Array<{ value: string; label: string; code: number; name: string }>>([])
  const [wards, setWards] = useState<Array<{ value: string; label: string }>>([])

  const handleChangeAddress = (value: any) => {
    setAddressData({ code: value.code, name: value.name })
    formik.setFieldValue('city', value.name)
  }
  const handleChangeState = (value: any) => {
    setWardData({ code: value.code, name: value.name })
    formik.setFieldValue('state', value.name)
  }

  const getVietnamCitiesData = async () => {
    const data = await getVietnamCities()
    const newData = []
    if (data) {
      for (let i = 0; i < data.length; i++) {
        newData.push({
          value: data[i].toponymName,
          label: data[i].toponymName,
          code: data[i].adminCode1,
          name: data[i].toponymName
        })
      }
    }
    setCities(newData)
  }

  const getDestrictsOfCity = async () => {
    if (!addressData) return
    const data = await getDistrisOfCity(addressData?.code, addressData?.name)
    const newData = []
    for (let i = 0; i < data.length; i++) {
      newData.push({
        value: data[i].toponymName,
        label: data[i].toponymName,
        code: data[i].adminCode1,
        name: data[i].toponymName
      })
    }
    setDistricts(newData)
  }

  const getWardsOfDistrictService = async () => {
    if (!wardData) return
    const data = await getWardsOfDistrict(wardData?.name, wardData?.code)
    const newData = []
    for (let i = 0; i < data.length; i++) {
      newData.push({
        value: data[i].toponymName,
        label: data[i].toponymName
      })
    }
    setWards(newData)
  }

  useEffect(() => {
    getVietnamCitiesData()
    if (addressData) {
      getDestrictsOfCity()
    }
    if (wardData) {
      getWardsOfDistrictService()
    } else {
      setDistricts([])
      setWards([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addressData, wardData])

  // modal add address
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  // change address
  const handleChangeDefault = (id: string) => {
    if (!id) return
    dispatch<any>(changeAddressDefault(id))
  }

  const handleChangeDelete = (id: string) => {
    if (!id) return
    dispatch<any>(deleteAddress(id))
  }

  const formik = useFormik({
    validationSchema: schema,
    enableReinitialize: true,
    initialValues: {
      fullName: '',
      phoneNumber: '',
      location: '',
      city: '',
      state: '',
      ward: '',
      type: ''
    },
    onSubmit: (values) => {
      const newData = {
        fullName: values.fullName,
        phoneNumber: values.phoneNumber,
        location: values.location,
        city: values.city,
        state: values.ward,
        type: values.type
      }
      dispatch<any>(addNewAddress(newData))
      setIsModalOpen(false)
      formik.resetForm()
    }
  })

  return (
    <div className={cx('address-wapper')}>
      <div className={cx('add-new')}>
        <h4 className={cx('address-title')}>Địa chỉ của tôi</h4>
        <Button primary small onClick={showModal}>
          Thêm mới địa chỉ
        </Button>
      </div>
      <div className={cx('address-list')}>
        <h5>Danh sách địa chỉ</h5>
        {addressState && addNewAddress.length > 0 ? (
          addressState?.map((item: addressData, index: number) => {
            return (
              <div className={cx('address-item')} key={index}>
                <div className={cx('address-info')}>
                  <div className={cx('address-user')}>
                    <div className={cx('name')}>{item.fullName}</div>
                    <div className={cx('phone')}>{item.phoneNumber}</div>
                  </div>
                  <div className={cx('address-address')}>
                    {item.city} - {item.state}
                  </div>
                  <div className={cx('address-address')}>{item.location}</div>
                  {item?.isDefault ? <div className={cx('address-default')}>Mặc định</div> : ''}
                </div>
                <div className={cx('addrees-action')}>
                  <div className={cx('address-btn')}>
                    <Button>Sửa</Button>
                    <Popconfirm
                      title="Xóa địa chỉ"
                      description="Bạn có chắc chắn muốn xóa địa chỉ này không?"
                      icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                      okText="Xóa địa chỉ"
                      cancelText="Hủy"
                      onConfirm={() => handleChangeDelete(item?._id ?? '')}
                    >
                      <Button>Xóa</Button>
                    </Popconfirm>
                  </div>

                  <Button
                    small
                    primary
                    onClick={() => handleChangeDefault(item?._id ?? '')}
                    disabled={item.isDefault ? true : false}
                  >
                    Thiết lập mặc định
                  </Button>
                </div>
              </div>
            )
          })
        ) : (
          <div>Chưa có địa chỉ nào</div>
        )}
      </div>
      <>
        <Modal
          open={isModalOpen}
          onCancel={handleCancel}
          okButtonProps={{ hidden: true }}
          cancelButtonProps={{ hidden: true }}
        >
          <form className={cx('modal-wrapper')} onSubmit={formik.handleSubmit}>
            <div className={cx('modal-heading')}>
              <h2>Địa chỉ mới</h2>
            </div>
            <div className={cx('modal-user')}>
              <input
                type="text"
                placeholder="Họ và tên"
                value={formik.values.fullName}
                onChange={formik.handleChange('fullName')}
                onBlur={formik.handleBlur('fullName')}
                className={formik.touched.fullName && formik.errors.fullName ? cx('error') : ''}
              />
              <input
                type="text"
                placeholder="Số điện thoại"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange('phoneNumber')}
                className={formik.touched.phoneNumber && formik.errors.phoneNumber ? cx('error') : ''}
              />
            </div>
            <div className={cx('modal-addres')}>
              <Select
                showSearch
                placeholder="Chọn thành phố"
                optionFilterProp="children"
                options={cities}
                className={cx('modal-select')}
                filterOption={filterOption}
                onChange={(_, value) => handleChangeAddress(value)}
                value={formik.values.city ? formik.values.city : undefined}
              />
              <Select
                showSearch
                placeholder="Chọn quận huyện"
                optionFilterProp="children"
                options={districts}
                className={cx('modal-select')}
                filterOption={filterOption}
                onChange={(_, value) => handleChangeState(value)}
                value={formik.values.state ? formik.values.state : undefined}
              />
              <Select
                showSearch
                placeholder="Chọn phường xã"
                optionFilterProp="children"
                options={wards}
                className={cx('modal-select')}
                filterOption={filterOption}
                onChange={(value) => formik.setFieldValue('ward', value)}
                value={formik.values.ward ? formik.values.ward : undefined}
              />
              <div className="">
                <TextArea
                  placeholder="Địa chỉ cụ thể"
                  allowClear
                  value={formik.values.location}
                  onChange={formik.handleChange('location')}
                />
                {wards.length === 0 ? (
                  <div className={cx('modal-ward')}>
                    Chúng tôi chưa cập nhật được vị trí, vui lòng nhập địa chỉ của bạn!
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className={cx('address-type')}>
              <h4>Loại địa chỉ:</h4>
              <div className={cx('type-item')}>
                <Button
                  outline
                  small
                  background={formik.values.type === 'Nhà riêng' ? true : false}
                  onClick={() => formik.setFieldValue('type', 'Nhà riêng')}
                  type="button"
                >
                  Nhà riêng
                </Button>
                <Button
                  outline
                  small
                  background={formik.values.type === 'Văn phòng' ? true : false}
                  onClick={() => formik.setFieldValue('type', 'Văn phòng')}
                  type="button"
                >
                  Văn phòng
                </Button>
              </div>
            </div>
            <div className={cx('modal-action')}>
              <Button outline small onClick={() => setIsModalOpen(false)}>
                Trở lại
              </Button>
              <Button type="submit" primary small>
                Hoàn thành
              </Button>
            </div>
          </form>
        </Modal>
      </>
    </div>
  )
}

export default Address
