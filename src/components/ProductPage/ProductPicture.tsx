import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '~/store/store'
import { SelectedSnikersData } from '~/utils/interfaces/interface'

export const ProductPicture: React.FC = () => {
  const selectedSnikersData = useSelector(
    (state: RootState) => state.snikers.selectedSnikersData
  )

  if (!selectedSnikersData) {
    return null; // or handle the case when data is not available yet
  }

  const { sneaker1, sneaker2, sneaker3 } = selectedSnikersData as SelectedSnikersData;

  return (
    <div className='product-picture'>
      <img
        className='product-picture__item'
        src={`src/assets/img/${sneaker1}`}
        alt='sneaker1'
      />
      <div className='product-picture__items'>
        <img src={`src/assets/img/${sneaker2}`} alt='sneaker2' />
        <img src={`src/assets/img/${sneaker3}`} alt='sneaker3' />
      </div>
    </div>
  )
}
