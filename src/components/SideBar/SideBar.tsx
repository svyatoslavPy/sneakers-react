import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useNavigate } from 'react-router-dom'

export const SideBar: React.FC = () => {
	const navigate = useNavigate()

	const cartDataSideBar = useSelector(
		(state: RootState) => state.snikers.cartData
	)
	const total = cartDataSideBar.reduce(
		(sum: any, priceValue: any) => Math.floor(sum + priceValue?.price),
		0
	)

	return (
		<>
			<p>Total: ${total}</p>
			{cartDataSideBar.length > 0 &&
				cartDataSideBar.map((cart: any) => <p key={cart?.id}>{cart?.name}</p>)}
			<p className='side-bar__text' onClick={() => navigate('/product/cart')}>
				Go to cart
			</p>
		</>
	)
}
