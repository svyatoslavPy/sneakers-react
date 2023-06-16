import React from 'react'
import { Header } from '../Header/Header'
import { MainProductPage } from '../Main/MainProductPage'
import { FooterProductPage } from '../Main/FooterProductPage'

export const ProductPage: React.FC = () => {
	return (
		<>
			<Header />
			<MainProductPage />
			<FooterProductPage />
		</>
	)
}
