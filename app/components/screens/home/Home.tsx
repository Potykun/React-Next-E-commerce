import { FC } from 'react'

import Layout from '@/layout/Layout'

import Catalog from '@/ui/catalog/Catalog'

import { products } from '@/data/product.data'

const Home: FC = () => {
	return (
		<Layout title='Home' description='More than just coffee'>
			<Catalog products={products}></Catalog>
		</Layout>
	)
}

export default Home
