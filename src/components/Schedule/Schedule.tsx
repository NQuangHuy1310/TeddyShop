import { useState } from 'react'
import classNames from 'classnames/bind'
import { MdExpandMore } from 'react-icons/md'
import { IoIosArrowUp } from 'react-icons/io'

import styles from './Schedule.module.scss'
import Button from '../Button'
import { scheduleModal } from '~/models/event'
import moment from 'moment'
import { convertToVietnameseDay, convertToVietnameseMonth } from '~/utils/formaatedTime'

const cx = classNames.bind(styles)

const Schedule = (props: scheduleModal) => {
  const { date, name, type, time } = props
  const dateString = moment(date)

  const dayOfWeek = convertToVietnameseDay(dateString.format('dddd'))
  const dayOfMonth = dateString.format('D')
  const month = convertToVietnameseMonth(dateString.format('MMM'))

  const timeString = moment(time)
  const hours = timeString.format('HH')
  const minutes = timeString.format('mm')

  const [isShowTimeline, setIsShowTimeline] = useState(false)

  return (
    <div className={cx('schedule-item')}>
      <div className={cx('schedule-heading')}>
        <h4 className={cx('schedule-date')}>
          Thứ {dayOfWeek} - Ngày {dayOfMonth} - Tháng {month}
        </h4>
        <div className={cx('schedule-more')} onClick={() => setIsShowTimeline(!isShowTimeline)}>
          {isShowTimeline ? <MdExpandMore /> : <IoIosArrowUp />}
        </div>
      </div>
      {isShowTimeline && (
        <div className={cx('schedule-timeline')}>
          <div className={cx('schedule')}>
            <p className={cx('schedule-time')}>{`${hours} - ${minutes}`}</p>
            <div className={cx('schedule-details')}>
              <div className={cx('schedule-title')}>
                <h4 className={cx('schedule-name')}>{name}</h4>
                <div className={cx('schedule-tags')}>
                  {type?.map((tag: string, index: number) => {
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
        </div>
      )}
    </div>
  )
}

export default Schedule
