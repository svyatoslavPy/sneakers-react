import { createSlice } from '@reduxjs/toolkit'
import { snikersSliceI } from '~/utils/interfaces/interface'
const { localStorage } = window

const initialSnikersData = localStorage.getItem('snikersData')
const initialSelectedSnikersData = localStorage.getItem('selectedSnikersData')
const inittialCartData = localStorage.getItem('cartData')

const initialState: snikersSliceI = {
	snikersData: initialSnikersData ? JSON.parse(initialSnikersData) : [],
	selectedSnikersData: initialSelectedSnikersData
		? JSON.parse(initialSelectedSnikersData)
		: [],
	snikersFilteredResults: [],
	cartData: inittialCartData ? JSON.parse(inittialCartData) : [],
	filterFlag: false,
	price: undefined,
}

export const snikersSlice = createSlice({
	name: 'snikers',
	initialState,
	reducers: {
		setAddToCart: (state, action: any) => {
			;[...state.cartData, state.cartData.push(action.payload)]
		},
		setSumAndQuantity: (state, action: any) => { 
			state.price = action.payload;
		},
		setDeleteToCart: (state, action: any) => {
			state.cartData = state.cartData.filter(
				(item: any) => item.id !== action.payload
			)
		},
		setSnikersData: (state, action: any) => {
			state.snikersData = action.payload
			localStorage.setItem('snikersData', JSON.stringify(action.payload))
		},
		setSelectedSnikersData: (state, action: any) => {
			state.selectedSnikersData = action.payload
			localStorage.setItem(
				'selectedSnikersData',
				JSON.stringify(action.payload)
			)
		},
		sortSnikersByMinPrice(state) {
			state.snikersData = state.snikersData.sort(
				(a: any, b: any) => a.price - b.price
			)
		},
		sortSnikersByMaxPrice(state) {
			state.snikersData = state.snikersData.sort(
				(a: any, b: any) => b.price - a.price
			)
		},
		sortSnikersByNewest(state) {
			state.snikersFilteredResults = state.snikersData.filter(
				(item: any) => item.newest
			)
		},
		setFlag: (state, action: any) => {
			state.filterFlag = action.payload
		},
	},
})

export const {
	setSnikersData,
	sortSnikersByMinPrice,
	sortSnikersByMaxPrice,
	sortSnikersByNewest,
	setFlag,
	setAddToCart,
	setSumAndQuantity,
	setDeleteToCart,
	setSelectedSnikersData,
} = snikersSlice.actions

export const getAllSnikers = (apiSnikers: string) => (dispatch: any) => {
	fetch(apiSnikers)
		.then((resp: any) => resp.json())
		.then(data => {
			dispatch(setSnikersData(data))
			localStorage.setItem('snikersData', JSON.stringify(data))
		})
		.catch(err => {
			console.error(`Fetch problem: ${err.message}`)
		})
}
export const getSniker = (apiSnikers: string) => (dispatch: any) => {
	fetch(apiSnikers)
		.then((resp: any) => resp.json())
		.then(data => {
			dispatch(setSelectedSnikersData(data))
			localStorage.setItem('selectedSnikersData', JSON.stringify(data))
		})
		.catch(err => {
			console.error(`Fetch problem: ${err.message}`)
		})
}

export const setAddToCartHandler = (product: any) => (dispatch: any) => {
	dispatch(setAddToCart(product))
}

export const setDeleteInCartHandler = (id: any) => (dispatch: any) => {
	dispatch(setDeleteToCart(id))
}

export const setFlagHandler = (act: any) => (dispatch: any) => {
	dispatch(setFlag(act))
}


export default snikersSlice.reducer
