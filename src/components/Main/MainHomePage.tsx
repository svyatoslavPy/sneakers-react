import React from 'react'

import { MainLayout } from '../layout/main/MainLayout'
import { AboutHomePage } from './AboutHomePage'

export const MainHomePage: React.FC = () => {
	return (
		<MainLayout>
			<AboutHomePage />
		</MainLayout>
	)
}
