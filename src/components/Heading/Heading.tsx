import classNames from 'classnames/bind'
import styles from './Heading.module.scss'

const cx = classNames.bind(styles)

interface headingProps {
  heading: string
  desc: string
}

const Heading = (props: headingProps) => {
  const { heading, desc } = props

  return (
    <div>
      <h2 className={cx('heading')}>{heading}</h2>
      <p className={cx('desc')}>{desc}</p>
    </div>
  )
}

export default Heading
