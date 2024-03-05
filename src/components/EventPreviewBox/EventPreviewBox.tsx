import classNames from 'classnames/bind'

import styles from './EventPreview.module.scss'
import Button from '../Button'
import { Link } from 'react-router-dom'
import { convertToVietnameseDay, convertToVietnameseMonth } from '~/utils/formaatedTime'

const cx = classNames.bind(styles)

interface eventProps {
  events: {
    date: string
    day: string
    month: string
    year: string
    name: string
    tag: string
    location: string
    desc: string
    to?: string
  }[]
}

const EventPreviewBox = (props: eventProps) => {
  const { events } = props

  return (
    <div className={cx('event-list')}>
      {events &&
        events.length > 0 &&
        events?.map((event, index) => {
          return (
            <Link to={`/event/${event.to}`} className={cx('event-item')} key={index}>
              <div className={cx('event-date')}>
                <span className={cx('rank')}>{convertToVietnameseDay(event.date)}</span>
                <span className={cx('day')}>{event.day}</span>
                <span className={cx('year')}>
                  {convertToVietnameseMonth(event.month)} - {event.year}
                </span>
              </div>
              <div className={cx('event-detail')}>
                <div className={cx('event-title')}>
                  <div className={cx('event-info')}>
                    <h3 className={cx('event-name')}>{event.name}</h3>
                    <p className={cx('event-tag')}>{event.tag}</p>
                  </div>
                  <p className={cx('event-location')}>{event.location}</p>
                </div>
                <p className={cx('event-desc')}>
                  {event.desc.length > 100 ? event.desc.slice(0, 120) + '...' : event.desc}
                </p>
              </div>
              <Button outline small>
                Đăng ký ngay
              </Button>
            </Link>
          )
        })}
    </div>
  )
}

export default EventPreviewBox
