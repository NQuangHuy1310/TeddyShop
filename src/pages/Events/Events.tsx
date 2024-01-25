import classNames from 'classnames/bind'

import styles from './Events.module.scss'
import Heading from '~/components/Heading'
import Button from '~/components/Button'
import EventPreviewBox from '~/components/EventPreviewBox'
import Schedule from '~/components/Schedule'
import images from '~/assets'
import { DATA } from '~/constants'

const cx = classNames.bind(styles)

const eventList = [
  {
    date: 'Thứ 6',
    day: '14',
    month: '02',
    year: '2024',
    name: 'Trang web bắt đầu hoạt động',
    tag: 'Giảm giá 20%',
    location: 'Toàn bộ trang web',
    desc: 'Có cơ hội trải nghiệm các mẫu bàn phím tuyệt vời, các tình năng độc đáo trên các mẫu bàn phím mới.'
  },
  {
    date: 'Thứ 6',
    day: '14',
    month: '02',
    year: '2024',
    name: 'Ngày hội bàn phím',
    tag: 'Khám phá các mẫu bàn phím mới',
    location: 'Trung tâm triển lãm công nghệ',
    desc: 'Tham gia ngày hội bàn phím để khám phá và trải nghiệm các mẫu bàn phím tuyệt vời. Sự kiện này sẽ giới thiệu các tính năng độc đáo và công nghệ tiên tiến trên các mẫu bàn phím mới nhất trên thị trường. Đừng bỏ lỡ cơ hội này để tìm hiểu và mua sắm các sản phẩm bàn phím chất lượng.'
  },
  {
    date: 'Thứ 7',
    day: '22',
    month: '03',
    year: '2024',
    name: 'Cuộc thi gõ tốc độ',
    tag: 'Thách thức khả năng gõ của bạn',
    location: 'Quán cà phê Gõ Nhanh',
    desc: 'Tham gia cuộc thi gõ tốc độ để thể hiện khả năng gõ của bạn trên bàn phím. Cuộc thi sẽ có các vòng đấu hấp dẫn và giải thưởng hấp dẫn cho những người gõ nhanh nhất. Hãy chuẩn bị sẵn sàng và tham gia để trở thành nhà vô địch gõ tốc độ!'
  },
  {
    date: 'Thứ 6',
    day: '18',
    month: '04',
    year: '2024',
    name: 'Hội thảo về bàn phím thông minh',
    tag: 'Khám phá tương lai của bàn phím',
    location: 'Khách sạn Công nghệ',
    desc: 'Tham gia hội thảo về bàn phím thông minh để tìm hiểu về các công nghệ và xu hướng mới nhất trong lĩnh vực này. Các chuyên gia hàng đầu sẽ chia sẻ thông tin về bàn phím thông minh, tích hợp trí tuệ nhân tạo và các tính năng đột phá. Hãy tham gia để có cái nhìn sâu hơn về tương lai của bàn phím.'
  }
]

const scheduleData = [
  {
    date: '6',
    day: '18',
    month: '04',
    year: '2024',
    schedule: [
      {
        time: '8:00 AM',
        name: 'Hội thảo về bàn phím thông minh',
        tags: ['Trực tiếp', 'Online']
      },
      {
        time: '9:00 AM',
        name: 'Hội thảo về bàn phím thông minh',
        tags: ['Trực tiếp', 'Online']
      },
      {
        time: '10:00 AM',
        name: 'Hội thảo về bàn phím thông minh',
        tags: ['Trực tiếp', 'Online']
      }
    ]
  },
  {
    date: '7',
    day: '19',
    month: '04',
    year: '2024',
    schedule: [
      {
        time: '8:00 AM',
        name: 'Hội thảo về bàn phím thông minh',
        tags: ['Trực tiếp', 'Online']
      },
      {
        time: '9:00 AM',
        name: 'Hội thảo về bàn phím thông minh',
        tags: ['Trực tiếp', 'Online']
      },
      {
        time: '10:00 AM',
        name: 'Hội thảo về bàn phím thông minh',
        tags: ['Trực tiếp', 'Online']
      }
    ]
  }
]

const Events = () => {
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
          <EventPreviewBox events={eventList} />
        </div>
      </section>

      <section className={cx('event-schedule')}>
        <Heading
          className={cx('event-schedule-heading')}
          heading="Lịch sự kiện"
          desc="Luôn cập nhật lịch trình sự kiện chi tiết của chúng tôi và lên kế hoạch cho ngày của bạn cho phù hợp."
        />
        <div className={cx('event-schedule-list')}>
          {scheduleData.map((item, index) => {
            return <Schedule key={index} {...item} />
          })}
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
          {DATA.EVENT_FAQS.map((item, index) => {
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
