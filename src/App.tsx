import React from 'react'
import { MenPage } from './components/MenPage/Menpage';
import { HomePage } from './components/Homepage/HomePage'
import { ProductPage } from './components/ProductPage/ProductPage'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { Cart } from './components/Cart/Cart'

export const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/Men' element={<MenPage />} />
				<Route path='/Product' element={<ProductPage />} />
				<Route path='/Product/Cart' element={<Cart />} />
			</Routes>
		</BrowserRouter>
	)
}
