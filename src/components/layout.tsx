import { FC } from 'react'
import Footer from './Footer'
import Header from './header'

import styles from './Layout.module.css'

const Layout: FC = ({ children }) => {
  return (
    <div className={styles['global-container']}>
      <Header />
      <div className={styles['main-container']}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
