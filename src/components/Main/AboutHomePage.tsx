import React from 'react'
import arrBtn from '../../assets/img/arr-btn.svg'
import sneakerBg from '../../assets/img/sneaker-bg.svg'
import sneaker from '../../assets/img/sneaker.svg'

export const AboutHomePage: React.FC = () => {
	return (
		<div className='about'>
			<div className='about-item'>
				<p className='about-item__text'>
					Walk like a king with Our Trendy Shoes!
				</p>
				<p className='about-item__text--special'>
					Our collections include a wide range of shoes for men, women, and
					children.
				</p>
				<button className='about-item__btn'>
					<p>Shop Now </p>
					<img src={arrBtn} alt='arr-btn'></img>
				</button>
			</div>
			<div className='about-sniker'>
				<img src={sneakerBg} alt='sneaker-picture'></img>
				<div className='about-sniker__item'>
					<img src={sneaker} alt='sneaker'></img>
				</div>
			</div>
		</div>
	)	
}
