import React from 'react'

import { MainLayout } from '../layout/main/MainLayout'
import { Title } from './Title'
import { Filters } from './Filters'
import { CardSnikers } from './CardSnikers'
import { SectionSnikersLayout } from '../layout/main/SectionSnikersLayout'
import { Pagination } from './Pagination'

export const MainMenPage: React.FC = () => {
	return (
		<MainLayout>
			<Title />
			<SectionSnikersLayout>
				<Filters />
				<CardSnikers />
			</SectionSnikersLayout>
			<Pagination />
		</MainLayout>
	)
}
