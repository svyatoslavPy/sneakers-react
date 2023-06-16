import React from 'react'

import pagination from '../../assets/img/pagination.svg'

export const Pagination: React.FC = () => {
	return (
		<div className='pagination'>
			<p className='pagination__text'>
				Page <span>1</span> of <span>20</span>
			</p>
			<p className='pagination__text pagination__text--primary'>
				Next Page <img src={pagination} alt='pagination'></img>
			</p>
		</div>
	)
}
