import classNames from 'classnames/bind'
import { useState } from 'react'

import styles from './Contact.module.scss'
import Heading from '~/components/Heading'
import Button from '~/components/Button'
import UserItem from '~/components/UserItem'
import { DATA } from '~/constants'

const cx = classNames.bind(styles)

const Contact = () => {
  const [mapIndex, setMapIndex] = useState(0)

  const handleChangeMap = (index: number) => {
    setMapIndex(index)
  }

  return (
    <div className={cx('contact-wrapper')}>
      <section className={cx('contact-section')}>
        <Heading
          heading="Liên hệ với chúng tôi"
          desc="Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn trong quá trình lựa chọn và mua bàn phím."
        />
        <div className={cx('contact-action')}>
          <Button background small>
            Liên hệ ngay
          </Button>
          <Button outline small>
            Tìm hiểu thêm
          </Button>
        </div>
      </section>

      <section className={cx('contact-us-section')}>
        <Heading
          heading="Liên hệ với chúng tôi"
          desc="Hãy liên hệ với chúng tôi nếu có bất kì thắc mắc hoặc cần sự trợ giúp nào qua các thông tin dưới đây."
        />
        <div className={cx('contact-us-list')}>
          {DATA.CONTACT_DATA.map((item, index) => {
            return (
              <div className={cx('contact-us-item')} key={index}>
                <div className={cx('contact-us-icon')}>
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="">
                  <h4 className={cx('contact-us-title')}>{item.title}</h4>
                  <p className={cx('contact-us-desc')}>{item.desc}</p>
                </div>
                <a className={cx('contact-us-info')}>{item.info}</a>
              </div>
            )
          })}
        </div>
      </section>

      <section className={cx('location-section')}>
        <div className="">
          <Heading heading="Chi nhánh của chúng tôi" desc="Tìm các chi nhánh của chúng tôi gần bạn để dễ liên lạc." />
        </div>
        <div className={cx('location-info')}>
          <div className={cx('location-list')}>
            {DATA.LOCATION_DATA.map((item, index) => {
              return (
                <div
                  className={cx('location-item', `${mapIndex === index ? 'active' : ''}`)}
                  key={index}
                  onClick={() => handleChangeMap(index)}
                >
                  <h4 className={cx('location-name')}>{item.name}</h4>
                  <p className={cx('location-address')}>{item.address}</p>
                  <a href={item.linkToMap} target="_black" className={cx('loaction-view-map')}>
                    Xem vị trí trên bản đồ
                  </a>
                </div>
              )
            })}
          </div>
          <div className={cx('location-img')}>
            <iframe src={DATA.LOCATION_DATA[mapIndex].map} width="600" height="450"></iframe>
          </div>
        </div>
      </section>

      <section className={cx('support-section')}>
        <Heading heading="Đội ngũ hỗ trợ" desc="Gặp gỡ các thành viên của nhóm hỗ trợ khách hàng chúng tôi." />
        <div className={cx('support-team')}>
          {DATA.USER_SUPPORT_DATA.map((item, index) => {
            return <UserItem key={index} {...item} isSupport />
          })}
        </div>
      </section>
    </div>
  )
}

export default Contact
