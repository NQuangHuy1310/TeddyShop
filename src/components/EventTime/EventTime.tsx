import classNames from 'classnames/bind'
import { useState, useEffect } from 'react'
import moment, { Moment, Duration } from 'moment'
import styles from './EventTime.module.scss'

interface EventTimeProps {
  time: Moment
}

const cx = classNames.bind(styles)

const EventTime = (props: EventTimeProps) => {
  const { time } = props

  const [remainingTime, setRemainingTime] = useState<Duration | null>(null)

  const calculateRemainingTime = () => {
    const datetime: Moment = moment(time)
    const currentTime: Moment = moment()
    // tính thời gian còn lại bằng phương thức diff
    const duration: Duration = moment.duration(datetime.diff(currentTime))
    setRemainingTime(duration)

    if (duration.asSeconds() <= 0) {
      setRemainingTime(moment.duration(0))
    }
  }

  useEffect(() => {
    calculateRemainingTime()

    const interval = setInterval(() => {
      calculateRemainingTime()
    }, 1000)

    return () => {
      clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time])

  return (
    <>
      <div className={cx('event-timeline')}>
        {remainingTime && (
          <>
            <div className={cx('event-time')}>
              <p>{Math.floor(remainingTime?.asDays())}</p>
              <span>Days</span>
            </div>
            <span className={cx('divider')}></span>
            <div className={cx('event-time')}>
              <p>{remainingTime?.hours()}</p>
              <span>Hours</span>
            </div>
            <span className={cx('divider')}></span>
            <div className={cx('event-time')}>
              <p>{remainingTime?.minutes()}</p>
              <span>Min</span>
            </div>
            <span className={cx('divider')}></span>
            <div className={cx('event-time')}>
              <p>{remainingTime?.seconds()}</p>
              <span>Secs</span>
            </div>
          </>
        )}
      </div>
      {remainingTime && remainingTime?.asSeconds() <= 0 && <p className={cx('event-end')}>Sự kiện đã kết thúc</p>}
    </>
  )
}

export default EventTime
