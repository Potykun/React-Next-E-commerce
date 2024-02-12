import { FC } from 'react'

import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'
import { cart } from '@/data/cart.data'

const Cart: FC = () => {
	return (
		<div className={styles['wrapper-cart']}>
			<button className={styles.heading}>
				<span className={styles.badge}>1</span>
				<span className={styles.text}> My Basket</span>
			</button>
			<div className={styles.cart}>
				{cart.map(item => {
					return <CartItem key={item.id} item={item} />
				})}
			</div>
		</div>
	)
}

export default Cart
