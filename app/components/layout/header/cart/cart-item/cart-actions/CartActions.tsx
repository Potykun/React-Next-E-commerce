import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import { FC } from 'react'

import { useActions } from '@/hooks/useActions'

import { ICartItem } from '@/Types/cart.interface'

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 1,
			defaultValue: 1,
			min: 1
		})

	const inc = getIncrementButtonProps()
	const dec = getDecrementButtonProps()
	const input = getInputProps()

	const { removeFromCart } = useActions()

	return (
		<div>
			<HStack className='mt-3'>
				<Button {...dec}>
					<MinusIcon fontSize={13}></MinusIcon>
				</Button>
				<Input
					{...input}
					focusBorderColor='green.400'
					_hover={{ cursor: 'default' }}
					readOnly
				/>
				<Button {...inc}>
					<AddIcon fontSize={13}></AddIcon>
				</Button>
			</HStack>
			<Button
				variant='solid'
				color='#f23c3d'
				marginTop={2}
				size='sm'
				opacity={0.8}
				onClick={() => {
					removeFromCart(item.id)
				}}
			>
				Remove
			</Button>
		</div>
	)
}

export default CartActions
