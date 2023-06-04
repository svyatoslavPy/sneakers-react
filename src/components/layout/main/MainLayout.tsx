import React from 'react'
import { Props } from '~/utils/interfaces/interface'

export const MainLayout: React.FC<Props> = ({ children }) => {
	return (
		<main className='main'>
			<div className='container'>{children}</div>
		</main>
	)
}
