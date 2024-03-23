import cn from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import styles from '.././Carousel.module.scss'

import { IProduct } from '@/Types/product.interface'

const CarouselItem: FC<{ product: IProduct }> = ({ product }) => {
	const isActive = product.id === 2

	return (
		<div
			className={cn(styles.item, {
				[styles.active]: isActive
			})}
		>
			<div>
				<Image
					className={styles.image}
					src={product.images[0]}
					alt={product.name}
					width={315}
					height={315}
				/>

				<h3 className={styles.heading}>
					<div>{product.name}</div>
				</h3>
				{isActive && (
					<p className={styles.description}>{product.description}</p>
				)}
			</div>
		</div>
	)
}

export default CarouselItem
