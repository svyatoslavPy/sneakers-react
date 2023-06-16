import React, { useState } from 'react'
import fbIcon from '../../assets/img/fbIcon.svg'
import instIcon from '../../assets/img/instIcon.svg'
import twitterIcon from '../../assets/img/twitterIcon.svg'
import sibscribePicture from '../../assets/img/subscibe-picture.svg';

export const ProductSubscribe: React.FC = () => {
	const [subValue, setSubValue] = useState('')
	return (
		<div className='product-sibscribe'>
			<div className='product-sibscribe-items'>
				<p className='product-sibscribe-items__text'>
					Subscribe now to get the latest updates
				</p>
				<div className='product-sibscribe-items-btns'>
					<input
						onChange={e => setSubValue(e.target.value)}
						value={subValue}
						placeholder='Enter you email'
						className='product-sibscribe-items-btns__item'
						type='text'
					/>
					<button className='product-sibscribe-items-btns__item--primary'>
						SUBSCRIBE
					</button>
				</div>
				<div className='product-sibscribe-items-social'>
					<div className='product-sibscribe-items-social__item'>
						<img src={twitterIcon}></img>
					</div>
					<div className='product-sibscribe-items-social__item'>
						<img src={fbIcon}></img>
					</div>
					<div className='product-sibscribe-items-social__item'>
						<img src={instIcon}></img>
					</div>
				</div>
			</div>
			<div className="product-sibscribe__picture">
				<img src={sibscribePicture} alt='subscibe-picture'></img>
			</div>
		</div>
	)
}
