import { IProduct } from '@/Types/product.interface'

export interface ICartItem {
	id: number
	product: IProduct
	quantity: number
}
