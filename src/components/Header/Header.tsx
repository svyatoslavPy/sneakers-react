import React from 'react'
import { HeaderLayout } from '../layout/navigation/HeaderLayout'
import { Navbar } from './Navbar/Navbar'

export const Header: React.FC = () => {
	return (
		<HeaderLayout>
			<Navbar />
		</HeaderLayout>
	)
}
