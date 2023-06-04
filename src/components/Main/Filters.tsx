import React from 'react'
import { Filter } from './Filter'
import { Choise } from './Choise'

export const Filters: React.FC = () => {
	return (
		<div className='filters-wrapper'>
			<Filter />
			<Choise />
		</div>
	)
}
