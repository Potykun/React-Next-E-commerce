import { ICartItem } from '@/Types/cart.interface'

export interface IInitialState {
	items: ICartItem[]
}
export interface IAddToCartPayload extends Omit<ICartItem, 'id'> {}

export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
	type: 'minus' | 'plus'
}
