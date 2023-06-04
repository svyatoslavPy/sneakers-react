import React from 'react'
import { CardSnikerI } from '~/utils/interfaces/interface'

export const CardSniker: React.FC<CardSnikerI> = ({
	id,
	name,
	price,
	img,
	bg,
}) => {
	return (
		<div className='card' key={id}>
			<div className={`card-picture ${bg}`}>
				<p className='card-picture__item'>
					<img src={`/src/assets/img/${img}.svg`} alt='adidas' />
				</p>
			</div>
			<div className='card-items'>
				<div className='card-items-inner'>
					<p className='card-items-inner__text'>{name}</p>
					<p className='card-items-inner__text--special'>${price}</p>
				</div>
			</div>
		</div>
	)
}
