import { IProduct } from '@/Types/product.interface'

export const products: IProduct[] = [
	{
		id: 1,
		name: 'Midnight Mint Mocha Frappuccino',
		price: 9,
		description: 'Coffee is the most popular drink in the world.',
		images: [
			'/images/products/PeppermintMochaCremeFrappuccino.png',
			'/images/products/CaffeVanillaFrapp.png'
		],
		review: []
	},
	{
		id: 2,
		name: 'Peppermint White Chocolate Hot Cocoa',
		price: 5,
		description: 'Coffee is the most popular drink in the world.',
		images: [
			'/images/products/PeppermintWhiteChocolateHotCocoa.png',
			'/images/products/CaffeVanillaFrapp.png'
		],
		review: []
	},
	{
		id: 3,
		name: 'Matcha Green Tea Frapp',
		price: 7,
		description: 'Coffee is the most popular drink in the world.',
		images: [
			'/images/products/MatchaGreenTeaFrapp.png',
			'/images/products/CaffeVanillaFrapp.png'
		],
		review: []
	},
	{
		id: 4,
		name: 'Chocolate Cream Cold BrewHaze lnut Cookie Crumbles',
		price: 8,
		description: 'Coffee is the most popular drink in the world.',
		images: [
			'/images/products/ChocolateCreamColdBrewHazelnutCookieCrumbles.png',
			'/images/products/CaffeVanillaFrapp.png'
		],
		review: []
	},
	{
		id: 5,
		name: 'Strawberry Frapp',
		price: 15,
		description: 'Coffee is the most popular drink in the world.',
		images: [
			'/images/products/StrawberryFrapp.png',
			'/images/products/CaffeVanillaFrapp.png'
		],
		review: []
	}
]
