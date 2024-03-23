import { FC } from 'react'

import Carousel from './carousel/Carousel'
import { IProduct } from '@/Types/product.interface'

const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
	return <Carousel products={products}></Carousel>
}

export default Catalog
