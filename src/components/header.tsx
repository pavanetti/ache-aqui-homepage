import { Menu } from '@styled-icons/boxicons-regular'

import Logo from './logo.svg'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <Logo width={86} height={44} fill="#204372" />
      <div className={styles.menu}>
        <Menu size={24} />
      </div>
    </div>
  )
}

export default Header
