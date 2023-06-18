import React, { useEffect, useState } from 'react'
import { sizeData } from '../../data/btns';
import { useSelector } from 'react-redux'
import { RootState } from '~/store/store'
import { SelectedSnikersData } from '~/utils/interfaces/interface'
import { setAddToCartHandler } from '../../store/slices/sliceSnikers'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '~/store/store'

export const ProductItems: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>()
	const [err, setErr] = useState<boolean>(false)
	const [idx, setIdx] = useState<number>(-1)
	const snikersData = useSelector(
		(state: RootState) => state.snikers.snikersData
	)
	const CartCard = useSelector((state: RootState) => state.snikers.cartData)
	const selectedSnikersData = useSelector(
		(state: RootState) => state.snikers.selectedSnikersData
	)

	useEffect(() => {
		localStorage.setItem('cartData', JSON.stringify(CartCard))
	}, [CartCard])

	const { name, price, id } = selectedSnikersData as SelectedSnikersData

	const buyProduct = () => {
		const haveProductInCart = CartCard.some((item: any) => item.id === id)
		// const selectedSniker = snikersData.find((sniker: any) => sniker.id === id)

		if (!haveProductInCart) {
			dispatch(setAddToCartHandler(id))
		} else {
			setErr(true)
			setTimeout(() => {
				setErr(false)
			}, 1000)
		}
	}

	return (
		<div className='product-items'>
			<p className='product-items__text'>{name}</p>
			<p className='product-items__text--special'>Men's Shoes</p>
			<p className='product-items__text--primary'>${price}</p>
			<p className='product-items__text--secondary'>
				Member Exclusive: use code LOVE20 for an extra 20% off select styles.
				Log in or sign up for free to save.
			</p>
			<p className='product-items__text--size'>Size Chart</p>
			<div className='product-items__btns'>
				{sizeData.map((item, index) => (
					<button
						onClick={() => setIdx(index)}
						className={
							idx === index
								? 'product-items__btn product-items__btn--primary'
								: 'product-items__btn'
						}
					>
						{item.size}
					</button>
				))}
			</div>
			<p className='product-items__text--white'>
				4 interest-free payments of $43.75 with Klarna. Learn More{' '}
				<span>Learn More</span>
			</p>
			<div className='product-items-btn__buy-inner'>
				<button onClick={() => buyProduct()} className='product-items-btn__buy'>
					{err ? 'Product added' : 'Add to Cart'}
				</button>
			</div>
			<p className='product-items__text--secondary'>
				You've got the hops and the speed—lace up in shoes that enhance what you
				bring to the court. The latest AJ is all about takeoffs and landings,
				with multiple Air units to help get you off the ground and Formula 23
				foam to ease your impact. The upper is made with strong, reinforced
				leno-weave fabric that'll keep you feeling contained—and leave your game
				uncompromised.
			</p>
		</div>
	)
}
