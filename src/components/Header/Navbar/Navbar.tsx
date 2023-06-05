import React from 'react'
import { HeaderLogo, User, Basket, Search } from './index'
import { NavLayout } from '../../layout/navigation/NavLayout'
import { useNavigate } from 'react-router-dom'

export const Navbar: React.FC = () => {
	const navigate = useNavigate()

	return (
		<NavLayout>
			<div onClick={() => navigate('/')} className='nav-logo'>
				<img src={HeaderLogo} alt='logo'></img>
			</div>
			<div className='nav-links-inner'>
				<div className='nav-links'>
					<p onClick={() => navigate('/Men')} className='nav-links__item'>
						Men
					</p>
					<p className='nav-links__item'>Women</p>
					<p className='nav-links__item'>Kids</p>
					<p className='nav-links__item'>Upcoming</p>
				</div>
				<div className='nav-links-line'></div>
			</div>
			<div className='nav-buy'>
				<img src={User} alt='user'></img>
				<img src={Basket}></img>
				<img src={Search}></img>
			</div>
		</NavLayout>
	)
}
