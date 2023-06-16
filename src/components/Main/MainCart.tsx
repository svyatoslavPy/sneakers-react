import React from 'react'
import { MainLayout } from '../layout/main/MainLayout'
import { CartTitle } from './CartTitle'
import { CartCard } from '../Cart/CartCard'

export const MainCart: React.FC = () => {
	return (
		<MainLayout>
			<CartTitle />
			<CartCard />
		</MainLayout>
	)
}
