import React from 'react'
import classNames from 'classnames/bind'

import styles from './MainLayout.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface mainLayoutProps {
  children: React.ReactNode
}

const cx = classNames.bind(styles)

const MainLayout = (props: mainLayoutProps) => {
  const { children } = props

  return (
    <div className={cx('wrapper')}>
      <Header />
      <main className={cx('content')}>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
