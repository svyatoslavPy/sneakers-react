import React from 'react'
import { Manpage } from './components/Manpage/Manpage'
import { Homepage } from './components/Homepage/Homepage'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

export const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/man' element={<Manpage />} />
			</Routes>
		</BrowserRouter>
	)
}
