import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay
} from '@chakra-ui/react'
import { FC, useRef, useState } from 'react'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const btnRef = useRef<HTMLButtonElement>(null)

	const cart = useTypedSelector(state => state.cart.items)
	return (
		<div className={styles['wrapper-cart']}>
			<button
				className={styles.heading}
				ref={btnRef}
				onClick={e => setIsOpen(!isOpen)}
			>
				<span className={styles.badge}>1</span>
				<span className={styles.text}> My Basket</span>
			</button>

			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={() => setIsOpen(false)}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>My Basket</DrawerHeader>

					<DrawerBody>
						<div className={styles.cart}>
							{cart.map(item => {
								return <CartItem key={item.id} item={item} />
							})}
						</div>
					</DrawerBody>

					<DrawerFooter
						justifyContent='space-between'
						borderTopWidth={1}
						borderTopColor={'#f7f4f0'}
					>
						<div>
							<div className={styles.footer}>total:</div>
							<div>$100</div>
						</div>
						<Button colorScheme='green'>Checkout</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}

export default Cart
