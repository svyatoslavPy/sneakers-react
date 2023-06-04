import React from 'react'
import { MainLayout } from '../layout/main/MainLayout'
import { MainTitle } from './MainTitle'
import { MainFilters } from './MainFilters'
import { CardSnikers } from './CardSnikers'
import { SectionSnikersLayout } from '../layout/main/SectionSnikersLayout'
import { Footer } from './Footer'

export const Main: React.FC = () => {
	return (
		<MainLayout>
			<MainTitle />
			<SectionSnikersLayout>
				<MainFilters />
				<CardSnikers />
			</SectionSnikersLayout>
			<Footer />
		</MainLayout>
	)
}
