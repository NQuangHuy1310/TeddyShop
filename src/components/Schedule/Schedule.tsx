import { useState } from 'react'
import classNames from 'classnames/bind'
import { MdExpandMore } from 'react-icons/md'
import { IoIosArrowUp } from 'react-icons/io'

import styles from './Schedule.module.scss'
import Button from '../Button'

const cx = classNames.bind(styles)

interface scheduleProps {
  date: string
  day: string
  month: string
  year: string
  schedule: {
    time: string
    name: string
    tags: string[]
  }[]
}

const Schedule = (props: scheduleProps) => {
  const { date, day, month, schedule } = props

  const [isShowTimeline, setIsShowTimeline] = useState(false)

  return (
    <div className={cx('schedule-item')}>
      <div className={cx('schedule-heading')}>
        <h4 className={cx('schedule-date')}>
          Thứ {date} - Ngày {day} - Tháng {month}
        </h4>
        <div className={cx('schedule-more')} onClick={() => setIsShowTimeline(!isShowTimeline)}>
          {isShowTimeline ? <MdExpandMore /> : <IoIosArrowUp />}
        </div>
      </div>
      {isShowTimeline && (
        <div className={cx('schedule-timeline')}>
          {schedule.map((item, index) => {
            return (
              <div className={cx('schedule')} key={index}>
                <p className={cx('schedule-time')}>{item.time}</p>
                <div className={cx('schedule-details')}>
                  <div className={cx('schedule-title')}>
                    <h4 className={cx('schedule-name')}>{item.name}</h4>
                    <div className={cx('schedule-tags')}>
                      {item?.tags.map((tag, index) => {
                        return (
                          <div className={cx('schedule-tag')} key={index}>
                            {tag}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <Button small outline>
                  Xem chi tiết
                </Button>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Schedule
