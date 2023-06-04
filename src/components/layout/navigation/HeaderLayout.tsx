import React from 'react'
import { Props } from '~/utils/interfaces/interface'

export const HeaderLayout: React.FC<Props> = ({ children }) => {
	return (
		<header className='header'>
			<div className='container'>{children}</div>
		</header>
	)
}
