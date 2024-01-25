import classNames from 'classnames/bind'

import styles from './Event.module.scss'
import Heading from '~/components/Heading'
import Button from '~/components/Button'
import Socials from '~/components/Socials'
import images from '~/assets'
import Schedule from '~/components/Schedule'
import Form from '~/components/Form'
import Slide from '~/components/Slide'

const cx = classNames.bind(styles)

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

const Event = () => {
  return (
    <div className={cx('event-wrapper')}>
      <section className={cx('event-header-container')}>
        <div className={cx('event-header')}>
          <div className={cx('event-detail')}>
            <Heading
              heading="Ra mắt trang web TeddyShop"
              desc="Hãy tham gia cùng chúng tôi để có một trải nghiệm khó quên, đầy niềm vui và hứng thú."
            />
          </div>
          <div className={cx('event-date')}>
            <div className={cx('event-title')}>
              <p className={cx('event-info')}>Ngày 14 - Tháng 2 - Năm 2024</p>
              <div className={cx('event-tag')}>Giảm giá 20%</div>
            </div>
            <div className={cx('event-timeline')}>
              <div className={cx('event-time')}>
                <p>45</p>
                <span>Days</span>
              </div>
              <span className={cx('divider')}></span>
              <div className={cx('event-time')}>
                <p>12</p>
                <span>House</span>
              </div>
              <span className={cx('divider')}></span>
              <div className={cx('event-time')}>
                <p>44</p>
                <span>Min</span>
              </div>
              <span className={cx('divider')}></span>
              <div className={cx('event-time')}>
                <p>29</p>
                <span>Secs</span>
              </div>
            </div>
          </div>
          <div className={cx('event-action')}>
            <input type="email" placeholder="Nhập email của bạn..." />
            <Button background large>
              Đăng ký ngay
            </Button>
          </div>
        </div>
      </section>

      <section className={cx('event-content')}>
        <div className={cx('content-left')}>
          <div className={cx('content-member')}>
            <p>Diễn giả</p>
            <div className={cx('memeber-list')}>
              <div className={cx('memeber-item')}>
                <div className={cx('member-img')}>
                  <img src={images.productDefault} alt="" />
                </div>
                <div className={cx('memeber-info')}>
                  <p className={cx('member-name')}>Nguyễn Văn Quang Huy</p>
                  <p className={cx('member-position')}>CEO</p>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('content-form')}>
            <p>Nhận thông báo của sự kiện qua email</p>
            <div className={cx('form-action')}>
              <input type="email" placeholder="Nhập email của bạn..." />
              <Button background small>
                Đăng ký ngay
              </Button>
            </div>
          </div>
          <div className={cx('content-share')}>
            <p>Chia sẻ bài viết này qua các nền tảng mạng xã hội để mọi người cùng biết đến sự kiện.</p>
            <Socials />
          </div>
        </div>
        <div className={cx('content-right')}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil optio harum dolor perferendis quam! Impedit
          placeat possimus commodi? Temporibus dolor consectetur laudantium earum eos non recusandae ut, iusto ex hic
          quis nihil deleniti cumque odio corporis porro deserunt eveniet odit minima iste ullam architecto harum? Sit
          autem officiis perspiciatis doloremque ea eos reprehenderit recusandae nobis, voluptas ad sequi quam voluptate
          tempore deleniti? Autem amet esse unde iusto sed recusandae corporis. Et, libero? Sint voluptas vero
          architecto modi perferendis inventore eos assumenda alias explicabo quo asperiores odit nihil, rem incidunt
          optio suscipit commodi sed aut rerum omnis! Iure minus autem tenetur voluptas, similique nemo ut. Facere ad
          amet cum numquam dicta eligendi blanditiis? Commodi corporis rem quam? Laboriosam culpa tempora voluptas
          delectus nisi cum harum a reiciendis nobis earum amet iusto aspernatur labore perspiciatis deserunt ut ducimus
          cumque facilis, dolores id! Quaerat, aut amet? Culpa, at! Illum expedita quisquam, atque dolorum eum aliquam
          nemo nam veniam laborum quae. Laudantium vel cum error iste nulla quis doloremque ipsam voluptas voluptatibus
          sapiente. Atque, at ipsum consectetur repudiandae minus asperiores repellat veniam tempora, illum eum et
          doloremque necessitatibus rem facere. Adipisci veritatis, id iure asperiores, qui deleniti veniam accusantium
          tenetur consequuntur, totam excepturi architecto.
        </div>
      </section>

      <section className={cx('event-schedule')}>
        <Heading heading="Lịch sự kiện" desc="Hãy xem lịch trình chi tiết về các thủ tục của sự kiện dưới đây." />
        <div className="">
          {scheduleData.map((item, index) => {
            return <Schedule key={index} {...item} />
          })}
        </div>
      </section>

      <section className={cx('event-team')}>
        <Heading
          heading="Gặp đội của chúng tôi"
          desc="Làm quen với người tổ chức sự kiện, diễn giả và người tham gia."
        />
        <div className={cx('teams')}>
          <div className={cx('team')}>
            <div className={cx('team-img')}>
              <img src={images.productDefault} alt="" />
            </div>
            <div className={cx('team-info')}>
              <p className={cx('team-name')}>Nguyễn Văn Quang Huy</p>
              <p className={cx('team-position')}>CEO</p>
              <p className={cx('team-desc')}>
                Nguyễn Quang Huy là người đã sáng lập ra thương hiệu và có niềm đam mê với bàn phím.
              </p>
            </div>
            <Socials />
          </div>
          <div className={cx('team')}>
            <div className={cx('team-img')}>
              <img src={images.productDefault} alt="" />
            </div>
            <div className={cx('team-info')}>
              <p className={cx('team-name')}>Nguyễn Văn Quang Huy</p>
              <p className={cx('team-position')}>CEO</p>
              <p className={cx('team-desc')}>
                Nguyễn Quang Huy là người đã sáng lập ra thương hiệu và có niềm đam mê với bàn phím.
              </p>
            </div>
            <Socials />
          </div>
        </div>
      </section>

      <section className={cx('event-form')}>
        <Form
          heading="Đăng kí tham gia sự kiện của chúng tôi"
          desc="Hoàn thiện form đăng kí để có thể tham gia sự kiện của chúng tôi và nhận những phần quà hấp dẫn."
        />
        <div className={cx('form-img')}>
          <img src={images.razer} alt="" />
        </div>
      </section>

      <section className={cx('event-gallery')}>
        <Heading
          heading="Bộ sưu tập sự kiện"
          desc="Trải nghiệm bầu không khí sôi động và các hoạt động thú vị từ các sự kiện trước đây."
        />

        <div className={cx('event-slide')}>
          <Slide images={[images.razer, images.eventImage]} />
        </div>
      </section>
    </div>
  )
}

export default Event
