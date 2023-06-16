import React from 'react'
import { useSelector } from 'react-redux'

export const CartTitle: React.FC = () => {
	const dataSumma = useSelector((state: any) => state.snikers.cartData)
	const sumData = dataSumma.reduce(
		(sum: any, priceValue: any) => Math.floor(sum + priceValue?.price),
		0
	)

	
	return (
		<div className='cart-title'>
			<p className='cart-title__text'>Shopping Cart</p>
			<p className='cart-title__text--special'>
				Total : {dataSumma.length} items
			</p>
			<p className='cart-title__text--primary'>
				Total sum: ${sumData ? sumData : 0}
			</p>
		</div>
	)
}
