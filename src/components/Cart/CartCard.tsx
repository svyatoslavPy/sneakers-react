import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '~/store/store'
import { useEffect } from 'react'
import { CartCartItem } from './CartCartItem'

export const CartCard: React.FC = () => {
	const CartCard = useSelector((state: RootState) => state.snikers.cartData)

	useEffect(() => {
		localStorage.setItem('cartData', JSON.stringify(CartCard))
	}, [CartCard])

	return (
		<>
			{CartCard.length > 0 ? (
				CartCard.map((item: any) => <CartCartItem {...item} key={item?.id} />)
			) : (
				<p className='cart-items__text--empty'>Cart empty</p>
			)}
		</>
	)
}
