import classNames from 'classnames/bind'
import styles from './Event.module.scss'
import Heading from '~/components/Heading'
import Button from '~/components/Button'
import Socials from '~/components/Socials'
import images from '~/assets'
import Schedule from '~/components/Schedule'
import Form from '~/components/Form'
import Slide from '~/components/Slide'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { addUserSubscribeEvent, getEvent, getScheduleByEventId } from '~/features/event/eventSlice'
import { resetState } from '~/features/auth/authSlice'
import { memberModal } from '~/models'
import moment from 'moment'
import { convertToVietnameseDay, convertToVietnameseMonth } from '~/utils/formaatedTime'
import EventTime from '~/components/EventTime'
import { scheduleModal } from '~/models/event'
import Breadcrumb from '~/components/Breadcrumb'
import config from '~/config'
import { toast } from 'react-toastify'

const cx = classNames.bind(styles)

const Event = () => {
  const dispatch = useDispatch()
  const location = useLocation()

  const [userEmail, setUserEmail] = useState<string>('')

  const eventId = location.pathname.split('/')[2]

  useEffect(() => {
    if (eventId) {
      dispatch<any>(getEvent(eventId))
      dispatch<any>(getScheduleByEventId(eventId))
    } else dispatch<any>(resetState())
  }, [eventId, dispatch])

  const eventState = useSelector((state: any) => state.event?.event)
  const scheduleState = useSelector((state: any) => state.event?.schedules)
  const subscribeState = useSelector((state: any) => state.event)
  const { subscribe, isSuccess, isError, isLoading } = subscribeState

  const { members, name, tag, time, title, description } = eventState

  const datetime = moment(time).locale('vi')

  // ngày diễn ra
  const day = datetime.format('D')
  const date = convertToVietnameseDay(datetime.format('dddd'))
  const month = convertToVietnameseMonth(datetime.format('MMM'))
  const year = datetime.format('YYYY')

  const formattedData = `${date} - Ngày ${day} - ${month} - ${year}`

  const handleSubscribeEvent = () => {
    if (userEmail === '') {
      toast.warn('Bạn nên nhập email vào để đăng ký !')
      return
    }
    const newData: { eventId: string; email: string } = {
      eventId: eventId,
      email: userEmail
    }
    dispatch<any>(addUserSubscribeEvent(newData))
  }

  useEffect(() => {
    if (subscribe && Object.keys(subscribe).length > 0 && isSuccess) {
      toast.success('Bạn đã đăng kí thành công!')
      setUserEmail('')
      dispatch<any>(resetState())
      setTimeout(() => {
        dispatch<any>(getEvent(eventId))
      }, 500)
    }
    if (isError) {
      toast.error('Đăng kí không thành công vui lòng thử lại!')
    }
  }, [subscribe, isSuccess, isError, isLoading, dispatch, eventId])

  return (
    <div className={cx('event-wrapper')}>
      <Breadcrumb breadcrumbData={[{ pageName: 'Sự kiện', pageLink: config.routes.events }, { pageName: name }]} />
      <section className={cx('event-header-container')}>
        <div className={cx('event-header')}>
          <div className={cx('event-detail')}>
            <Heading heading={name} desc={title} />
          </div>
          <div className={cx('event-date')}>
            <div className={cx('event-title')}>
              <p className={cx('event-info')}>{formattedData}</p>
              <div className={cx('event-tag')}>{tag}</div>
            </div>
            <EventTime time={datetime} />
          </div>
          <div className={cx('event-action')}>
            <input
              type="email"
              placeholder="Nhập email của bạn..."
              value={userEmail}
              onChange={(event) => setUserEmail(event.target.value)}
            />
            <Button background large onClick={handleSubscribeEvent}>
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
              {members &&
                members.length > 0 &&
                members?.map((member: memberModal, index: number) => {
                  return (
                    <div className={cx('memeber-item')} key={index}>
                      <div className={cx('member-img')}>
                        <img src={member.images ? member.images.url : images.productDefault} alt="" />
                      </div>
                      <div className={cx('memeber-info')}>
                        <p className={cx('member-name')}>{member.fullName}</p>
                        <p className={cx('member-position')}>{member.position}</p>
                      </div>
                    </div>
                  )
                })}
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
        <div className={cx('content-right')} dangerouslySetInnerHTML={{ __html: description }}></div>
      </section>

      <section className={cx('event-schedule')}>
        <Heading heading="Lịch sự kiện" desc="Hãy xem lịch trình chi tiết về các thủ tục của sự kiện dưới đây." />
        <div className="">
          {scheduleState?.map((item: scheduleModal, index: number) => {
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
          {members &&
            members?.length > 0 &&
            members?.map((member: memberModal, index: number) => {
              return (
                <div className={cx('team')} key={index}>
                  <div className={cx('team-img')}>
                    <img src={member.images ? member.images.url : images.productDefault} alt="" />
                  </div>
                  <div className={cx('team-info')}>
                    <p className={cx('team-name')}>{member.fullName}</p>
                    <p className={cx('team-position')}>{member.position}</p>
                    <p className={cx('team-desc')} dangerouslySetInnerHTML={{ __html: member.description }}></p>
                  </div>
                  <Socials />
                </div>
              )
            })}
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
