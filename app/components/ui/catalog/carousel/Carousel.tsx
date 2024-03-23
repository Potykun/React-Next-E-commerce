import Image from 'next/image'
import { FC } from 'react'

import styles from './Carousel.module.scss'
import CarouselItem from './carouselItem/CarouselItem'
import { IProduct } from '@/Types/product.interface'

export const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<section className={styles.carousel}>
			{products.map(product => (
				<CarouselItem key={product.id} product={product}></CarouselItem>
			))}
		</section>
	)
}
export default Carousel
