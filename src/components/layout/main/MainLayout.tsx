import React from 'react'
import { Props } from '~/utils/interfaces/interface'

export const MainLayout: React.FC<Props> = ({ children }) => {
	return (
		<header className='main'>
			<div className='container'>{children}</div>
		</header>
	)
}
