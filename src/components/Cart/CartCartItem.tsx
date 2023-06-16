import React, { useMemo, useState } from 'react'
import minus from '../../assets/img/-.svg'
import addition from '../../assets/img/addition.svg'
import { setDeleteInCartHandler } from '../../store/slices/sliceSnikers'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '~/store/store'
import { CartCartItemI } from '~/utils/interfaces/interface'

export const CartCartItem: React.FC<CartCartItemI> = ({
	id,
	sneaker1,
	price,
	name,
}) => {
	const dispatch = useDispatch<AppDispatch>()

	const [quantity, setQuantity] = useState(1)
	const priced = useMemo(() => Math.floor(quantity * price), [quantity])

	const setQuantityMinus = () => {
		if (quantity > 0) {
			setQuantity(quantity - 1)
		}
	}

	const setQuantityPlus = () => {
		if (quantity < 10) {
			setQuantity(quantity + 1)
		}
	}

	const setDeleteCartHandler = () => {
		dispatch(setDeleteInCartHandler(id))
	}

	return (
		<div className='cart'>
			<div className='cart-picture'>
				<img src={`/src/assets/img/${sneaker1}`} alt='cart-picture'></img>
			</div>
			<div className='cart-items__inner'>
				<div className='cart-items'>
					<p className='cart-items__text'>{name}</p>
					<p className='cart-items__text--primary'>Men’s footwear</p>
					<p className='cart-items__text--primary'>
						Size: <span>8</span>
					</p>
					<p className='cart-items__text--primary'>
						Estimated delivery : <span>12 - 16 April</span>
					</p>
					<div className='cart-items-btns'>
						<button
							onClick={() => setQuantityMinus()}
							className='cart-items-btns__item'
						>
							<img src={minus} alt='minus' />
						</button>
						<button className='cart-items-btns__item--primary'>
							<p>{quantity}</p>
						</button>
						<button
							onClick={() => setQuantityPlus()}
							className='cart-items-btns__item'
						>
							<img src={addition} alt='minus' />
						</button>
					</div>
				</div>
				<div className='cart-items-primary'>
					<p className='cart-items-primary__text'>${priced}</p>
					<p
						onClick={() => setDeleteCartHandler()}
						className='cart-items-primary__text--special'
					>
						Delete
					</p>
				</div>
			</div>
		</div>
	)
}
