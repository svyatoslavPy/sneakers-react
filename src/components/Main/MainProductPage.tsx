import React from 'react'

import { MainLayout } from '../layout/main/MainLayout'
import { ProductPicture } from '../ProductPage/ProductPicture'
import { ProductItems } from '../ProductPage/ProductItems'
import { SectionProductsLayout } from '../layout/main/SectionProducts'

export const MainProductPage: React.FC = () => {
	return (
		<MainLayout>
			<SectionProductsLayout>
				<ProductPicture />
				<ProductItems />
			</SectionProductsLayout>
		</MainLayout>
	)
}
