import { FC } from 'react'

import styles from './Header.module.scss'
import Cart from './cart/Cart'
import Menu from './menu/Menu'
import Search from './search/Search'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Menu></Menu>
			<Search></Search>
			<Cart></Cart>
		</header>
	)
}

export default Header
