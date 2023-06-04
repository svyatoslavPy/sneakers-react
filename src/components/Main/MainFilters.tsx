import React from 'react'
import { MainFilter } from './MainFilter'
import { MainChoise } from './MainChoise'

export const MainFilters: React.FC = () => {
	return (
		<div className='filters-wrapper'>
			<MainFilter />
			<MainChoise />
		</div>
	)
}
