import React from 'react'
import { Props } from '~/utils/interfaces/interface'

export const FooterLayout: React.FC<Props> = ({ children }) => {
	return (
		<footer className='footer'>
			<div className='container'>{children}</div>
		</footer>
	)
}
