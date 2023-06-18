import { createSlice } from '@reduxjs/toolkit'
import { snikersSliceI } from '~/utils/interfaces/interface'
const { localStorage } = window

const initialSnikersData = localStorage.getItem('snikersData')
const initialSelectedSnikersData = localStorage.getItem('selectedSnikersData')
const initialCartData = localStorage.getItem('cartData')
const initialQuantity = localStorage.getItem('quantity')

const initialState: snikersSliceI = {
	snikersData: initialSnikersData ? JSON.parse(initialSnikersData) : [],
	selectedSnikersData: initialSelectedSnikersData
		? JSON.parse(initialSelectedSnikersData)
		: [],
	snikersFilteredResults: [],
	cartData: initialCartData ? JSON.parse(initialCartData) : [],
	filterFlag: false,
	quantity: initialQuantity ? JSON.parse(initialQuantity) : 0,
}

export const snikersSlice = createSlice({
	name: 'snikers',
	initialState,
	reducers: {
		// 	case ADD_PRODUCT:
		// const item = state.products.find(n => n.id === action.payload.id);
		// return {
		//   ...state,
		//   products: item
		//     ? state.products.map(n => n === item ? { ...n, count: n.count + 1 } : n)
		//     : [ ...state.products, { ...action.payload, count: 1 } ],
		// };

		setAddToCart: (state, action: any) => {
			const selectedSniker = state.snikersData.find(
				(sniker: any) => sniker.id === action.payload
			)

			if (selectedSniker) {
				;[...state.cartData, state.cartData.push(selectedSniker)]
				//		console.log(selectedSniker.quantity);
			}
			// const haveInCart = state.cartData.some(
			// 	(item: any) => item.id === action.payload
			// )
			// localStorage.setItem('quantity', state.quantity.toString())
			// if (haveInCart) {
			// 	state.quantity = state.quantity + 1
			// }
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
