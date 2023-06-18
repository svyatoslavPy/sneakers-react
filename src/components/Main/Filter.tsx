import React, { useState } from 'react'
import { btn } from '../../data/btns'
import {
	sortSnikersByMinPrice,
	sortSnikersByMaxPrice,
	sortSnikersByNewest,
	setFlagHandler,
} from '../../store/slices/sliceSnikers'
import { AppDispatch } from '~/store/store'
import { useDispatch } from 'react-redux'

export const Filter: React.FC = () => {
	const [idx, setIdx] = useState<number>(-1)
	const dispatch = useDispatch<AppDispatch>()

	const setIdxHandler = (idx: number, elm: any) => {
		setIdx(idx)
		if (elm.name === 'Lowest Price') {
			dispatch(sortSnikersByMinPrice())
		} else if (elm.name === 'Highest Price') {
			dispatch(sortSnikersByMaxPrice())
		} else if (elm.name === 'Newest') {
			dispatch(sortSnikersByNewest())
			dispatch(setFlagHandler(true))
		} else {
			dispatch(setFlagHandler(false))
		}
	}
	return (
		<div className='filter'>
			<div className='filter-items'>
				<p className='filter-items__text'>Filters</p>
				{btn.map((element: any, i: any) => (
					<button
						key={i}
						onClick={() => setIdxHandler(i, element)}
						className={
							idx === i
								? 'filter-items__btn filter-items__btn--primary '
								: 'filter-items__btn'
						}
					>
						{element.name}
					</button>
				))}
			</div>
		</div>
	)
}
