import Header from '../components/Header'
import classNames from 'classnames/bind'

import styles from './HeaderOnly.module.scss'

const cx = classNames.bind(styles)

interface Props {
  children: React.ReactNode
}

const HeaderOnly = (props: Props) => {
  const { children } = props

  return (
    <>
      <Header />
      <main className={cx('content')}>{children}</main>
    </>
  )
}

export default HeaderOnly
