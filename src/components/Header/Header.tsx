import React from 'react'
import { HeaderLayout } from '../layout/navigation/HeaderLayout'
import { NavBar } from './Navbar/NavBar'

export const Header: React.FC = () => {
	return (
		<HeaderLayout>
			<NavBar />
		</HeaderLayout>
	)
}

