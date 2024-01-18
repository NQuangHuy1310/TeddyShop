import React from 'react'
import classNames from 'classnames/bind'

import styles from './MainLayout.module.scss'

interface mainLayoutProps {
  children: React.ReactNode
}

const cx = classNames.bind(styles)

const MainLayout = (props: mainLayoutProps) => {
  const { children } = props

  return (
    <div className={cx('wrapper')}>
      <header>Đây là header</header>
      <main className={cx('content')}>{children}</main>
      <footer>Đây là footer</footer>
    </div>
  )
}

export default MainLayout
