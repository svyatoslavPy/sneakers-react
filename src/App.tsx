import React from 'react'
import { Menpage } from './components/Menpage/Menpage'
import { Homepage } from './components/Homepage/Homepage'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

export const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/Men' element={<Menpage />} />
			</Routes>
		</BrowserRouter>
	)
}
