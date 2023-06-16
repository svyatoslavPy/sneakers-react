import React from 'react'

import { CardSnikerI } from '~/utils/interfaces/interface'
import { getSniker } from '../../store/slices/sliceSnikers'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '~/store/store'
import { useNavigate } from 'react-router-dom'

export const CardSniker: React.FC<CardSnikerI> = ({
	id,
	name,
	price,
	img,
	bg,
}) => {
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()
	
	const selectedSnikersData = useSelector(
		(state: RootState) => state.snikers.selectedSnikersData
	)

	const getSnikerHandler = (id: any) => {
		dispatch(getSniker(`http://localhost:8000/snikers/${id}`))

		if (selectedSnikersData) {
			navigate('/product')
		}
	}

	return (
		<div onClick={() => getSnikerHandler(id)} className='card' key={id}>
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
