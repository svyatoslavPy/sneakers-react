import React from 'react'
import { Props } from '~/utils/interfaces/interface'

export const SectionSideBarCartLayout: React.FC<Props> = ({ children }) => {
	return <section className='panel-cart'>{children}</section>
}
