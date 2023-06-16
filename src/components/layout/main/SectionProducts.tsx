import React from 'react'
import { Props } from '~/utils/interfaces/interface'

export const SectionProductsLayout: React.FC<Props> = ({ children }) => {
	return <section className='products'>{children}</section>
}
