import classNames from 'classnames/bind'
import styles from './Events.module.scss'
import Heading from '~/components/Heading'
import Button from '~/components/Button'
import EventPreviewBox from '~/components/EventPreviewBox'
import images from '~/assets'
import { DATA } from '~/constants'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getEvents } from '~/features/event/eventSlice'
import moment from 'moment'
import { eventModal } from '~/models/event'

const cx = classNames.bind(styles)

const Events = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch<any>(getEvents())
  }, [dispatch])

  const eventState = useSelector((state: any) => state.event.events)
  const eventData = eventState?.map((event: eventModal) => {
    const datetime = moment(event?.time).locale('vi')
    const dayOfWeek = datetime.format('dddd')
    const date = datetime.format('D')
    const month = datetime.format('MMM')
    const year = datetime.format('YYYY')
    return {
      date: dayOfWeek,
      day: date,
      month: month,
      year: year,
      name: event.name,
      tag: event.tag,
      location: event.location,
      desc: event.title,
      to: event._id
    }
  })

  return (
    <div className={cx('events-wrapper')}>
      <section className={cx('event-heading')}>
        <Heading
          heading="Tham gia cộng đồng bàn phím"
          desc="Chúng tôi luôn cập nhật thông tin mới nhất về các triển lãm bàn phím, triển lãm thương mại và các buổi gặp gỡ trong lĩnh vực này. Điều này giúp bạn không bỏ lỡ bất kỳ sự kiện quan trọng nào và cung cấp cho bạn những thông tin mới nhất về các sản phẩm và xu hướng hàng đầu trong ngành."
        />
        <div className={cx('heading-action')}>
          <Button background small>
            Khám phá ngay
          </Button>
          <Button small outline>
            Đăng ký
          </Button>
        </div>
      </section>

      <section className={cx('event-preview')}>
        <Heading
          heading="Sự kiện sắp tới"
          desc="Hãy tham gia cùng chúng tôi để tham gia các sự kiện sắp tới và trải nghiệm những điều mới mẻ! Từ hội thảo đến hội nghị, chúng tôi có nhiều sự kiện thú vị dành riêng cho bạn. Đừng bỏ lỡ cơ hội học hỏi, kết nối và phát triển."
        />
        <div className={cx('event-content')}>
          <div className={cx('event-type')}>
            <Button category small outline>
              Xem tất cả
            </Button>
            <Button category small>
              Workshops
            </Button>
            <Button category small>
              Conferences
            </Button>
            <Button category small>
              Webinars
            </Button>
          </div>
          <EventPreviewBox events={eventData} />
        </div>
      </section>

      <section className={cx('event-faq')}>
        <div className={cx('faq-content')}>
          <Heading
            heading="Các câu hỏi thường gặp"
            desc="Tìm câu trả lời cho các câu hỏi phổ biến về việc tham dự sự kiện, đặt vé và những điều sẽ xảy ra."
          />
          <div>
            <Button outline small>
              Liên hệ với chúng tôi
            </Button>
          </div>
        </div>
        <div className={cx('faq-list')}>
          {DATA.EVENT_FAQS?.map((item, index) => {
            return (
              <div className={cx('faq-item')} key={index}>
                <h4 className={cx('faq-question')}>{item.question}</h4>
                <p className={cx('faq-answer')}>{item.answer}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className={cx('event-exciting')}>
        <div className={cx('event-exciting-content')}>
          <Heading
            heading="Hãy tham gia các sự kiện thú vị của chúng tôi ngay hôm hay!"
            desc="Khám phá các xu hướng mới nhất cả ngành và kết nối với các chuyên gia có cùng chí hướng."
          />
          <div className={cx('event-exciting-action')}>
            <Button background small>
              Đăng kí ngay
            </Button>
            <Button outline small>
              Liên hệ
            </Button>
          </div>
        </div>
        <div className={cx('event-exciting-img')}>
          <img src={images.eventImage} alt="Keyboard event" />
        </div>
      </section>
    </div>
  )
}

export default Events
