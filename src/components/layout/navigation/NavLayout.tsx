import React from 'react'
import { Props } from '~/utils/interfaces/interface'

export const NavLayout: React.FC<Props> = ({ children }) => {
	return <nav className='nav'>{children}</nav>
}
