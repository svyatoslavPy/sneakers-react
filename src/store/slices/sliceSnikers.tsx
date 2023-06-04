import { createSlice } from '@reduxjs/toolkit'

export interface snikersSliceI {
	snikersData: Array<string | number>
	snikersFilteredResults: Array<string | number>
	filterFlag: boolean
}

const initialState: snikersSliceI = {
	snikersData: [],
	snikersFilteredResults: [],
	filterFlag: false,
}

export const snikersSlice = createSlice({
	name: 'snikers',
	initialState,
	reducers: {
		setSnikersData: (state, action: any) => {
			state.snikersData = action.payload
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
} = snikersSlice.actions

export const getAllSnikers = (apiSnikers: string) => (dispatch: any) => {
	fetch(apiSnikers)
		.then((resp: any) => resp.json())
		.then(data => {
			dispatch(setSnikersData(data))
		})
}

export const setFlagHandler = (act: any) => (dispatch: any) => {
	dispatch(setFlag(act))
}
export default snikersSlice.reducer
