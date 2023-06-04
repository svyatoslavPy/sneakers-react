import React from 'react'
import { Props } from '~/utils/interfaces/interface'

export const SectionSnikersLayout: React.FC<Props> = ({ children }) => {
	return <section className='section-cards'>{children}</section>
}
