import React from 'react'
import { Props } from '~/utils/interfaces/interface'

export const SectionSnikersLayout: React.FC<Props> = ({ children }) => {
	return <div className='section-cards'>{children}</div>
}
