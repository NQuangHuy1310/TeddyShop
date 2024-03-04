import React from 'react'
import classNames from 'classnames/bind'

import styles from './ProfileLayout.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProfileNav from '../components/ProfileNav'

interface profileLayoutProps {
  children: React.ReactNode
}

const cx = classNames.bind(styles)

const ProfileLayout = (props: profileLayoutProps) => {
  const { children } = props

  return (
    <div className={cx('wrapper')}>
      <Header />
      <main className={cx('profile-content')}>
        <ProfileNav />
        <div className={cx('profile-has-children')}>{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default ProfileLayout
