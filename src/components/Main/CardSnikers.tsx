import React, { useEffect } from 'react'
import { getAllSnikers } from '../../store/slices/sliceSnikers'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '~/store/store'
import { CardSniker } from './CardSniker'

export const CardSnikers: React.FC = () => {
	const snikersData = useSelector(
		(state: RootState) => state.snikers.snikersData
	)
	const filteredResults = useSelector(
		(state: RootState) => state.snikers.snikersFilteredResults
	)

	const sortedFlag = useSelector((state: RootState) => state.snikers.filterFlag)
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(getAllSnikers('http://localhost:8000/snikers'))
	}, [])

	return (
		<div className='cards'>
			{!sortedFlag &&
				snikersData &&
				snikersData.map((sniker: any) => (
					<CardSniker key={sniker.id} {...sniker} />
				))}
			{sortedFlag &&
				filteredResults.map((sniker: any) => (
					<CardSniker key={sniker.id} {...sniker} />
				))}
		</div>
	)
}
