import React from 'react'
import arrow from '../../assets/img/arrow.svg'

export const Choise: React.FC = () => {
	return (
		<div className='filter'>
			<div className='filter-items'>
				<div className='filter-items-item '>
					<p className='filter-items__btn--special'>Size</p>
					<img src={arrow} alt='arr'></img>
				</div>
				<div className='filter-items-item'>
					<p className='filter-items__btn--special'>Color</p>
					<img src={arrow} alt='arr'></img>
				</div>
				<div className='filter-items-item'>
					<p className='filter-items__btn--special'>Style</p>
					<img src={arrow} alt='arr'></img>
				</div>
				<div className='filter-items-item'>
					<p className='filter-items__btn--special'>Material</p>
					<img src={arrow} alt='arr'></img>
				</div>
			</div>
		</div>
	)
}
